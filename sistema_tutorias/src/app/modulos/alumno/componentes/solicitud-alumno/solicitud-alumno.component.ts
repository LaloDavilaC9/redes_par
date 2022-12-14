import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Materia } from 'src/app/modelos/materia.model';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

@Component({
  selector: 'app-solicitud-alumno',
  templateUrl: './solicitud-alumno.component.html',
  styleUrls: ['./solicitud-alumno.component.css']
})
export class SolicitudAlumnoComponent implements OnInit {

  formSolicitud: FormGroup;

  modalidades: string[] = ["Presencial", "Línea"];
  urgencias: string[] = ["0", "1"];
  materias!: Materia[]

  constructor(private servicio: ServicioApiService) { 
    this.formSolicitud = new FormGroup({
      'materia': new FormControl('', Validators.required),
      'tema': new FormControl('',  Validators.required),
      'descripcion': new FormControl('', Validators.required),
      'urgencia': new FormControl('',  Validators.required),
      'modalidad': new FormControl('',  Validators.required),
    })
  }

  ngOnInit() : void{ 
    this.materias = this.servicio.getJSON(`http://localhost:8080/API_REST_Tutorias_UAA/materia/obtenerTodas`)
  }

  enviarSolicitud(): void {
    
  }
}
