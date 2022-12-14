import { Component, OnInit } from '@angular/core';
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
  //tutorActual!: Tutor;
  solicitudDetalle! : solicitud;
  totalAsesorias : Number = 0;
  constructor(private servicio: ServicioApiService, private authservicio: AutentificacionService) { 
    
  }

  ngOnInit(): void {
    //inicializamos solicitud detalle con cualquier cosa
    this.solicitudDetalle = new solicitud;
    this.cargarSolicitudes();
  }

  mostrarSolicitud(solicitudA : solicitud) : boolean{

    
    //La asesoría no es del tutor
    if(this.authservicio.tutorActual.id != solicitudA.tutorAsesorias.id)
      return false;

    //La solicitud no tiene fecha para llevarse acabo 
    if(solicitudA.fechaAsesoria == "")
      return false;

    return true;
  }

  verMas( id : number):void{
    const indice  = this.solicitudes.map(sol => sol.id).indexOf(id);
    this.solicitudDetalle = this.solicitudes[indice];
    //alert("La solicitud es: "+this.solicitudDetalle.ID);
  }

  aceptar() : void{

  }

  cargarSolicitudes():void{
    const urapi = `solicitud/obtenerTodas`;
    //Obtener todas las solicitudes
    this.servicio.getJSON('solicitud/obtenerTodas').subscribe((res: any)=>{
      this.solicitudes = res as solicitud[];
    });
  }


}


/*this.tutorActual = {
      id : 2,
      alumnoAsesorias: {
        id : 247101,
          nombre: "Cynthia Maritza",
          apellidoPaterno : "Terán",
          apellidoMaterno : "Carranza",
          semestre : 7,
          telefono : "4499205022",
          correo : "cynthia@gmail.com",
          clave : "1234",
          imagen : ""
      },
      materiasAsesorias:[
        {
          id : 1,
          nombre: "Estructuras de Datos",
          semestre: 3
        },
        {
          id : 2,
          nombre: "Álgebra Lineal",
          semestre: 2
        },
      ]
    }; */


/*const solicitud1 : solicitud ={
      id : 5,
      alumnoAsesorado : {
        id : 269314,
        nombre: "ALBERTO",
        apellidoPaterno : "SÁNCHEZ",
        apellidoMaterno : "RODRÍGUEZ",
        semestre : 4,
        telefono : "4499205022",
        correo : "alberto.snchez966@gmail.com",
        clave : "1234",
        imagen : ""
      },

      tutorAsesorias : {
        id : 2,
        alumnoAsesorias :{
          id : 247101,
          nombre: "Cynthia Maritza",
          apellidoPaterno : "Terán",
          apellidoMaterno : "Carranza",
          semestre : 7,
          telefono : "4499205022",
          correo : "cynthia@gmail.com",
          clave : "1234",
          imagen : ""
        },
        materiasAsesorias: [
          {
            id : 1,
            nombre : "Estructuras de datos",
            semestre : 3
          }
        ]
      },
      fechaPeticion : "25/01/2022",
      urgencia : false,
      materiaAsesoria : {
        id : 1,
        nombre : "Estructuras de datos",
        semestre : 3
      },
      tema : "Ciclos",
      descripcion: "No le entiendo a mi profe",
      fechaAsesoria : "22/01/2023 16:00",
      sitio : "BIBLIOTECA",
      modalidad : "Presencial",
      tutoresNoDisponibles : []
    }*/
