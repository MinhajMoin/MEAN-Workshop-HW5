import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): any {
    return (value.slice(0,0).toUpperCase()+value.slice(1,-1))
  }

}
