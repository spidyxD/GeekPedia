import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './shared/search/search.component';
import { SerieComponent } from './components/serie/serie.component';
import { SeriesComponent } from './components/series/series.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ReviewComponent } from './components/review/review.component';

const APP_ROUTES: Routes = [
    { path: 'home/:page', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'series', component: SeriesComponent },
    { path: 'series/:page', component: SeriesComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'movies/:page', component: MoviesComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:page', component: SearchComponent },
    { path: 'movie', component: MovieComponent },
    { path: 'serie', component: SerieComponent },
    { path: 'review/:name/:id/:type', component: ReviewComponent },
    { path: 'review/:name/:id/:type/:page', component: ReviewComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
