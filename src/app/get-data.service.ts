import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IMovieDisplay } from './movie';
import { IMovie } from './movie';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http : HttpClient) { }

  editIdVaule : number = 0;


  storeId(id) {
      
    this.editIdVaule = id;

  }

  getId() {
      
    return this.editIdVaule;

  }

  getMovies() : Observable<IMovieDisplay[]>{
      
    return this.http.get<IMovieDisplay[]>('/api/movies/all')

  }

  getMoviesFiltered(filter) : Observable<IMovieDisplay[]>{
      
    return this.http.get<IMovieDisplay[]>('/api/movies/all/'+filter)

  }


  getMoviesRating(rating) : Observable<IMovieDisplay[]>{
      
    return this.http.get<IMovieDisplay[]>('/api/movies/rating/'+rating)

  }


  getCategories(){
      
    return this.http.get('/api/movies/all/categories')

  }

  getMovie(id){
      
    return this.http.get<IMovie>('/api/movies/movie/'+id)

 }


  deleteMovie(id){
      
     return this.http.put('/api/movies/delete/'+id,httpOptions)

  }

  updateMovie(id,movie){

    return this.http.put('/api/movies/'+id,movie,httpOptions)

 }

 addMovie(movie){
 
  return this.http.post<IMovie>('/api/movies', movie, httpOptions)

}


refresh(): void {
  window.location.reload();
}


}
