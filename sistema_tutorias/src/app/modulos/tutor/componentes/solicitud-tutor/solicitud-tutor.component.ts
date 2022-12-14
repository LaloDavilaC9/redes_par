import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { Tutor } from 'src/app/modelos/tutor.model';
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

  constructor(private servicio: ServicioApiService) { 

    this.tutorActual = {
      id : 1,
      alumnoAsesorias: {
        id: 0,
        nombre:  "",
        apellidoPaterno:  "",
        apellidoMaterno: "",
        semestre: 0,
        telefono:   "",
        correo:  "",
        clave:  "",
        imagen:  "",
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
    };

  }

  ngOnInit(): void {

    this.pedirSolicitud()

    var solicitud1 : solicitud ={
      id : 5,
      alumnoAsesorado : {
        id : 269314,
        nombre: "LALO",
        apellidoPaterno : "DAVILA",
        apellidoMaterno : "CAMPOS",
        semestre : 3,
        telefono : "4499205022",
        correo : "eduardo.davilac9@gmail.com",
        clave : "1234",
        imagen : ""
      },
      tutorAsesorias : {
        id : 0,
        alumnoAsesorias: {
          id: 0,
          nombre:  "",
          apellidoPaterno:  "",
          apellidoMaterno: "",
          semestre: 0,
          telefono:   "",
          correo:  "",
          clave:  "",
          imagen:  "",
        },
        materiasAsesorias:[
          {
            id : 0,
            nombre: "",
            semestre: 0
          },
        ]
      },

      fechaPeticion : "12/08/2022",
      urgencia : false,
      materiaAsesoria : {
          id : 2,
          nombre: "Álgebra Lineal",
          semestre: 2
      },
      tema : "Ciclos",
      descripcion: "No le entiendo a mi profe",
      fechaAsesoria : "",
      sitio : "",
      modalidad : "",
      tutoresNoDisponibles : [
       
      ]

    }


     
        /*{
          ID : 0,
          alumnoAsesorias: {
            ID: 0,
            nombre:  "",
            apellidoPaterno:  "",
            apellidoMaterno: "",
            semestre: 0,
            telefono:   "",
            correo:  "",
            clave:  "",
            imagen:  "",
          },
          materiasAsesorias:[
            {
              ID : 1,
              nombre: "Estructuras de Datos",
              semestre: 3
            },
            {
              ID : 2,
              nombre: "Álgebra Lineal",
              semestre: 2
            },
          ]
        }*/
    //inicializamos solicitud detalle con cualquier cosa
    this.solicitudDetalle = solicitud1;

    this.solicitudes.push(solicitud1);
    solicitud1.id = 6;
    this.solicitudes.push(solicitud1);
    this.solicitudes.push(solicitud1);
    
  }

  mostrarSolicitud(solicitudA : solicitud) : boolean{

    //El tutor no da la materia que pide la solicitud
    if(this.tutorActual.materiasAsesorias.filter(elemento => elemento.id == solicitudA.materiaAsesoria.id).length == 0)
      return false;


    //El tutor ya rechazó la solicitud alguna vez
    if(solicitudA.tutoresNoDisponibles.filter(elemento => elemento.id == this.tutorActual.id).length != 0)
      return false;
    

    //Si un tutor ya aceptó, no lo muestra
    if(solicitudA.tutorAsesorias.id != 0)
      return false;

    
    //Rectificamos que no haya una fecha programada
    if(solicitudA.fechaAsesoria != "")
      return false;

   
    return true;
  }

  aceptar() : void{

  }

  verMas( id : number):void{
    const indice  = this.solicitudes.map(sol => sol.id).indexOf(id);
    this.solicitudDetalle = this.solicitudes[indice];
    //alert("La solicitud es: "+this.solicitudDetalle.ID);
  }

  pedirSolicitud():void{
    const urapi = `http://localhost:8080/API_REST_Tutorias_UAA/materia/obtenerTodas`;
  }

}






/*{ID : 247101,
        alumnoAsesorias :{
          ID : 247101,
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
            ID : 1,
            nombre : "Estructuras de datos",
            semestre : 3
          }
        ]*/