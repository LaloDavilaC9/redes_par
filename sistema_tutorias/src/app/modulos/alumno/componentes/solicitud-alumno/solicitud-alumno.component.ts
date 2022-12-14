import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { solicitud } from 'src/app/modelos/solicitud.model';

@Component({
  selector: 'app-solicitud-alumno',
  templateUrl: './solicitud-alumno.component.html',
  styleUrls: ['./solicitud-alumno.component.css']
})
export class SolicitudAlumnoComponent implements OnInit {

  formSolicitud: FormGroup;

  modalidades: string[] = ["Presencial", "Línea"];
  urgencias: string[] = ["0", "1"];
  materias: string[] = ["Acción", "Aventuras", "Ciencia Ficción", "Comedia", "No ficción", "Drama", "Fantasía", "Musical", "Suspenso", "Terror"];

  constructor() { 
    this.formSolicitud = new FormGroup({
      'materia': new FormControl('', Validators.required),
      'tema': new FormControl('',  Validators.required),
      'descripcion': new FormControl('', Validators.required),
      'urgencia': new FormControl('',  Validators.required),
      'modalidad': new FormControl('',  Validators.required),
    })
  }

  ngOnInit() : void{
  }

  enviarSolicitud(): void {
    
  }
}
