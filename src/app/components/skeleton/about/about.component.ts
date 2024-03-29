import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component,Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiModalService } from 'src/app/services/ui/ui-modal.service';
import { EducationService } from 'src/app/services/persistence/education.service';
import { ExperienceService } from 'src/app/services/persistence/experience.service';

// interfaces
import { education, experiences } from '../../../portfolio';

// font awesome
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() isAdmin!:boolean;
  faPlus = faPlus;
  eduList: education[] = [];
  expList: experiences[] = [];
  subscription?: Subscription;
  subscription2?: Subscription;

  // false to Education and true to Experiences
  toEduOrExp: boolean = false;
  // false to Add and true to Modify
  toAddOrMod: boolean = false;

  constructor(private dataEdu:EducationService, private dataExp:ExperienceService, private uiService:UiModalService) {}
  
  ngOnInit(): void {
    this.dataEdu.getDataEducation().subscribe(dataEdu => {
      this.eduList = dataEdu;
    })
    this.dataExp.getDataExperiences().subscribe(dataExp => {
      this.expList = dataExp;
    })
  }
  
  deleteEdu(edu:education) {
    this.dataEdu.deleteEdu(edu).subscribe(() => {
      this.eduList = this.eduList.filter(e => e.id !== edu.id)
    })
  }
  deleteExp(exp:experiences) {
    this.dataExp.deleteExp(exp).subscribe(() => {
      this.expList = this.expList.filter(e => e.id !== exp.id)
    })
  }

  addEducation(edu: education){
    this.dataEdu.addEducation(edu).subscribe((e)=>{
      this.eduList.push(e);
    })
  }

  addExperience(exp: experiences){
    this.dataExp.addExperience(exp).subscribe((e) => {
      this.expList.push(e);
    })
  }

  modEducation(edu: education){
    this.eduList.forEach(e => {
      if (e.id == edu.id){
        e.description = edu.description;
        e.endDate = edu.endDate;
        e.school = edu.school;
        e.startDate = edu.startDate;
        e.title = edu.title;
      }
    })
    this.dataEdu.updateEducation(edu).subscribe()
  }

  modExperience(exp: experiences){
    this.expList.forEach(e => {
      if (e.id = exp.id){
        e.description = exp.description;
        e.endDate = exp.endDate;
        e.company = exp.company;
        e.startDate = exp.startDate;
        e.position = exp.position;
      }
    })
    this.dataExp.updateExperience(exp).subscribe()
  }

  toggleModalEdu (){
    this.uiService.toggleModalAddEdu();
  }

  toggleModalExp (){
    this.uiService.toggleModalAddExp();
  }

  toggleModEdu(edu: education){
    this.uiService.toggleModalModEdu(edu);
  }

  toggleModExp(exp: experiences){
    this.uiService.toggleModalModExp(exp);
  }

  //DRAG AND DROP
  drop (event: CdkDragDrop<education[]>){
    moveItemInArray(this.eduList, event.previousIndex, event.currentIndex)
  }

}
