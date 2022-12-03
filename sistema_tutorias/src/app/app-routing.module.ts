import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { RegistroComponent } from './modulos/autentificacion/componentes/registro/registro.component';
import { InicioSesionComponent } from './modulos/autentificacion/componentes/inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, 
    children: [ 
      { path: 'registro', component: RegistroComponent }, 
      { path: 'inicio-sesion', component: InicioSesionComponent } 
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
