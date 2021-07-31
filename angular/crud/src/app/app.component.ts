import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  movies = [{title: 'test'}]

  constructor(private api:ApiService) {
    this.getMovies();
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe( //obtenemos los datos y los asignamos a la variable movies
      data => {
        this.movies = data;
      },
      error => {
        console.log(error); //para controlar el error
      }
    );
  }

  movieClicked = (movie:any) => {
    this.api.getOneMovie(movie.id).subscribe( //obtenemos los datos de una movie para mostrarlos
      data => {
        console.log(data);
      },
      error => {
        console.log(error); //para controlar el error
      }
    );
  }
}
