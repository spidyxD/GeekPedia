import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items: any[] = [];
  alert: string;
  // tslint:disable-next-line:no-inferrable-types
  recent: string = 'search';
  constructor(private m_service: MoviesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {console.log(params); this.recent = params['pag']; } );
  }

  ngOnInit() {
  }
  public search(name: string, type: string) {
    if (type === 'movie') {
      console.log(name);
      this.m_service.searchMovie(name).subscribe(data => { this.items = data; });
    }  if (type === 'serie') {
      console.log(name);
      this.m_service.searchSeries(name).subscribe(data => { this.items = data; });
    } else {
      console.log(name);
      this.m_service.searchMovie(name).subscribe(data => { this.items = data; });
    }
  }
  public searchMovie(name: string) {
     console.log(name);
     this.m_service.searchMovie(name).subscribe(data => { this.items = data; });
  }
  public searchSerie(name: string) {
    console.log(name);
    this.m_service.searchSeries(name).subscribe(data => { this.items = data; });
  }
}
