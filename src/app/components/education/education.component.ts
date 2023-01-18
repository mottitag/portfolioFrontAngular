import { Component, Input, Output, EventEmitter } from '@angular/core';

import { education } from 'src/app/portfolio';

//font awesome
import {faPen, faXmark} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  @Input() edu!: education;
  @Output() onDeleteEdu: EventEmitter<education> = new EventEmitter;
  @Output() onUpdateEdu: EventEmitter<education> = new EventEmitter;

  faPen = faPen;
  faXmark = faXmark;

  constructor(){}

  onDelete(edu: education){
    this.onDeleteEdu.emit(edu);
  }

  onUpdate(edu: education){
    this.onUpdateEdu.emit(edu);
  }

}
