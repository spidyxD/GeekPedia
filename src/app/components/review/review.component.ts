import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  serie: any;
  movie: any;
  id: number;
  type: string;
  name: string;
  items: any[] = [];
  // tslint:disable-next-line:no-inferrable-types
  recent: string = ' ';
  constructor(private m_service: MoviesService, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {this.id = params['id']; this.type = params['type']; this.name = params['name']; });
    if (this.type === 'movie') {
      // tslint:disable-next-line:max-line-length
      this.m_service.searchMovie(this.name).subscribe((data: any) => { this.movie = this.getMovieById(this.id, data); });
    } if (this.type === 'serie')  {
        // tslint:disable-next-line:max-line-length
      this.m_service.searchSeries(this.name).subscribe((data: any) => { this.serie = this.getSerieById(this.id, data); });
      this.recent = 'review';
    }
  }

  ngOnInit() {
  }
  public getMovies() {
     // tslint:disable-next-line:prefer-const
     let m = [];
     this.m_service.searchMovie(this.name).subscribe(data => { m = data; });
     console.log(m);
     return m;
  }
  public getSeries() {
    // tslint:disable-next-line:prefer-const
    let s = [];
     this.m_service.searchSeries(this.name).subscribe(data => { s = data; });
     console.log(s);
     return s;
  }

  public getMovieById(id: number, movies: any[]) {
    console.log(movies[0]);
    console.log(id);
    // tslint:disable-next-line:prefer-const
    let results = movies.filter(m => m.id !== id);
    // tslint:disable-next-line:prefer-const
    let movie = results[0];
    console.log(movie);
    return movie;
  }
  public getSerieById(id: number, series: any[]) {
    console.log(series);
    console.log(id);
     // tslint:disable-next-line:prefer-const
     let results = series.filter(m => m.id !== id);
     // tslint:disable-next-line:prefer-const
     let serie = results[0];
     console.log(serie);
     return serie;
  }
}
