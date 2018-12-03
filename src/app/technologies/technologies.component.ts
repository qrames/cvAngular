import { Component, OnInit, Input } from '@angular/core';

// import { TECHNOLOGIES } from '../mock-technologies';
import { TechnologiesSortService } from '../technologies-sort.service';
import { Technologie } from '../technologie';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {

  technologies: Technologie[];

  constructor(
    private technologiesSortService: TechnologiesSortService
  ){}

  ngOnInit() {
    this.getTechonologies("");
  }

  getTechonologies(orderBy): void {
    this.technologies = this.technologiesSortService.getTechonologies(orderBy);
  }

  onKey(event: any) { // without type info
    this.getTechonologies(event.target.value);
  }

}
