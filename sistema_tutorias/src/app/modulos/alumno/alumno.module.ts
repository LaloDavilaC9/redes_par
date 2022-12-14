import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcesoAlumnoComponent } from './componentes/proceso-alumno/proceso-alumno.component';
import { ProximasAlumnoComponent } from './componentes/proximas-alumno/proximas-alumno.component';
import { SolicitudAlumnoComponent } from './componentes/solicitud-alumno/solicitud-alumno.component';
import { ProximasFormComponent } from './componentes/proximas-form/proximas-form.component';
import { ProcesoFormComponent } from './componentes/proceso-form/proceso-form.component';



@NgModule({
  declarations: [
    FormularioAlumnoComponent,
    ProcesoAlumnoComponent,
    ProximasAlumnoComponent,
    SolicitudAlumnoComponent,
    ProximasFormComponent,
    ProcesoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormularioAlumnoComponent,
    ProcesoAlumnoComponent,
    ProximasAlumnoComponent,
    SolicitudAlumnoComponent
  ]
})
export class AlumnoModule { }
