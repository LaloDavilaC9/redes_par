import { Injectable, NgZone } from '@angular/core';

//Navegación
import { Router } from '@angular/router';

//Alumno
import { Alumno } from '../../alumno/modelos/alumno.model';

//Tutor

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  alumno!: Alumno;
  //tutor!: Tutor;

  //Tipo de sesión, 1 alumno, 2 tutor
  tipo: number = 0;

  constructor(public router: Router, public ngZone: NgZone) {
    this.alumno = {
      ID: 0,
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      semestre: 0,
      telefono: "",
      correo: "",
      clave: "",
      imagen: "",
    }
  }

  registrarAlumno(): void {

  }

  registrarTutor(): void {

  }

  iniciarSesion(): void {
    
  }


  //Funciones para establecer y obtener el estado como tutor o alumno
  establecerTipo(valor: number){
    this.tipo = valor;
  }

  get obtenerTipo(): number {
    return this.tipo;
  }

  //Funciones para ver si existe alguien en sesión
  get sesionActual(): boolean {
    return this.alumno.ID !== 0 ? true : false;
  }

  get alumnoActual(): number {
    return this.alumno.ID
  }

  //Función para cerrar sesión
  cerrarSesion(): void {
    this.alumno.ID = 0;
    this.router.navigate(['/inicio-sesion']);
  }


}