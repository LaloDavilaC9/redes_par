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
import { BarraPrincipalComponent } from './componentes/barra-principal/barra-principal.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { RegistroTutorComponent } from './vistas/registro-tutor/registro-tutor.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    ModuloRespuestaComponent,
    ModuloAsesoriaComponent,
    BarraPrincipalComponent,
    InicioComponent,
    RegistroTutorComponent,
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
