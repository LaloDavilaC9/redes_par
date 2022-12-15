import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';

@Component({
  selector: 'app-barra-principal',
  templateUrl: './barra-principal.component.html',
  styleUrls: ['./barra-principal.component.css']
})
export class BarraPrincipalComponent implements OnInit {

  constructor(private aservice: AutentificacionService) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.aservice.cerrarSesion()
  }

}
