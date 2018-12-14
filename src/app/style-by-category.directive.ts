import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

import { CategoryService } from './category.service'
import { Category } from './category'


@Directive({
  selector: '[technoStyleByCategory]'
})
export class StyleByCategoryDirective implements OnInit {

  category: Category;
  private defaultColor: string = '#1f2020';

  constructor(
    private el: ElementRef,
    private CategoryService: CategoryService,
  ) {
  }
  ngOnInit(){

    this.getCategory(this.id);
  }


  @Input('technoStyleByCategory') id: number;

  @HostListener('mouseenter') onMouseover() {
    this.setStyle(this.category.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle(this.defaultColor);
  }


  private setStyle(color: string){
    this.el.nativeElement.style.background = color;
  }
  getCategory(id): void {
    this.CategoryService.getCategory(id).subscribe(category => {
      this.category = category;
    });
  }
}
