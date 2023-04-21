import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

// font awesome
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

// Persistence service
import { SkillService } from 'src/app/services/persistence/skill.service';
import { UiModalSkillService } from 'src/app/services/ui/ui-modal-skill.service';

// interface
import { skill } from '../../../portfolio';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

  faPlus = faPlus;
  skills: skill[] = [];
  subscription?: Subscription;
  toAddOrMod: boolean = false;

  //is in de view?
  @ViewChild('skillDiv', { static: false })
  private skillDiv?: ElementRef<HTMLDivElement>;
  isIntoView: boolean = false;

  constructor(private dataSkill:SkillService, private uiSkill: UiModalSkillService) {}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.dataSkill.getSkill().subscribe(skillList => {
      this.skills = skillList;
    });
  }

  addSkill(aSkill: skill): void{
    this.dataSkill.addSkill(aSkill).subscribe((s) => {
      this.skills.push(s);
    });
  }

  modSkill(aSkill: skill): void {
    this.dataSkill.updateSkill(aSkill).subscribe( () => {
      this.skills.forEach(s => {
        if (s.id == aSkill.id){
          s.color = aSkill.color;
          s.percent = aSkill.percent;
          s.name = aSkill.name;
        }
      });
    });
  }

  deleteSkill(aSkill: skill): void{
    this.dataSkill.deleteSkill(aSkill).subscribe(() => {
      this.skills = this.skills.filter(s => s.id != aSkill.id);
    });
  }

  toggleModSkill(skill: skill): void{
    this.uiSkill.toggleModalModSkill(skill);
  }

  toggleModalSkill (): void{
    this.uiSkill.toggleModalAddSkill();
  }

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.skillDiv) {
      const rect = this.skillDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isIntoView = topShown && bottomShown;
    }
  }

  //DRAG AND DROP
  drop (event: CdkDragDrop<skill[]>){
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex)
  }

  trackByItem(index: number, item:any): number {
    return item.id;
  }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
