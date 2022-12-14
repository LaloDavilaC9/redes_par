import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Inicio o página principal
import { InicioComponent } from './vistas/inicio/inicio.component';
import { RegistroComponent } from './modulos/autentificacion/componentes/registro/registro.component';
import { InicioSesionComponent } from './modulos/autentificacion/componentes/inicio-sesion/inicio-sesion.component';

//Módulo de asesorías (alumno)
import { ModuloAsesoriaComponent } from './vistas/modulo-asesoria/modulo-asesoria.component';
import { SolicitudAlumnoComponent } from './modulos/alumno/componentes/solicitud-alumno/solicitud-alumno.component';
import { ProximasAlumnoComponent } from './modulos/alumno/componentes/proximas-alumno/proximas-alumno.component';
import { ProcesoAlumnoComponent } from './modulos/alumno/componentes/proceso-alumno/proceso-alumno.component';
import { PermisoAlumnoGuard } from './permisos/permiso-alumno.guard';

//Módulo de respuesta (tutor)
import { ModuloRespuestaComponent } from './vistas/modulo-respuesta/modulo-respuesta.component';
import { SolicitudTutorComponent } from './modulos/tutor/componentes/solicitud-tutor/solicitud-tutor.component';
import { ProcesoTutorComponent } from './modulos/tutor/componentes/proceso-tutor/proceso-tutor.component';
import { ProximasTutorComponent } from './modulos/tutor/componentes/proximas-tutor/proximas-tutor.component';
import { PermisoTutorGuard } from './permisos/permiso-tutor.guard';
import { RegistroTutorComponent } from './vistas/registro-tutor/registro-tutor.component';
import { FormularioTutorComponent } from './modulos/tutor/componentes/formulario-tutor/formulario-tutor.component';

const routes: Routes = [
  { path: '', component: InicioComponent,
    children: [
      { path: 'registro', component: RegistroComponent }, 
      { path: 'inicio-sesion', component: InicioSesionComponent },
      {path: '', component: InicioSesionComponent}
    ]},
  { path: 'tutor', component: ModuloRespuestaComponent, /*canActivate: [PermisoTutorGuard],*/
    children: [
      {path: 'solicitud', component: SolicitudTutorComponent },
      {path: 'proceso', component: ProcesoTutorComponent },
      {path: 'proximas', component: ProximasTutorComponent },
      {path: '', component: SolicitudTutorComponent }
    ]
  },
  { path: 'alumno', component: ModuloAsesoriaComponent, canActivate: [PermisoAlumnoGuard],
    children: [
      {path: 'solicitud', component: SolicitudAlumnoComponent },
      {path: 'proceso', component: ProcesoAlumnoComponent },
      {path: 'proximas', component: ProximasAlumnoComponent },
      {path: '', component: SolicitudAlumnoComponent }
    ]
  },
  { path: 'registrotutor', component: RegistroTutorComponent,
  children: [
    {path:'', component: FormularioTutorComponent}
  ] },
  { path: '**', pathMatch: 'full', redirectTo: 'alumno' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
