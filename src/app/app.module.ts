import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
// services
import { MoviesService } from '../app/services/movies.service';
// components
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './shared/search/search.component';
// routes
import { APP_ROUTING } from './app.routes';
import { SerieComponent } from './components/serie/serie.component';
import { SeriesComponent } from './components/series/series.component';
import { FooterComponent } from './shared/footer/footer.component';
// Pipes
import { NoImagePipe } from '../app/Pipes/no-image.pipe';
import { DomseguroPipe } from '../app/Pipes/domseguro.pipe';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    SerieComponent,
    SeriesComponent,
    FooterComponent,
    NoImagePipe,
    DomseguroPipe,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientJsonpModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
