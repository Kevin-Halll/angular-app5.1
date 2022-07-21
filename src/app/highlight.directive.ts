import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.background = 'blue';
    this.elementRef.nativeElement.style.color = 'white';
  }

}
