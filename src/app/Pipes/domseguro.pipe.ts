import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) { }

  transform( value: string): any {
    const url = 'http://image.tmdb.org/t/p/w500';
    if (!value) {
      return 'assets/img/noimage.png';
    }
    if (value.length > 0) {
      // console.log(url + value);
      return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
