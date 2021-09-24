import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective {

  constructor(private el: ElementRef) { }

  @Input() specificInputRegExp: string = '';

  @HostListener('keydown', ['$event']) onKeyDown(e: any) {
    e.preventDefault();
    let ch = String.fromCharCode(e.keyCode);
    let regEx = new RegExp(this.specificInputRegExp);
    console.log(ch, regEx.test(ch))
    if (regEx.test(ch)) {
      this.el.nativeElement.value += ch;
    }

  }

}
