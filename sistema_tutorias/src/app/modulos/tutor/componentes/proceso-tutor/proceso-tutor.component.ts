import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { Tutor } from 'src/app/modelos/tutor.model';

@Component({
  selector: 'app-proceso-tutor',
  templateUrl: './proceso-tutor.component.html',
  styleUrls: ['./proceso-tutor.component.css']
})
export class ProcesoTutorComponent implements OnInit {
  solicitudes : solicitud[] = []
  tutorActual!: Tutor;
  solicitudDetalle! : solicitud;
  
  constructor() { 
    this.tutorActual = {
      ID : 2,
      alumnoAsesorias: {
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
    };
    
  }

  ngOnInit(): void {
    const solicitud1 : solicitud ={
      ID : 5,
      alumnoAsesorado : {
        ID : 269314,
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
        ID : 2,
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
        ]
      },
      fechaPeticion : "25/01/2022",
      urgencia : false,
      materiaAsociada : {
        ID : 1,
        nombre : "Estructuras de datos",
        semestre : 3
      },
      tema : "Ciclos",
      descripcion: "No le entiendo a mi profe",
      fechaAsesoria : "",
      sitio : "",
      modalidad : "",
      tutoresNoDisponibles : []
    }
    //inicializamos solicitud detalle con cualquier cosa
    this.solicitudDetalle = solicitud1;


    this.solicitudes.push(solicitud1);
    //this.solicitudes.push(solicitud1);
    //this.solicitudes.push(solicitud1);
    

  }

  mostrarSolicitud(solicitudA : solicitud) : boolean{

    
    //Este tutor no fue el que aceptó la solicitud
    if(this.tutorActual.ID != solicitudA.tutorAsesorias.ID)
      return false;

    //La solicitud ya tiene fecha para llevarse acabo 
    if(solicitudA.fechaAsesoria != "")
      return false;

    return true;
  }

  verMas( id : number):void{
    const indice  = this.solicitudes.map(sol => sol.ID).indexOf(id);
    this.solicitudDetalle = this.solicitudes[indice];
    //alert("La solicitud es: "+this.solicitudDetalle.ID);
  }

  aceptar(id : number) : void{
    const indice  = this.solicitudes.map(sol => sol.ID).indexOf(id);
    this.solicitudDetalle = this.solicitudes[indice];
  }

}
