import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { SerieInt } from '../../Interfaces/serie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  serie: SerieInt;
  // tslint:disable-next-line:no-inferrable-types
  imgUrl: string = 'image.tmdb.org/t/p/w300';
  @Input() items: any[] = [];
  constructor(private m_service: MoviesService, private router: Router) {
  }

  ngOnInit() {
  }
  public getSerieById(id: number): SerieInt {
    for (const s of this.items) {
      if (s.id === id) {
        return s;
      }
      return null;
    }
  }

  public getImgUrl(id: number): string {
      this.serie = null;
      this.serie =  this.getSerieById(id);
      if (this.serie) {
         console.log(this.imgUrl.concat(this.serie.poster_path));
         return this.imgUrl.concat(this.serie.poster_path);
      } else {
        return 'null';
      }
  }
  public getReview(name: string, id: number, type: string) {
    this.router.navigate(['/review', name, id, type]);
  }
}
