import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/get-data.service';
import { IMovieDisplay } from 'src/app/movie';
import { IMovie } from 'src/app/movie';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movie : IMovie = {"title" : "" ,"category": 1,"rating": 2,"isDeleted" : false};
  categories : Object;
  movies : IMovieDisplay[] = [];
  showError : boolean = false;
  errorMessage : string;
  moviesName : string;
  id : number = 0;
  nameValue: string = "";
  rateValue: number = 0;

  constructor(private getData : GetDataService) { }



  ngOnInit() {

    this.id = this.getData.getId();

    this.getData.getCategories().subscribe( data =>
      {
        this.categories = data
        console.log(this.categories)

      });

    this.getData.getMovies().subscribe( data =>
      {
        this.movies = data 
      });

      this.getData.getMovie(this.id).subscribe( data =>
        {
          this.movie = data 
        });

  }

  EditNew(movieName, categoryId, rating ){
    this.showError = false;

    console.log(movieName +" "+categoryId+ " "+rating)

    if (categoryId < 0){
      this.showError = true;
      this.errorMessage = "No category was selected";
      return;
    }

    if (Number(rating) <= 0 || Number(rating) > 5 || isNaN(rating)) {
      this.showError = true;
      this.errorMessage = "Rating needs to be between 1 and 5";
      return;
    }
    
    this.moviesName = ","

    this.getData.getMovies().subscribe( data =>
      {
        this.movies = data 
      });

      this.movies.forEach( (element) => {
        this.moviesName += element.title + ","
    });
    console.log(this.movie.title )
    console.log(movieName)
    if (movieName.toLowerCase() != this.movie.title.toLowerCase()){
      
      if (this.moviesName.toLowerCase().indexOf(","+movieName.toLowerCase()+",") >= 0 || movieName == ""){
        this.showError = true;
        this.errorMessage = "Name already Exisit or Name is empty";
        return;
      }

    }
    
    this.movie.title = movieName;
    this.movie.rating = rating;
    this.movie.category = categoryId;
    this.movie.isDeleted = false;

    console.log(this.movie )

    this.getData.updateMovie(this.id,this.movie).subscribe(data =>
      {
        console.log(this.movie +" "+data)

      });

      
  }

}
