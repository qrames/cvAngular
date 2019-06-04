import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Work } from './works';
import { WorksService } from './works.service'
import { WORKS } from './mock-works';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works: Work[];

  constructor(private WorksService: WorksService) { }

  ngOnInit() {
      this.getWorks();
  }

  getWorks(){
    this.WorksService
    .getWorks()
    .subscribe( (works) => {
      console.log(works)
      this.works = works
    });
  }

}
