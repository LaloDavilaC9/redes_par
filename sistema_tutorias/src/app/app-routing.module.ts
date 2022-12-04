import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './modulos/autentificacion/componentes/registro/registro.component';
import { InicioSesionComponent } from './modulos/autentificacion/componentes/inicio-sesion/inicio-sesion.component';
import { ModuloRespuestaComponent } from './modulos/tutor/componentes/modulo-respuesta/modulo-respuesta.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent }, 
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'modulo-respuesta', component: ModuloRespuestaComponent},
  /*{ path: 'inicio', component: InicioComponent, 
    children: [ 
      { path: 'registro', component: RegistroComponent }, 
      { path: 'inicio-sesion', component: InicioSesionComponent } 
    ]
  },*/
  { path: '**', pathMatch: 'full', redirectTo: 'inicio-sesion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
