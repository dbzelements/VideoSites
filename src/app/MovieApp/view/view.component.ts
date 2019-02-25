import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/get-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  movies : Object
  Router: any;
  
  AddVisible : boolean = false;
  EditVisble : boolean = false;
  ViewVisble : boolean = true;
  GroupVisble : boolean = false;
  Filtered : boolean = false;


  constructor(private getData : GetDataService) { }

  ngOnInit() {

    this.getData.getMovies().subscribe( data =>
      {
        this.movies = data
        console.log(this.movies)

      });

  }



  tobeDeleted(id){

    this.getData.deleteMovie(id).subscribe( data => {

      console.log(data)
    });
    
    this.getData.refresh();

  }

  tobeEdited(id){
    
    this.getData.storeId(id);
      
    this.NavEditPage();

  }

  


  NavAddPage(){

    this.HideAll();
    this.AddVisible = true;
  }

  NavEditPage(){

    this.HideAll();
    this.EditVisble = true;
  }

  NavGoupPage(){

    this.HideAll();
    this.GroupVisble = true;
  }

  NavViewPage(){

    this.HideAll();
    this.ViewVisble = true;
  }
  
  HideAll(){
    this.AddVisible  = false;
    this.EditVisble = false;
    this.ViewVisble = false;
    this.GroupVisble = false;
  }

  Filter(FilterValue){

    this.getData.getMoviesFiltered(FilterValue).subscribe( data =>
      {
        this.movies = data
        console.log(this.movies)

      });

  }

}
