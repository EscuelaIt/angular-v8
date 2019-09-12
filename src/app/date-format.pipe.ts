import { Pipe, PipeTransform } from '@angular/core';

import { format } from 'date-fns';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, args: string = 'PPPP'): any {
    return format(value, args);
  }

}
