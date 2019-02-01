import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  series: any[] = [];
  alert: string;
  // tslint:disable-next-line:no-inferrable-types
  recent: string = '';
  constructor(public m_service: MoviesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.m_service.getPopularMovies().subscribe((m: any) => {this.movies = m; });
    this.m_service.getPopularSeries().subscribe((s: any) => {this.series = s; });
    this.activatedRoute.params.subscribe(params => {console.log(params); this.recent = params['pag']; } );
  }

  ngOnInit() {
  }
}
