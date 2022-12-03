import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Vistas
import { InicioComponent } from './vistas/inicio/inicio.component';

//Modulos
import { AutentificacionModule } from './modulos/autentificacion/autentificacion.module';
import { AlumnoModule } from './modulos/alumno/alumno.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutentificacionModule,
    AlumnoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
