import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  topSeries: any[] = [];
  onAirSeries: any[] = [];
  popularSeries: any[] = [];
  latestSeries: any[] = [];
  alert: string;
  // tslint:disable-next-line:no-inferrable-types
  recent: string = ' ';
  constructor(private m_service: MoviesService, private route: Router, private activatedRoute: ActivatedRoute) {
    this.m_service.getTopSeries().subscribe((data: any) => {this.topSeries = data; });
    this.m_service.getOnAirSeries().subscribe((data: any) => {this.onAirSeries = data; });
    this.m_service.getPopularSeries().subscribe((data: any) => {this.popularSeries = data; });
    this.m_service.getLatestSeries().subscribe((data: any) => {this.latestSeries = data; });
    this.activatedRoute.params.subscribe(params => {console.log(params); this.recent = params['pag']; } );
   }

  ngOnInit() {
  }

}
