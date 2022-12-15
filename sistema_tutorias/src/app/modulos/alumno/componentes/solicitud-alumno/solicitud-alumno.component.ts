import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno.model';
import { Materia } from 'src/app/modelos/materia.model';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import { solicitudSimplificada } from 'src/app/modelos/solicitud-simplificada.model';
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
  solicitudRegistro: solicitudSimplificada = new solicitudSimplificada()
  solicitudes: solicitud[] =[]
  modalidades: string[] = ["Presencial", "Virtual"];
  urgencias: boolean[] = [true, false];
  materias!: Materia[]

  constructor(private servicio: ServicioApiService, private authservicio: AutentificacionService, private router: Router) { 
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
    this.servicio.getJSON('materia/obtenerPorSemestre/' + this.authservicio.alumnoActual.semestre).subscribe((res: any)=>{
      this.materias = res as Materia[];
    });
  }

  enviarSolicitud(): void {
    this.obtenerDatosSolicitud();

    //Efectuar api post para registar solicitud
    this.servicio.registrar('solicitud/agregar', this.solicitudRegistro).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.estado){//De ser exitoso te lleva a la página de proceso
        this.router.navigate(['alumno/proceso']);
      }

    });

    
  }

  obtenerDatosSolicitud(): void {

    //Para obtener un id válido
    //Obtener todas las asesorías y sumarle al último id 1.
    this.servicio.getJSON('solicitud/obtenerTodas/').subscribe((res: any)=>{
      this.solicitudes = res as solicitud[];
      this.solicitudRegistro.id= this.solicitudes[(this.solicitudes.length-1)].id + 1;
    });

    this.solicitudRegistro.alumnoAsesorado = this.authservicio.idAlumno
    this.solicitudRegistro.tutorAsesorias= 0;
    this.solicitudRegistro.fechaPeticion= new Date().toLocaleDateString();
    this.solicitudRegistro.urgencia = this.formSolicitud.get('urgencia')?.value;
    this.solicitudRegistro.materiaAsesoria = this.formSolicitud.get('materia')?.value;
    this.solicitudRegistro.tema = this.formSolicitud.get('tema')?.value;
    this.solicitudRegistro.descripcion = this.formSolicitud.get('descripcion')?.value;
    this.solicitudRegistro.fechaAsesoria = "";
    this.solicitudRegistro.sitio = "";
    this.solicitudRegistro.modalidad = this.formSolicitud.get('modalidad')?.value;
    this.solicitudRegistro.tutoresNoDisponibles = [];
  }
}
