import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Materia } from 'src/app/modelos/materia.model';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

@Component({
  selector: 'app-solicitud-alumno',
  templateUrl: './solicitud-alumno.component.html',
  styleUrls: ['./solicitud-alumno.component.css']
})
export class SolicitudAlumnoComponent implements OnInit {

  formSolicitud: FormGroup;

  modalidades: string[] = ["PRESENCIAL", "VIRTUAL"];
  urgencias: boolean[] = [true, false];
  materias!: Materia[]

  constructor(private servicio: ServicioApiService, private authservicio: AutentificacionService) { 
    this.formSolicitud = new FormGroup({
      'materia': new FormControl('', Validators.required),
      'tema': new FormControl('',  Validators.required),
      'descripcion': new FormControl('', Validators.required),
      'urgencia': new FormControl('',  Validators.required),
      'modalidad': new FormControl('',  Validators.required),
    })
  }

  ngOnInit() : void{ 
    //Obtener todas las materias del semestre del alumno
    this.servicio.getJSON('materia/obtenerPorSemestre/' + this.authservicio.idAlumno).subscribe((res: any)=>{
      this.materias = res as Materia[];
    });
  }

  enviarSolicitud(): void {
    
  }
}
