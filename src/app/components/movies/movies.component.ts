import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  topMovies: any[] = [];
  rMovies: any[] = [];
  kidMovies: any[] = [];
  dramaMovies: any[] = [];
  latestMovies: any[] = [];
  alert: string;
  // tslint:disable-next-line:no-inferrable-types
  recent: string = ' ';
  constructor(private m_service: MoviesService, private route: Router, private activatedRoute: ActivatedRoute) {
    this.m_service.getTopYearMovies().subscribe((data: any) => {this.topMovies = data; });
    this.m_service.getRMovies().subscribe((data: any) => {this.rMovies = data; });
    this.m_service.getKidMovies().subscribe((data: any) => {this.kidMovies = data; });
    this.m_service.getLatestMovies().subscribe((data: any) => {this.latestMovies = data; });
    this.m_service.getDramaMovies().subscribe((data: any) => {this.dramaMovies = data; });
    this.activatedRoute.params.subscribe(params => {console.log(params); this.recent = params['pag']; } );
   }

  ngOnInit() {
  }

}
