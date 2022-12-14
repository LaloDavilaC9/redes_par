import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  base: string = "http://10.10.10.15:8080/API_REST_Tutorias_UAA/";

  constructor(public httpClient: HttpClient) { }


  //Método para obtener los datos
  getJSON(url: string) : any{
    const urlpath = this.base + url;
    this.httpClient.get(urlpath).subscribe((res: any) => {
      console.log(res);
      return res
    });
  }

  
}
