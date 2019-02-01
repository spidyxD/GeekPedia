import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieApp';

  constructor(public _ps: MoviesService) {
      // this._ps.getLatestMovies().subscribe((data: any) => { console.log(data); });
      // this._ps.getPopularSeries().subscribe((data: any) => { console.log(data); });
  }
}
