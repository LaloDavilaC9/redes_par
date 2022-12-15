import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  //base: string = "http://10.10.10.5:8080/API_REST_Tutorias_UAA/";

  //base: string = "http://25.7.159.26:8100/API_REST_Tutorias_UAA/";

  base: string = "http://25.3.54.65:8080/API_REST_Tutorias_UAA/";

  constructor(public httpClient: HttpClient) { }


  //Método para obtener los datos
  getJSON(url: string) {
    const urlpath = this.base + url;
    return this.httpClient.get(urlpath);
  }
  //Método para obtener los datos
  getJSONClima(url: string) {
    return this.httpClient.get(url);
  }


  //Método para registrar datos
  registrar(url: string, object: any){
    const urlpath = this.base + url;
    return this.httpClient.post(urlpath,object);
  }

  //Método para actualizar datos
  actualizar(url: string, object: any, id: number){
    const urlpath = this.base + url + "/" + id;
    return this.httpClient.put(urlpath,object);
  }

  //Método para eliminar
  eliminar(url: string, id: number){
    const urlpath = this.base + url + "/" + id;
    return this.httpClient.delete(urlpath);
  }
  
  
}
