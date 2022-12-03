import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';



@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent,
    FormularioAlumnoComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    RegistroComponent,
    InicioSesionComponent
  ]
})
export class AutentificacionModule { }
