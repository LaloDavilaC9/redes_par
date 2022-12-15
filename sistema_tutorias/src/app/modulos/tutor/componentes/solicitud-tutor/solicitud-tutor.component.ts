import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import { solicitudSimplificada } from 'src/app/modelos/solicitud-simplificada.model';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { Tutor } from 'src/app/modelos/tutor.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

@Component({
  selector: 'app-solicitud-tutor',
  templateUrl: './solicitud-tutor.component.html',
  styleUrls: ['./solicitud-tutor.component.css']
})
export class SolicitudTutorComponent implements OnInit {

  solicitudes : solicitud[] = [];
  tutorActual!: Tutor;
  solicitudDetalle! : solicitud;
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

    //El tutor no da la materia que pide la solicitud
    if(this.aservicio.tutorActual.materiasAsesorias.filter(elemento => elemento.id == solicitudA.materiaAsesoria.id).length == 0)
      return false;


    //El tutor ya rechazó la solicitud alguna vez
    if(solicitudA.tutoresNoDisponibles.filter(elemento => elemento.id == this.aservicio.idTutor).length != 0)
      return false;
    

    //Si un tutor ya aceptó, no lo muestra
    if(solicitudA.tutorAsesorias.id != 0)
      return false;

    
    //Rectificamos que no haya una fecha programada
    if(solicitudA.fechaAsesoria != "")
      return false;

   
    return true;
  }

  actualizarSolicitud(id: number, band: number) : void{
    const indice  = this.solicitudes.map(sol => sol.id).indexOf(id);
    this.solicitudDetalle = this.solicitudes[indice];

    //Vaciar datos en simple
    this.vaciarDatos()

    //Si se cancela o rechaza la solicitud
    if(band == 1){
      this.rechazar()
    }

    //Efectuar api put para modificar los datos
    this.servicio.actualizar('solicitud/actualizar', this.solicitudSimplificada, this.solicitudSimplificada.id).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.estado){//De ser exitoso te lleva a la página de proceso
        this.router.navigate(['tutor/proceso']);
      }

    });

  }

  verMas( id : number):void{
    const indice  = this.solicitudes.map(sol => sol.id).indexOf(id);
    this.solicitudDetalle = this.solicitudes[indice];
  }

  //Función que vacía los datos en una solicitud simple
  vaciarDatos(){
    this.solicitudSimplificada.id = this.solicitudDetalle.id 
    this.solicitudSimplificada.alumnoAsesorado = this.solicitudDetalle.alumnoAsesorado.id
    this.solicitudSimplificada.tutorAsesorias = this.aservicio.idTutor;
    this.solicitudSimplificada.fechaPeticion = this.solicitudDetalle.fechaPeticion;
    this.solicitudSimplificada.urgencia = this.solicitudDetalle.urgencia
    this.solicitudSimplificada.materiaAsesoria = this.solicitudDetalle.materiaAsesoria.id
    this.solicitudSimplificada.tema = this.solicitudDetalle.tema
    this.solicitudSimplificada.descripcion = this.solicitudDetalle.descripcion
    this.solicitudSimplificada.fechaAsesoria = "";
    this.solicitudSimplificada.sitio = "";
    this.solicitudSimplificada.modalidad = this.solicitudDetalle.modalidad
    this.solicitudDetalle.tutoresNoDisponibles.forEach(tutor =>{
      this.solicitudSimplificada.tutoresNoDisponibles.push(tutor.id)
    })
  }

  //Función que cambia el id y agrega un tutorNoDisponible
  rechazar(){
    this.solicitudSimplificada.tutorAsesorias = 0;
    this.solicitudSimplificada.tutoresNoDisponibles.push(this.aservicio.idTutor)
  }



}

