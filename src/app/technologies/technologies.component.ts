import { Component, OnInit } from '@angular/core';

import { TECHNOLOGIES } from '../mock-technologies';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {

  technologies = TECHNOLOGIES.sort(
    function(a, b){
      return b.progress - a.progress;
    }
  );
  constructor() { }

  ngOnInit() {
  }

}
