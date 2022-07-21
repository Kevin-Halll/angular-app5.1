import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {

  constructor(private elementRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.elementRef.nativeElement.style.background = 'blue';
    // this.elementRef.nativeElement.style.color = 'white';

    this.renderer.addClass(this.elementRef.nativeElement, 'bg-cyan-500 ')
  }
  @HostListener('mouseenter') mouseover(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'cyan-500')
    this.renderer.addClass(this.elementRef.nativeElement, 'bg-cyan-500')

  }
  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'cyan-500')
    this.renderer.removeClass(this.elementRef.nativeElement, 'bg-cyan-500')

  }

}
