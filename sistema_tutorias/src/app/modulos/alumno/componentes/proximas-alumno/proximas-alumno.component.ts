import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno.model';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { Tutor } from 'src/app/modelos/tutor.model';

@Component({
  selector: 'app-proximas-alumno',
  templateUrl: './proximas-alumno.component.html',
  styleUrls: ['./proximas-alumno.component.css']
})
export class ProximasAlumnoComponent implements OnInit {

  solicitudProxima!: solicitud;

  solicitudes : solicitud[] = []
  alumnoActual!: Alumno;
  totalAsesorias : Number = 0;
  constructor() { 
    this.alumnoActual = {
      ID: 226582,
      nombre: "Cynthia Maritza",
      apellidoPaterno: "Terán",
      apellidoMaterno: "Carranza",
      semestre: 7,
      telefono: "4491808868",
      correo: "al226582@edu.uaa.mx",
      clave: "1234",
      imagen: ""
    };
  }

  ngOnInit(): void {
    const solicitud1 : solicitud ={
      ID : 5,
      alumnoAsesorado : {
        ID: 226582,
        nombre: "Cynthia Maritza",
        apellidoPaterno: "Terán",
        apellidoMaterno: "Carranza",
        semestre: 7,
        telefono: "4491808868",
        correo: "al226582@edu.uaa.mx",
        clave: "1234",
        imagen: ""
      },

      tutorAsesorias : {
        ID : 2,
        alumnoAsesorias :{
          ID : 247101,
          nombre: "",
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
      fechaAsesoria : "12/12/2023 10:00:00",
      sitio : "",
      modalidad : "",
      tutoresNoDisponibles : []
    }
    this.solicitudes.push(solicitud1);

    //Inicializar variable para detalles de solicitud
    this.establecerSProxima();
  }

  //Función que filtra que solicitues se muestran
  //Para Proximas módulo solicitudes
  mostrarSolicitud(solicitud : solicitud) : boolean{

    //La solicitud  no es del del alumno
    if(this.alumnoActual.ID != solicitud.alumnoAsesorado.ID)
      return false;

    //La solicitud no tiene fecha de asesoria
    if(solicitud.fechaAsesoria == "")
      return false;

    return true;
  }

  cancelarSolicitud(solicitud: solicitud){
  }

  detallesSolicitud(solicitudP: solicitud): void {
    this.solicitudProxima= solicitudP;
  }

  establecerSProxima(){
    this.solicitudProxima = this.solicitudes[0];
  }
}