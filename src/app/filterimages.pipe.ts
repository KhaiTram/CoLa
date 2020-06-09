import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterimages'
})
export class FilterimagesPipe implements PipeTransform {

  transform(items: any[], articles: number): any {
    if (articles === 0) { return items } else {
      console.log(articles);
      return items.filter(item => {
        return item.Produktkategorie_ID === articles;
      });
    }
  }

}




