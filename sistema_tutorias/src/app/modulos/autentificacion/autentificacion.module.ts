import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { AutentificacionService } from './servicios/autentificacion.service';
import { FormularioAlumnoComponent } from '../alumno/componentes/formulario-alumno/formulario-alumno.component';
import { AlumnoModule } from '../alumno/alumno.module';



@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlumnoModule
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
