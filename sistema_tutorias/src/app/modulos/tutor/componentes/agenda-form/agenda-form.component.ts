import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import { solicitudSimplificada } from 'src/app/modelos/solicitud-simplificada.model';
import { solicitud } from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrls: ['./agenda-form.component.css']
})
export class AgendaFormComponent implements OnInit {

  formAgenda!:FormGroup

  @Input() solicitudAgenda: solicitud = new solicitud();
  solicitudSimplificada : solicitudSimplificada = new solicitudSimplificada();

  constructor(private servicio: ServicioApiService, private authservicio: AutentificacionService, private router: Router) {
    this.formAgenda = new FormGroup({
      'fecha': new FormControl('', Validators.required),
      'sitio':new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  agendar(){
    this.solicitudSimplificada.id = this.solicitudAgenda.id 
    this.solicitudSimplificada.alumnoAsesorado = this.solicitudAgenda.alumnoAsesorado.id
    this.solicitudSimplificada.tutorAsesorias = this.solicitudAgenda.tutorAsesorias.id
    this.solicitudSimplificada.fechaPeticion = this.solicitudAgenda.fechaPeticion;
    this.solicitudSimplificada.urgencia = this.solicitudAgenda.urgencia
    this.solicitudSimplificada.materiaAsesoria = this.solicitudAgenda.materiaAsesoria.id
    this.solicitudSimplificada.tema = this.solicitudAgenda.tema
    this.solicitudSimplificada.descripcion = this.solicitudAgenda.descripcion
    this.solicitudSimplificada.fechaAsesoria = this.formAgenda.get(['fecha'])?.value
    this.solicitudSimplificada.sitio = this.formAgenda.get(['sitio'])?.value
    this.solicitudSimplificada.modalidad = this.solicitudAgenda.modalidad
    this.solicitudAgenda.tutoresNoDisponibles.forEach(tutor =>{
      this.solicitudSimplificada.tutoresNoDisponibles.push(tutor.id)
    })

    //Efectuar api put para modificar los datos
    this.servicio.actualizar('solicitud/actualizar', this.solicitudSimplificada, this.solicitudSimplificada.id).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
    });
  }

}
