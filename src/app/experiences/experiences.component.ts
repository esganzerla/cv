import { Component, Input, OnInit } from '@angular/core';

import { Experiences } from '../store/store.types';

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  @Input() experiences?: Array<Experiences>;

  constructor() { }

  ngOnInit() {
  }

}
