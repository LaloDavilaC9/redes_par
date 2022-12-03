import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Vistas

//Modulos
import { AutentificacionModule } from './modulos/autentificacion/autentificacion.module';
import { AlumnoModule } from './modulos/alumno/alumno.module';
import { BarraNavComponent } from './componentes/barra-nav/barra-nav.component';
import { RegistroComponent } from './modulos/autentificacion/componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
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
