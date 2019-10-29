import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    public http: HttpClient,
  ) { }

  ObtenerCategorias() {
    const url = `${URL_SERVICIOS}/CATEGORIA`;
    console.log(url);
   return  this.http.get(url);
  }
}
