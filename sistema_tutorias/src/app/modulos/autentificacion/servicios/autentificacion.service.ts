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
  idAlumno: number = 0;
  idTutor : number = 0;
  autorizacion: boolean = false; 


  constructor(public router: Router,private servicio: ServicioApiService) {
  }


  asignarDatosAlumno(id: number){
    this.idAlumno = id;
    //Obtener id del tutor
  }


  get getStatus(): boolean {
    return this.autorizacion;
  }

  //Función para cerrar sesión
  cerrarSesion(): void {
    sessionStorage.clear;
    this.router.navigate(['/inicio-sesion']);
  }
}
