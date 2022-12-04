import { IfStmt } from '@angular/compiler';
import { Injectable, NgZone } from '@angular/core';

//Navegación
import { Router } from '@angular/router';
import { parse } from 'path';

//Alumno
import { Alumno } from 'src/app/modelos/alumno.model';
import { Tutor } from 'src/app/modelos/tutor.model';

//Tutor

@Injectable({
  providedIn: 'root',
})
export class AutentificacionService {
  alumno!: Alumno;
  tutor!: Tutor;

  //Tipo de sesión, 1 alumno, 2 tutor
  tipo: number = 0;

  constructor(public router: Router, public ngZone: NgZone) {
  }

  iniciarSesionTutor(datos: Tutor): void {
    sessionStorage.setItem('alumno', JSON.stringify(datos));
    this.actualizarTutor();
  }

  iniciarSesionAlumno(datos: Alumno): void {
    sessionStorage.setItem('alumno', JSON.stringify(datos));
    this.actualizarAlumno();
  }

  //Funciones para establecer y obtener el estado como tutor o alumno
  /*establecerTipo(valor: number) {
    this.tipo = valor;
  }

  get obtenerTipo(): number {
    return this.tipo;
  }*/

  actualizarAlumno(): void {
    const aux = sessionStorage.getItem('alumno');
    if(aux != null)
      this.alumno = JSON.parse(aux) as Alumno;
  }

  actualizarTutor(): void {
    const aux = sessionStorage.getItem('tutor');
    if(aux != null)
      this.tutor = JSON.parse(aux) as Tutor;
  }

  //Funciones para ver si existe alguien en sesión
  get sesionActual(): number {
    //Un dato en sessionStorage -> alumno
    //Dos datos -> tutor
    //Ninguno -> No hay sesión iniciada
    return sessionStorage.length;
  }

  //Función para cerrar sesión
  cerrarSesion(): void {
    sessionStorage.clear;
    this.router.navigate(['/inicio-sesion']);
  }
}
