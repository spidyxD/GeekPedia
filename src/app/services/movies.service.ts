import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'; // map
import { HttpClient } from '@angular/common/http';
// nota acordarse siempre de agregar las librerias en el appmodule
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // tslint:disable-next-line:no-inferrable-types
  private apikey: string = 'bc742fda54c5bce645dcb30e8c22f91f';
  // tslint:disable-next-line:no-inferrable-types
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  constructor( private http: HttpClient ) { }
  private getURL(request: string, language: string): string {
    return `${this.urlMoviedb}${request}&api_key=${this.apikey}&language=${language}`;
  }
  searchMovie( text: string ) {
    const url = `/search/movie?query=${ text }&sort_by=popularity.desc`;
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  getPopularMovies( ) {
    const url = '/discover/movie?sort_by=popularity.desc';
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  getTopYearMovies(year: string= '2018') {
    const url = `/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc`;
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  getRMovies() {
    const url = '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc';
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  getKidMovies() {
    const url = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  getDramaMovies() {
    const url = '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  getLatestMovies() {
    const url = '/discover/movie?now_playing';
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  getPopularSeries() {
    const url = '/discover/tv?popular';
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  getTopSeries() {
    const url = '/discover/tv?top_rated';
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  getOnAirSeries() {
    const url = '/discover/tv?/on_the_air';
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  getLatestSeries() {
    const url = '/discover/tv?/latest';
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  searchSeries( text: string ) {
    const url = `/search/tv?query=${ text }&sort_by=popularity.desc`;
    return this.http.jsonp(this.getURL(url, 'en-US'), 'callback=JSONP_CALLBACK').pipe(map(res => res['results'] ));
  }
  // image.tmdb.org/t/p/w300/idImage
}
