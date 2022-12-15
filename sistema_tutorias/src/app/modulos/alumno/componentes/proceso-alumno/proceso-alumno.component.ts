import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno.model';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

@Component({
  selector: 'app-proceso-alumno',
  templateUrl: './proceso-alumno.component.html',
  styleUrls: ['./proceso-alumno.component.css']
})
export class ProcesoAlumnoComponent implements OnInit {

  solicitudProceso: solicitud = new solicitud();

  solicitudes : solicitud[] = []
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
  //Para Proceso módulo solicitudes
  mostrarSolicitud(solicitud : solicitud) : boolean{

    //La solicitud no es del alumno
    if(this.aservicio.alumnoActual.id != solicitud.alumnoAsesorado.id)
      return false;

    //La solicitud tiene fecha para llevarse a cabo, debe ir en próximas ... se rechaza
    if(solicitud.fechaAsesoria != "")
      return false;

    return true;
  }

  //Función para eliminar una solicitud
  cancelarSolicitud(solicitudP: solicitud){
    //Efectuar api delete
    this.servicio.eliminar('solicitud/eliminar', solicitudP.id).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.estado){//De ser exitoso recarga-refresca
        //this.router.navigate(['alumno/proceso']);
        this.router.navigate(['alumno']);
      }
      
    })

  }

  detallesSolicitud(solicitudP: solicitud): void {
    this.solicitudProceso = solicitudP;
  }

}