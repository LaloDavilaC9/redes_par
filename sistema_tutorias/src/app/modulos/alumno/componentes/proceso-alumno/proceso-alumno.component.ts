import { Component,OnInit} from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno.model';
import { solicitud } from 'src/app/modelos/solicitud.model';

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
      fechaAsesoria : "",
      sitio : "",
      modalidad : "",
      tutoresNoDisponibles : []
    }
    this.solicitudes.push(solicitud1);

    //Inicializar variable para detalles de solicitud
    this.establecerSProceso();
  }

  //Función que filtra que solicitues se muestran
  //Para Proceso módulo solicitudes

  mostrarSolicitud(solicitud : solicitud) : boolean{

    //La solicitud no es del alumno
    if(this.alumnoActual.ID != solicitud.alumnoAsesorado.ID)
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