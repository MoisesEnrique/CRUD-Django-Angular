import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://localhost:8000";   /* la direccion base de django */

  /* aplicacion jason */
  httpHeaders = new HttpHeaders({ 'Content-type': 'application/json'});

  constructor(private http: HttpClient) { } /* habilitamos el modelo http en el lado del cliente */

  getAllMovies() : Observable<any>{   /* Metodo para obtener las peliculas  */
    return this.http.get(this.baseurl + '/movies/', 
    {headers: this.httpHeaders});
  }

  getOneMovie(id:any) : Observable<any>{   /* Metodo para obtener las peliculas  */
    return this.http.get(this.baseurl + '/movies/' + id + '/',  //pasamos la ide para ver la info de la pelicula
    {headers: this.httpHeaders}); 
  }

  updateMovie(movie:any) : Observable<any>{   /* Metodo para actualizar las peliculas  */
    const body = {title: movie.title, desc: movie.desc, year: movie.year};
    return this.http.put(this.baseurl + '/movies/' + movie.id + '/', body, //pasamos la ide para ver la info de la pelicula
    {headers: this.httpHeaders}); 
  }
  
}
