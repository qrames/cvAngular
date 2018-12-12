import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[technoStyleByCategory]'
})
export class StyleByCategoryDirective {

  constructor(private el: ElementRef) {
    this.setStyle('#f0f0f0');
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.setStyle('#a0a0a0');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle('#f0f0f0');
  }
  private setStyle(background: string){
    this.el.nativeElement.style.background = background;
  }
}
