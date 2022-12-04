import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioAlumnoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormularioAlumnoComponent
  ]
})
export class AlumnoModule { }
