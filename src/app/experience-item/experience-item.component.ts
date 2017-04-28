import { Component, Input, OnInit } from '@angular/core';

import { Experiences } from '../store/store.types';

@Component({
  selector: 'experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input() experience: Experiences;

  constructor() { }

  ngOnInit() {
  }

}
