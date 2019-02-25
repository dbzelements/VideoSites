import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/get-data.service';
import { IMovieDisplay } from 'src/app/movie';
import { IMovie } from 'src/app/movie';
import { isComponentView } from '@angular/core/src/view/util';
import {Router} from '@angular/router';



@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie : IMovie = {"title" : "" ,"category": 1,"rating": 2,"isDeleted" : false};
  categories : Object;
  movies : IMovieDisplay[] = [];
  showError : boolean = false;
  errorMessage : string;
  moviesName : string;

  

  constructor(private getData : GetDataService, private router: Router) { }


  ngOnInit() {

    this.getData.getCategories().subscribe( data =>
      {
        this.categories = data
        console.log(this.categories)

      });

      this.getData.getMovies().subscribe( data =>
        {
          this.movies = data 
        });
  }

  AddNew(movieName, categoryId, rating) {

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
    console.log(this.movies )
    console.log(this.moviesName)
    if (this.moviesName.toLowerCase().indexOf(","+movieName.toLowerCase()+",") >= 0 || movieName == ""){
      this.showError = true;
      this.errorMessage = "Name already Exisit or Name is empty";
      return;
    }
    console.log(this.moviesName.toLowerCase() )
    console.log(this.moviesName.toLowerCase().indexOf(","+movieName.toLowerCase()+",") )

    this.movie.title = movieName;
    this.movie.rating = rating;
    this.movie.category = categoryId;
    this.movie.isDeleted = false;


    this.getData.addMovie(this.movie).subscribe(data =>
      {
        console.log(this.movie +" "+data)

      });

      this.getData.refresh();
    
  }



  
}
