import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno.model';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {

  formRegistroAlumno!: FormGroup;
  semestres = [1,2,3,4,5,6,7,8,9];
  alumnoRegistro: Alumno = new Alumno()

  constructor(private servicio: ServicioApiService,
    private router: Router) {
    this.formRegistroAlumno = new FormGroup({
      'id': new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}")]),
      'nombre': new FormControl('', [Validators.required]),
      'apellidoPaterno': new FormControl(''),
      'apellidoMaterno': new FormControl(''),
      'semestre': new FormControl('',[Validators.required]),
      'telefono': new FormControl('', [Validators.required, Validators.pattern('(\\+52|0052|52)?[ -]*([0-9][ -]*){10}')]),
      'correo': new FormControl('', [Validators.required, Validators.email]),
      'clave': new FormControl('', Validators.required),
      'imagen': new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  obtenerDatosAlumno(){
    this.alumnoRegistro.id = this.formRegistroAlumno.get('id')?.value;
    this.alumnoRegistro.nombre =this.formRegistroAlumno.get('nombre')?.value;
    this.alumnoRegistro.apellidoPaterno = this.formRegistroAlumno.get('apellidoPaterno')?.value;
    this.alumnoRegistro.apellidoMaterno = this.formRegistroAlumno.get('apellidoMaterno')?.value;
    this.alumnoRegistro.semestre = this.formRegistroAlumno.get('semestre')?.value;
    this.alumnoRegistro.telefono = this.formRegistroAlumno.get('telefono')?.value;
    this.alumnoRegistro.correo = this.formRegistroAlumno.get('correo')?.value;
    this.alumnoRegistro.clave = this.formRegistroAlumno.get('clave')?.value;
    this.alumnoRegistro.imagen = "ejemplo.png"
  }

  registrarAlumno(): void {
    this.obtenerDatosAlumno();

    //Efectuar api post para registar alumno
    this.servicio.registrar('alumno/agregar', this.alumnoRegistro).subscribe((res: any) => {
      
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.estado){//De ser exitoso te lleva a la página de inicio de sesión.
        this.router.navigate(['inicio-sesion']);
      }

    });
  }
}
