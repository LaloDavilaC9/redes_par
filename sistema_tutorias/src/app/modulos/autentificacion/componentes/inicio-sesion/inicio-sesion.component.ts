import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alumno } from 'src/app/modelos/alumno.model';
import { AutentificacionService } from '../../servicios/autentificacion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  formInicioSesion!: FormGroup;

  constructor(public servicioAutentificacion: AutentificacionService) {
    this.formInicioSesion = new FormGroup({
      'ID': new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}")]),
      'contrasena': new FormControl('', Validators.required)
    })
  } 

  ngOnInit(): void {
  }

  iniciarSesion(): void {
    console.log(this.formInicioSesion.value);
    this.servicioAutentificacion.establecerTipo(1);
    console.log(this.servicioAutentificacion.obtenerTipo);
  }

}
