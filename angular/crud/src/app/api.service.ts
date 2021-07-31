import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";   /* la direccion base de django */

  /* aplicacion jason */
  httpHeaders = new HttpHeaders({ 'Content-type': 'application/json'});

  constructor(private http: HttpClient) { } /* habilitamos el modelo http en el lado del cliente */

  getAllMovies() : Observable<any>{   /* Metodo para obtener las peliculas  */
    return this.http.get(this.baseurl + '/movies/', {headers: this.httpHeaders});
  }
}