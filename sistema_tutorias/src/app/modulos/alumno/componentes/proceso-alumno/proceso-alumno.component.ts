import { Component,OnInit} from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno.model';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

@Component({
  selector: 'app-proceso-alumno',
  templateUrl: './proceso-alumno.component.html',
  styleUrls: ['./proceso-alumno.component.css']
})
export class ProcesoAlumnoComponent implements OnInit {

  solicitudProceso!: solicitud;

  solicitudes : solicitud[] = []
  alumnoActual!: Alumno;
  totalAsesorias : Number = 0;
  constructor(private servicio: ServicioApiService, private authservicio: AutentificacionService) { 
  }

  ngOnInit(): void {
    this.alumnoActual = this.servicio.getJSON('alumno/obtener/' + this.authservicio.alumno.id);
    this.solicitudes = this.servicio.getJSON('solicitud/obtenerPorAlumno/'+ this.authservicio.alumno.id)
    

    //Inicializar variable para detalles de solicitud
    this.establecerSProceso();
  }

  //Función que filtra que solicitues se muestran
  //Para Proceso módulo solicitudes

  mostrarSolicitud(solicitud : solicitud) : boolean{

    //La solicitud no es del alumno
    if(this.alumnoActual.id != solicitud.alumnoAsesorado.id)
      return false;

    //La solicitud tiene fecha para llevarse a cabo
    if(solicitud.fechaAsesoria != "")
      return false;

    return true;
  }

  cancelarSolicitud(solicitud: solicitud){
  }

  detallesSolicitud(solicitudP: solicitud): void {
    this.solicitudProceso = solicitudP;
  }

  establecerSProceso(){
    this.solicitudProceso = this.solicitudes[0];
  }
}