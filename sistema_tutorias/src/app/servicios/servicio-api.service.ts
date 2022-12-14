import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  constructor(public httpClient: HttpClient) { }

  getJSON(url: string) {
    return this.httpClient.get(url);
  }

  
}
