import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'discountfilter'
  })
  export class discountFilterPipe implements PipeTransform {
    transform(pprice: number, discountedPrice: number): number {
 
      return (pprice-(pprice*discountedPrice/100));
    } 
    }