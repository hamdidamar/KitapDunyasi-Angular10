import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure:false
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchValue: string): any {
    return items.filter(item => item.ad.toLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
  }
  // filter items array, items which match and return true will be
  // kept, false will be filtered out

}

