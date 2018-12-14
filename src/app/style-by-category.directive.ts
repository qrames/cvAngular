import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

import { CategoriesService } from './categories.service'
import { Category } from './category'


@Directive({
  selector: '[technoStyleByCategory]'
})
export class StyleByCategoryDirective implements OnInit {

  category: Category;
  private defaultColor: string = '#1f2020';

  constructor(
    private el: ElementRef,
    private CategoriesService: CategoriesService,
  ) {
  }
  ngOnInit(){

    this.getCategories(this.id);
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
  getCategories(id): void {
    this.CategoriesService.getCategories(id).subscribe(category => {
      this.category = category;
    });
  }
}
