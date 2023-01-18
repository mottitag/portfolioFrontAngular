import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiModalService } from 'src/app/services/ui-modal.service';
import { EducationService } from 'src/app/services/education.service';
import { ExperienceService } from 'src/app/services/experience.service';

// interfaces
import { education, experiences } from '../../portfolio';

// font awesome
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faPlus = faPlus;
  eduList: education[] = [];
  expList: experiences[] = [];
  subscription?: Subscription;
  subscription2?: Subscription;

  // false to Education and true to Experiences
  toEduOrExp: boolean = false;
  // false to Add and true to Modify
  toAddOrMod: boolean = false;

  constructor(private dataEdu:EducationService, private dataExp:ExperienceService, private uiService:UiModalService) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.toEduOrExp = value;
    });
    this.subscription2 = this.uiService.onToggleAdd().subscribe(value2 => {
      this.toAddOrMod = value2;
    });
  }
  
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
        e.end = edu.end;
        e.school = edu.school;
        e.start = edu.start;
        e.title = edu.title;
      }
    })
    this.dataEdu.updateEducation(edu).subscribe()
  }

  modExperience(exp: experiences){
    this.expList.forEach(e => {
      if (e.id = exp.id){
        e.description = exp.description;
        e.end = exp.end;
        e.company = exp.position;
        e.start = exp.start;
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

}
