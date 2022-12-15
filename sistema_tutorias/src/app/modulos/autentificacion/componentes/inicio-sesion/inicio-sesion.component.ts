import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alumno } from 'src/app/modelos/alumno.model';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { Router } from '@angular/router';
import { Tutor } from 'src/app/modelos/tutor.model';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent implements OnInit {
  formInicioSesion!: FormGroup;
  id: number = 0;
  contrasena: string = '';
  alumnoActual: Alumno = new Alumno()
  tutoresActuales: Tutor[] = []

  constructor(
    private servicio: ServicioApiService,
    private servicioAutentificacion: AutentificacionService,
    private router: Router
  ) {
    this.formInicioSesion = new FormGroup({
      ID: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{6}'),
      ]),
      contrasena: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}


  iniciarSesion(): void {
    // Recuperar datos de el id ingresado
    this.servicioAutentificacion.idAlumno = this.formInicioSesion.get('ID')?.value;

    //Desencriptar contraseña
    /*const md5 = new Md5();
    const enc = md5.appendStr(this.formInicioSesion.get('contrasena')?.value).end;

    if (enc != undefined) {
      this.contrasena = enc.toString();
      console.log(this.contrasena)
    }*/

    //Buscar el usuario como alumno
    this.servicio.getJSON('alumno/obtener/' + this.servicioAutentificacion.idAlumno).subscribe((res: any)=>{
      this.alumnoActual = res as Alumno;
      this.servicioAutentificacion.alumnoActual = this.alumnoActual;
      //Comparar contraseña
      if (this.servicioAutentificacion.idAlumno == this.alumnoActual.id) {//this.contrasena == this.alumnoActual.clave
        this.servicioAutentificacion.autorizacion = true;
      }
    });

    //Buscar el usuario como tutor
    this.servicio.getJSON('tutor/obtenerTodos').subscribe((res: any)=>{
      this.tutoresActuales = res as Tutor[];
       //Se encuentra el ID del tutor
       this.tutoresActuales.forEach(element => {
        if(element.alumnoAsesorias.id == this.servicioAutentificacion.idAlumno){
          this.servicioAutentificacion.idTutor = element.id;
          this.servicioAutentificacion.tutorActual = element;
        }
       })
    });

    //Navegar hacia alumno
    this.router.navigate(['alumno']);
    
  }
}
