import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { Tutor } from 'src/app/modelos/tutor.model';

@Component({
  selector: 'app-solicitud-tutor',
  templateUrl: './solicitud-tutor.component.html',
  styleUrls: ['./solicitud-tutor.component.css']
})
export class SolicitudTutorComponent implements OnInit {

  solicitudes : solicitud[] = []
  tutorActual!: Tutor;

  constructor() { 

    this.tutorActual = {
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
      ]
    };

  }

  ngOnInit(): void {

    const solicitud1 : solicitud ={
      ID : 5,
      alumnoAsesorado : {
        ID : 269314,
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
            ID : 0,
            nombre: "",
            semestre: 0
          },
        ]
      },


        
   
      fechaPeticion : "",
      urgencia : false,
      materiaAsociada : {
        ID : 1,
        nombre : "Estructuras de datos",
        semestre : 3
      },
      tema : "Ciclos",
      descripcion: "No le entiendo a mi profe",
      fechaAsesoria : "27/01/2023",
      sitio : "",
      modalidad : "",
      tutoresNoDisponibles : []
    }

    this.solicitudes.push(solicitud1);
    this.solicitudes.push(solicitud1);
    this.solicitudes.push(solicitud1);
    
  }

  mostrarSolicitud(solicitudA : solicitud) : boolean{

    //El tutor no da la materia que pide la solicitud
    if(this.tutorActual.materiasAsesorias.filter(elemento => elemento.ID == solicitudA.materiaAsociada.ID).length == 0){
      return false;
    }
   
    return true;
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