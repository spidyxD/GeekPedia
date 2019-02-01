import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image: string): string {
    if (image === 'null') {
      return 'assets/img/noimage.png';
    }
    if (image.length > 0) {
     return image;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
