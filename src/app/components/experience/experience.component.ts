import { Component, Input, Output, EventEmitter } from '@angular/core';

import { experiences } from 'src/app/portfolio';

// font awesome
import {faPen, faXmark} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() exp!: experiences;
  @Output() onDeleteExp: EventEmitter<experiences> = new EventEmitter;
  @Output() onUpdateExp: EventEmitter<experiences> = new EventEmitter;
  faPen = faPen;
  faXmark = faXmark;

  constructor(){}

  onDelete (exp: experiences){
    this.onDeleteExp.emit(exp);
  }

  onUpdate(exp: experiences){
    this.onUpdateExp.emit(exp);
  }
}
