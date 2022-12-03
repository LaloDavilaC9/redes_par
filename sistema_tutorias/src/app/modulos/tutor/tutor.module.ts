import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudTutorComponent } from './componentes/solicitud-tutor/solicitud-tutor.component';
import { ProximasTutorComponent } from './componentes/proximas-tutor/proximas-tutor.component';
import { ProcesoTutorComponent } from './componentes/proceso-tutor/proceso-tutor.component';



@NgModule({
  declarations: [
    SolicitudTutorComponent,
    ProximasTutorComponent,
    ProcesoTutorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TutorModule { }
