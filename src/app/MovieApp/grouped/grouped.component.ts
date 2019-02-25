import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/get-data.service';

@Component({
  selector: 'app-grouped',
  templateUrl: './grouped.component.html',
  styleUrls: ['./grouped.component.css']
})
export class GroupedComponent implements OnInit {

  movies1 : Object
  movies2 : Object
  movies3 : Object
  movies4 : Object
  movies5 : Object

  constructor(private getData : GetDataService) { }

  ngOnInit() {
    

    var someArray = [this.movies1, this.movies2, this.movies3, this.movies4 ,this.movies5];
    someArray.forEach((item, index) => {
      
      this.getData.getMoviesRating(index + 1).subscribe( data =>
        {
          if (index + 1 == 1){
            this.movies1 = data
          }

          if (index + 1 == 2){
            this.movies2 = data
          }

          if (index + 1 == 3){
            this.movies3 = data
          }

          if (index + 1 == 4){
            this.movies4 = data
          }

          if (index + 1 == 5){
            this.movies5 = data
          }
          
          console.log(data)
          console.log(index + 1)
  
        });
    });

  }

}
