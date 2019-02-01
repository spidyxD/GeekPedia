import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieInt } from '../../Interfaces/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: MovieInt;
  // tslint:disable-next-line:no-inferrable-types
  imgUrl: string = 'image.tmdb.org/t/p/w300';
  @Input() items: any[] = [];
  constructor(private m_service: MoviesService, private router: Router) {
  }

  ngOnInit() {
  }
  public getMovieById(id: number) {
    for (const m of this.items) {
      if (m.id === id) {
        return m;
      }
      return null;
    }
  }

  public getImgUrl(id: number): string {
    this.movie = null;
    this.movie =  this.getMovieById(id);
    if (this.movie) {
       return this.imgUrl.concat(this.movie.poster_path);
    } else {
      return 'null';
    }
  }
  public getReview(name: string, id: number, type: string) {
    this.router.navigate(['/review', name, id, type]);
  }
}
