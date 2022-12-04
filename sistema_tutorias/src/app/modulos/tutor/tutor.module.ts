import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudTutorComponent } from './componentes/solicitud-tutor/solicitud-tutor.component';
import { ProximasTutorComponent } from './componentes/proximas-tutor/proximas-tutor.component';
import { ProcesoTutorComponent } from './componentes/proceso-tutor/proceso-tutor.component';
import { ModuloRespuestaComponent } from './componentes/modulo-respuesta/modulo-respuesta.component';



@NgModule({
  declarations: [
    SolicitudTutorComponent,
    ProximasTutorComponent,
    ProcesoTutorComponent,
    ModuloRespuestaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TutorModule { }
