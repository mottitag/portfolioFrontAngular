import { Component, EventEmitter, Input, Output } from '@angular/core';

// interface 
import { skill } from 'src/app/portfolio';

// font Awesome
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent {
  @Input() isAdmin!:boolean;
  @Input() skill!: skill;
  @Output() onDeleteSkill: EventEmitter<skill> = new EventEmitter;
  @Output() onUpdateSkill: EventEmitter<skill> = new EventEmitter;

  faPen = faPen;
  faXmark = faXmark;

  constructor(){}

  onDelete(aSkill: skill): void{
    this.onDeleteSkill.emit(aSkill);
  }

  onUpdate(aSkill: skill): void{
    this.onUpdateSkill.emit(aSkill);
  }

}
