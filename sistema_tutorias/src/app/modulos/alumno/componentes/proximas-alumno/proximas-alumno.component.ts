import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno.model';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { Tutor } from 'src/app/modelos/tutor.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

@Component({
  selector: 'app-proximas-alumno',
  templateUrl: './proximas-alumno.component.html',
  styleUrls: ['./proximas-alumno.component.css']
})
export class ProximasAlumnoComponent implements OnInit {

  solicitudProxima: solicitud = new solicitud();;

  solicitudes : solicitud[] = []
  alumnoActual!: Alumno;
  totalAsesorias : Number = 0;

  constructor(private servicio: ServicioApiService, private aservicio: AutentificacionService, private router: Router) { 
  }

  ngOnInit(): void {

    //Obtener los datos de las asesorias que involucran al alumno
    this.servicio.getJSON('solicitud/obtenerPorAlumno/'+ this.aservicio.alumnoActual.id).subscribe((res: any)=>{
      this.solicitudes = res as solicitud[];
    });
  }

  //Función que filtra que solicitues se muestran
  //Para Proximas módulo solicitudes
  mostrarSolicitud(solicitud : solicitud) : boolean{

    //La solicitud no tiene fecha de asesoria, cuando esta en proxima debe tener fecha ... entonces se rechaza
    if(solicitud.fechaAsesoria == "")
      return false;

    return true;
  }

  //Función para eliminar una solicitud
  cancelarSolicitud(solicitudP: solicitud){
    //Efectuar api delete
    this.servicio.eliminar('solicitud/eliminar', solicitudP.id).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.estado){//De ser exitoso recarga-refresca
        //this.router.navigate(['alumno/proximas']);
        this.router.navigate(['alumno']);
      }
    })

  }

  detallesSolicitud(solicitudP: solicitud): void {
    this.solicitudProxima= solicitudP;
  }
}