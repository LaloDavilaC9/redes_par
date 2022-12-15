import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import { solicitudSimplificada } from 'src/app/modelos/solicitud-simplificada.model';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { Tutor } from 'src/app/modelos/tutor.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

@Component({
  selector: 'app-proximas-tutor',
  templateUrl: './proximas-tutor.component.html',
  styleUrls: ['./proximas-tutor.component.css']
})
export class ProximasTutorComponent implements OnInit {

  solicitudes : solicitud[] = []
  solicitudDetalle! : solicitud;
  totalAsesorias : Number = 0;
  solicitudSimplificada : solicitudSimplificada = new solicitudSimplificada();
  
  constructor(private servicio: ServicioApiService, private aservicio: AutentificacionService, private router: Router) { 
  }

  ngOnInit(): void {
    //Obtener todas las solicitudes
    this.servicio.getJSON('solicitud/obtenerTodas').subscribe((res: any)=>{
      this.solicitudes = res as solicitud[];
    });

    //inicializamos solicitud detalle con cualquier cosa
    this.solicitudDetalle = new solicitud;
  }

  mostrarSolicitud(solicitudA : solicitud) : boolean{

    //La asesoría no es del tutor
    if(this.aservicio.tutorActual.id != solicitudA.tutorAsesorias.id)
      return false;

    //La solicitud no tiene fecha para llevarse acabo 
    if(solicitudA.fechaAsesoria == "")
      return false;

    return true;
  }

  verMas( id : number):void{
    const indice  = this.solicitudes.map(sol => sol.id).indexOf(id);
    this.solicitudDetalle = this.solicitudes[indice];
  }

  aceptar() : void{

  }

  //Para rechazar o cancelar una solicitud
  cancelar(id: number) : void{
    const indice  = this.solicitudes.map(sol => sol.id).indexOf(id);
    this.solicitudDetalle = this.solicitudes[indice];

    //Vaciar datos en simple
    this.vaciarDatos()

    //Efectuar api put para modificar los datos
    this.servicio.actualizar('solicitud/actualizar', this.solicitudSimplificada, this.solicitudSimplificada.id).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.estado){//De ser exitoso te lleva a la página de proceso
        this.router.navigate(['tutor/proceso']);
      }

    });

  }

  //Función que vacía los datos en una solicitud simple
  vaciarDatos(){
    this.solicitudSimplificada.id = this.solicitudDetalle.id 
    this.solicitudSimplificada.alumnoAsesorado = this.solicitudDetalle.alumnoAsesorado.id

    //Modificar id a 0
    this.solicitudSimplificada.tutorAsesorias = 0

    this.solicitudSimplificada.fechaPeticion = this.solicitudDetalle.fechaPeticion;
    this.solicitudSimplificada.urgencia = this.solicitudDetalle.urgencia
    this.solicitudSimplificada.materiaAsesoria = this.solicitudDetalle.materiaAsesoria.id
    this.solicitudSimplificada.tema = this.solicitudDetalle.tema
    this.solicitudSimplificada.descripcion = this.solicitudDetalle.descripcion

    //Reestablecer fecha y sitio a vacío
    this.solicitudSimplificada.fechaAsesoria = "";
    this.solicitudSimplificada.sitio = "";
    
    this.solicitudSimplificada.modalidad = this.solicitudDetalle.modalidad
    this.solicitudDetalle.tutoresNoDisponibles.forEach(tutor =>{
      this.solicitudSimplificada.tutoresNoDisponibles.push(tutor.id)
    })
    //Añadir tutor a la lista
    this.solicitudSimplificada.tutoresNoDisponibles.push(this.aservicio.idTutor)
  }



}