import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Vistas

//Modulos
import { AutentificacionModule } from './modulos/autentificacion/autentificacion.module';
import { AlumnoModule } from './modulos/alumno/alumno.module';
import { BarraNavComponent } from './componentes/barra-nav/barra-nav.component';
import { TutorModule } from './modulos/tutor/tutor.module';
import { ModuloRespuestaComponent } from './vistas/modulo-respuesta/modulo-respuesta.component';
import { ModuloAsesoriaComponent } from './vistas/modulo-asesoria/modulo-asesoria.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    ModuloRespuestaComponent,
    ModuloAsesoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutentificacionModule,
    AlumnoModule,
    TutorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
