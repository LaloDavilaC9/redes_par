import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

@Component({
  selector: 'app-barra-principal',
  templateUrl: './barra-principal.component.html',
  styleUrls: ['./barra-principal.component.css']
})
export class BarraPrincipalComponent implements OnInit {

  climaDescripcion!: string
  climaTitulo!: string
  climaLugar!: string

  constructor(private aservice: AutentificacionService, private servicio: ServicioApiService) { }

  ngOnInit(): void {
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=21.8806553&lon=-102.2961323&appid=5a211b4435ff9bbdd016d00dcd132c95";
    this.servicio.getJSONClima(url).subscribe((res: any)=>{
      this.climaTitulo = res.weather[0].main;
      this.climaDescripcion = res.weather[0].description;
      this.climaLugar = res.name;
    });
  }

  cerrar(){
    this.aservice.cerrarSesion()
  }

}
