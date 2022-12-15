import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudTutorComponent } from './componentes/solicitud-tutor/solicitud-tutor.component';
import { ProximasTutorComponent } from './componentes/proximas-tutor/proximas-tutor.component';
import { ProcesoTutorComponent } from './componentes/proceso-tutor/proceso-tutor.component';
import { FormularioTutorComponent } from './componentes/formulario-tutor/formulario-tutor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgendaFormComponent } from './componentes/agenda-form/agenda-form.component';

@NgModule({
  declarations: [
    SolicitudTutorComponent,
    ProximasTutorComponent,
    ProcesoTutorComponent,
    FormularioTutorComponent,
    AgendaFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SolicitudTutorComponent,
    ProximasTutorComponent,
    ProcesoTutorComponent,
    FormularioTutorComponent
  ]
})
export class TutorModule { }
