import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { AutentificacionService } from './servicios/autentificacion.service';



@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent,
    FormularioAlumnoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [
    RegistroComponent,
    InicioSesionComponent
  ],
  providers: [
    AutentificacionService
  ]
})
export class AutentificacionModule { }
