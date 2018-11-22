import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  technologie = {
    'name': 'Angular',
    'class': "fab fa-angular",
    'progresse': 30,
  };

  constructor() { }

  ngOnInit() {
  }

}
