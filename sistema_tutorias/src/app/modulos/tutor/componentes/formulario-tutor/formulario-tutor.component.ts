import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-tutor',
  templateUrl: './formulario-tutor.component.html',
  styleUrls: ['./formulario-tutor.component.css']
})
export class FormularioTutorComponent implements OnInit {

  formMateria!: FormGroup;
  materias = [1,2,3,4,5,6,7];
  materias_tutor : number[]= []

  constructor() {
    this.formMateria = new FormGroup({
      'materia': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  //Método para agregar las materias del tutor
  agregarMateria(): void{
    this.materias_tutor.push(this.formMateria.get('materia')?.value);
    this.materias_tutor = this.materias_tutor.filter((item,index)=>{
      return this.materias_tutor.indexOf(item) === index;
    })
    console.log(this.materias_tutor);
  }

  registrarTutor(): void {
    
  }

}
