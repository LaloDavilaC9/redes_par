import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/modelos/solicitud.model';

@Component({
  selector: 'app-solicitud-tutor',
  templateUrl: './solicitud-tutor.component.html',
  styleUrls: ['./solicitud-tutor.component.css']
})
export class SolicitudTutorComponent implements OnInit {

  solicitudes : solicitud[] = []

  constructor() { }

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
        ID : 247101,
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

    this.solicitudes.push(solicitud1);
    this.solicitudes.push(solicitud1);
    this.solicitudes.push(solicitud1);
    
  }

}
