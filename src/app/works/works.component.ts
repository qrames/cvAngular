import { Component, OnInit } from '@angular/core';

import { WORKS } from '../mock-works';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works = WORKS;

  constructor() { }

  ngOnInit() {
  }

}
