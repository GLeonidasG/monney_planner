import { Pipe, PipeTransform } from '@angular/core';
import { EntryType } from '../models/entry-model';

@Pipe({
  name: 'entryTypeSelector'
})
export class EntryTypeSelectorPipe implements PipeTransform {

  transform(value: EntryType, selector: string[]): unknown {
    return value === 'credito' ? selector[0] : selector[1] ;
  }

}
