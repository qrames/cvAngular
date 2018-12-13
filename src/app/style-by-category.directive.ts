import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { CategoriesService } from './categories.service'
import { Category } from './category'
@Directive({
  selector: '[technoStyleByCategory]'
})
export class StyleByCategoryDirective {

  categories: Category[];
  private defaultColor: string = '#1f2020';

  constructor(
    private el: ElementRef,
    private CategoriesService: CategoriesService,
  ) {
    this.setStyle(this.defaultColor);
  }

  @Input('technoStyleByCategory') category: number;

  @HostListener('mouseover') onMouseover() {
    this.getCategories();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle(this.defaultColor);
  }


  private setStyle(color: string){
    this.el.nativeElement.style.background = color;
  }
  getCategories(): void {
    this.CategoriesService.getCategories().subscribe(categories => {
      // this.categories = categories;
      var color = '';
      for(let category of categories){
      if(category['id'] == this.category)
        color = category['color'];
      }
      this.setStyle(color || this.defaultColor);
    });
  }
}
