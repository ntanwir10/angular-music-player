import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domsafe'
})
export class DomsafePipe implements PipeTransform {
  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value: string, url: string): any {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }
}
