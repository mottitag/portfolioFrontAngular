import { Component, EventEmitter, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiModalSkillService } from 'src/app/services/ui/ui-modal-skill.service';

// Interface
import { skill } from '../../../portfolio';

@Component({
  selector: 'app-modal-skill',
  templateUrl: './modal-skill.component.html',
  styleUrls: ['./modal-skill.component.css']
})
export class ModalSkillComponent {
  id?: number;
  skill: string = "";
  color: string = "";
  percent: number = 0;
  toAddOrMod: boolean = false;
  subToAddOrMod?: Subscription;
  subSkill?: Subscription;

  
  @Output() onAddSkill: EventEmitter<skill> = new EventEmitter();
  @Output() onModSkill: EventEmitter<skill> = new EventEmitter();

  constructor(private uiService: UiModalSkillService){
    this.subToAddOrMod = this.uiService.onToggle().subscribe(value => {
      this.toAddOrMod = value;
    });
    this.subSkill = this.uiService.onToggleModSkill().subscribe(aSkill => {
      this.id = aSkill.id;
      this.skill = aSkill.skill;
      this.percent = aSkill.percent;
      this.color = aSkill.color;
    });
  } 

  onSubmit() {
    if (this.skill.length === 0 || this.color.length === 0 ||
        this.percent === 0 ){
        alert("Debe completar todos los campos");
        return
    }
    const newElement = {
      id: this.id,
      skill: this.skill,
      percent: this.percent,
      color: this.color
    };
    if (this.toAddOrMod){
      this.onModSkill.emit(newElement);
    }else{
      this.onAddSkill.emit(newElement);
    }
  }

}
