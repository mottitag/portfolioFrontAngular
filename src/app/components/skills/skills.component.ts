import { Component } from '@angular/core';

// font awesome
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

// Persistence service
import { SkillService } from 'src/app/services/persistence/skill.service';
import { UiModalSkillService } from 'src/app/services/ui/ui-modal-skill.service';

// interface
import { skill } from '../../portfolio';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  faPlus = faPlus;
  skills: skill[] = [];
  subscription?: Subscription;
  toAddOrMod: boolean = false;

  constructor(private dataSkill:SkillService, private uiSkill: UiModalSkillService) {}

  ngOnInit(): void {
    this.dataSkill.getSkill().subscribe(skillList => {
      this.skills = skillList;
    })
  }

  addSkill(aSkill: skill){
    this.dataSkill.addSkill(aSkill).subscribe((s) => {
      this.skills.push(s);
    });
  }

  modSkill(aSkill: skill) {
    this.dataSkill.updateSkill(aSkill).subscribe((s) => {
      this.skills.forEach(s => {
        if (s.id == aSkill.id){
          s.color = aSkill.color;
          s.percent = aSkill.percent;
          s.skill = aSkill.skill;
        }
      });
    });
  }

  deleteSkill(aSkill: skill){
    this.dataSkill.deleteSkill(aSkill).subscribe(() => {
      this.skills = this.skills.filter(s => s.id != aSkill.id)
    })
  }

  toggleModSkill(skill: skill){
    this.uiSkill.toggleModalModSkill(skill);
  }

  toggleModalSkill (){
    this.uiSkill.toggleModalAddSkill();
  }

}
