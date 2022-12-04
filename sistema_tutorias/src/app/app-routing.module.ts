import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Inicio o página principal
import { RegistroComponent } from './modulos/autentificacion/componentes/registro/registro.component';
import { InicioSesionComponent } from './modulos/autentificacion/componentes/inicio-sesion/inicio-sesion.component';

//Módulo de asesorías (alumno)
import { ModuloAsesoriaComponent } from './vistas/modulo-asesoria/modulo-asesoria.component';

//Módulo de respuesta (tutor)
import { ModuloRespuestaComponent } from './vistas/modulo-respuesta/modulo-respuesta.component';
import { SolicitudTutorComponent } from './modulos/tutor/componentes/solicitud-tutor/solicitud-tutor.component';
import { ProcesoTutorComponent } from './modulos/tutor/componentes/proceso-tutor/proceso-tutor.component';
import { ProximasTutorComponent } from './modulos/tutor/componentes/proximas-tutor/proximas-tutor.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent }, 
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'tutor', component: ModuloRespuestaComponent,
    children: [
      {path: 'solicitud', component: SolicitudTutorComponent },
      {path: 'proceso', component: ProcesoTutorComponent },
      {path: 'proximas', component: ProximasTutorComponent },
      {path: '', component: SolicitudTutorComponent }
    ]
  },
  { path: 'alumno', component: ModuloAsesoriaComponent,
    children: [
      {path: 'solicitud', component: SolicitudTutorComponent },
      {path: 'proceso', component: ProcesoTutorComponent },
      {path: 'proximas', component: ProximasTutorComponent },
      {path: '', component: SolicitudTutorComponent }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio-sesion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
