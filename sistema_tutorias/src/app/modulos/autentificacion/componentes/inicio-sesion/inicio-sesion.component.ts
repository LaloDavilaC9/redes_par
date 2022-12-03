import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alumno } from 'src/app/modulos/alumno/modelos/alumno.model';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  formInicioSesion!: FormGroup;

  constructor() {
    this.formInicioSesion = new FormGroup({
      'ID': new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}")]),
      'contrasena': new FormControl('', Validators.required)
    })
  } 

  ngOnInit(): void {
  }

  iniciarSesion(): void {

  }

}
