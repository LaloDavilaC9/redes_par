import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alumno } from 'src/app/modelos/alumno.model';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { Router } from '@angular/router';

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

    //Encriptar contraseña
    /*const md5 = new Md5();
    const enc = md5.appendStr(this.formInicioSesion.get('contrasena')?.value).end;

    if (enc != undefined) {
      this.contrasena = enc.toString();
      console.log(this.contrasena)
    }*/

    //Buscar el usuario
    this.servicio.getJSON('alumno/obtener/' + this.servicioAutentificacion.idAlumno).subscribe((res: any)=>{
      this.alumnoActual = res as Alumno;
      //Comparar contraseña

      console.log("Contraseña del alumno " + this.alumnoActual.clave);
      console.log("Nombre del alumno " + this.alumnoActual.nombre);
      if (this.servicioAutentificacion.idAlumno == this.alumnoActual.id) {//this.contrasena == this.alumnoActual.clave
        this.servicioAutentificacion.autorizacion = true;
        this.router.navigate(['alumno']);
    
      }
    });
    
  }
}
