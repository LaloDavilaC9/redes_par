import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  base: string = "http://localhost:8080/API_REST_Tutorias_UAA/";

  constructor(public httpClient: HttpClient) { }


  //Método para obtener los datos
  getJSON(url: string) {
    const urlpath = this.base + url;
    return this.httpClient.get(urlpath);
  }

  //Método obtención de alumno
  

  
}
