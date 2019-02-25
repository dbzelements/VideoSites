import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { ViewComponent } from './MovieApp/view/view.component';
import { ViewHeaderComponent } from './MovieApp/view-header/view-header.component';
import { AddMovieComponent } from './MovieApp/add-movie/add-movie.component';
import { EditMovieComponent } from './MovieApp/edit-movie/edit-movie.component';
import { GroupedComponent } from './MovieApp/grouped/grouped.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ViewHeaderComponent,
    AddMovieComponent,
    EditMovieComponent,
    GroupedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ViewComponent]
})
export class AppModule { }
