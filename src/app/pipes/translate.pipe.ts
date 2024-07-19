import { Pipe, PipeTransform } from '@angular/core';
import { en_us, pt_br } from '@langs';

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {
  public lang = 'pt_br';
  public langs = { pt_br, en_us };
   
  transform(value: any, args?: any): string {
    const currentLang = this.langs[this.lang];
    if (currentLang[value]) {
      return currentLang[value]
    }
    return value;
  }

}