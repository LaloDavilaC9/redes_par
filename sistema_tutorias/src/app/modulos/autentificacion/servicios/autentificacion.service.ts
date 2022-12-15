import { IfStmt } from '@angular/compiler';
import { Injectable, NgZone } from '@angular/core';

//Navegación
import { Router } from '@angular/router';
import { parse } from 'path';

//Alumno
import { Alumno } from 'src/app/modelos/alumno.model';
import { Tutor } from 'src/app/modelos/tutor.model';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

//Tutor

@Injectable({
  providedIn: 'root',
})
export class AutentificacionService {
  
  tutorActual: Tutor = new Tutor();
  alumnoActual: Alumno = new Alumno();
  idAlumno: number = 0;
  idTutor : number = 0;
  autorizacion: boolean = false; 
  tutores : Tutor[] = [];

  constructor(public router: Router,private servicio: ServicioApiService) {
  }


  asignarDatosAlumno(id: number){
    this.idAlumno = id;
  }


  get getStatusAlumno(): boolean {
    return this.autorizacion;
  }

  get getStatusTutor(): boolean {
    return this.idTutor != 0 ? true : false;
  }

  //Función para cerrar sesión
  cerrarSesion(): void {
    this.autorizacion  = false;
    this.idAlumno = 0;
    this.idTutor = 0;
    this.router.navigate(['/inicio-sesion']);
  }
}
