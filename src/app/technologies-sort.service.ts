import { Injectable } from '@angular/core';

import { TECHNOLOGIES } from './mock-technologies';
import { Technologie } from './technologie';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesSortService {

  constructor() { }

  getTechonologies(orderBy): Technologie[] {
    var sorted = [];
    switch(orderBy) {
      case "" :
      case "progressTop":
        sorted = TECHNOLOGIES.sort(
          function(a, b){
            return b.progress - a.progress;
          }
        );
        break;
      case "progressDown":
        sorted = TECHNOLOGIES.sort(
          function(a, b){
            return - b.progress + a.progress;
          }
        );
        break;
      default:
        sorted = TECHNOLOGIES.filter(
          TECHNOLOGIES => TECHNOLOGIES.name.toUpperCase().startsWith(
            orderBy.toUpperCase()
          )
        );
    }
    console.log(sorted);
    if (sorted.length == 0){
      sorted = [
        {
        'name': 'no result',
        'class': "fas fa-question",
        'progress': 1,
        'url': "",
      },
    ];
    }
    return sorted;
  }
}
