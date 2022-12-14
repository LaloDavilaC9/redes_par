import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alumno } from 'src/app/modelos/alumno.model';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {

  formRegistroAlumno!: FormGroup;
  semestres = [1,2,3,4,5,6,7,8,9];

  constructor() {
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

  registrarAlumno(): void {
    //Si el id ya existe, mandar mensaje

    //Si el id no existe, registrarlo
  }

}
