import { Component, OnInit, Input } from '@angular/core';

// import { TECHNOLOGIES } from '../mock-technologies';
import { TechnologiesService } from '../technologies.service';
import { Technologie } from '../technologie';

import { StyleByCategoryDirective } from '../style-by-category.directive';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {

  technologies: Technologie[];

  constructor(
    private TechnologiesService: TechnologiesService
  ){}

  ngOnInit() {
    this.getTechonologies("", 0);
  }

  getTechonologies(orderBy, minProgress): void {
    // this.technologies = this.TechnologiesService.getTechonologies(orderBy, minProgress);
    this.TechnologiesService.getTechonologies(orderBy, minProgress)
    .subscribe(technologies => {
      var sorted = [];
      switch(orderBy) {
        case "" :

        case "progressTop":
          sorted = technologies.sort(
            function(a, b){
              return b.progress - a.progress;
            }
          ).filter(
            technologies => technologies.progress >= minProgress
          );
          break;
        case "progressDown":
          sorted = technologies.sort(
            function(a, b){
              return - b.progress + a.progress;
            }
          );
          break;
        default:
          sorted = technologies.filter(
            technologies => technologies.name.toUpperCase().startsWith(
              orderBy.toUpperCase()
            )
          );
      }
      if (sorted.length == 0){
        sorted = [
          {
          'name': 'no result',
          'icon': "fas fa-question",
          'progress': 1,
          'url': "",
          'category': 1,
        },
      ];
      }
      this.technologies = sorted;
      // this.technologies = technologies
    });
  }

  onKey(event: KeyboardEvent) { // without type info
    this.getTechonologies( (<HTMLInputElement>event.target).value, 0);
  }
  setRange(progress) {
    this.getTechonologies("", progress);
  }
}
