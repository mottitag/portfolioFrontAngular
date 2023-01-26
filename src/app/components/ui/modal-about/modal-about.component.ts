import { Component, Input, Output, EventEmitter } from '@angular/core';
import { education, experiences } from '../../../portfolio'
import { UiModalService } from 'src/app/services/ui/ui-modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-about',
  templateUrl: './modal-about.component.html',
  styleUrls: ['./modal-about.component.css']
})
export class ModalAboutComponent {
  //variable
  id: number = 0;
  place: string = "";
  title: string = "";
  logo: string = "";
  start: string = "";
  end: string = "";
  description: string = "";
  subscription?: Subscription;
  subscription2?: Subscription;
  subEdu?: Subscription;
  subExp?: Subscription;

  
  @Input() organism: string = "";
  @Input() titulo: string = ";"

  // To emit a event
  @Output() onAddEducation: EventEmitter<education> = new EventEmitter();
  @Output() onAddExperience: EventEmitter<experiences> = new EventEmitter();
  @Output() onModEducation: EventEmitter<education> = new EventEmitter();
  @Output() onModExperience: EventEmitter<experiences> = new EventEmitter();


  // To add education or experiences
  // false to education, true to experiences
  toEduOrExp: boolean = false;
  // false to add, true to modify
  toAddOrMod: boolean = false;

  constructor(private uiService: UiModalService  ) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.toEduOrExp = value;
    });
    this.subscription2 = this.uiService.onToggleAdd().subscribe(value2 => {
      this.toAddOrMod = value2;
    });
    this.subExp = this.uiService.onToggleModExp().subscribe(exp => {
      this.id = exp.id;
      this.place = exp.company;
      this.title = exp.position;
      this.logo = exp.logo;
      this.start = exp.start;
      this.end = exp.end;
      this.description = exp.description;
    });
    this.subEdu = this.uiService.onToggleModEdu().subscribe(edu => {
      this.id = edu.id;
      this.place = edu.school;
      this.title = edu.title;
      this.logo = edu.logo;
      this.start = edu.start;
      this.end = edu.end;
      this.description = edu.description;
    });
  }

  onSubmit(){
    if (this.place.length === 0 || this.title.length === 0 ||
        this.start.length === 0 || this.end.length === 0 || this.description.length === 0){
        alert("Debe completar todos los campos");
        return
    }

    if (this.toEduOrExp){
      const newElement = {
        id: this.id,
        company: this.place,
        position: this.title,
        logo: this.logo,
        start: this.start,
        end: this.end,
        description: this.description
      };
      if (this.toAddOrMod){
        this.onModExperience.emit(newElement);
      }else{
        this.onAddExperience.emit(newElement);
      }
    }else{
      const newElement = {
        id: this.id,
        school: this.place,
        title: this.title,
        logo: this.logo,
        start: this.start,
        end: this.end,
        description: this.description
      };
      if (this.toAddOrMod){
        this.onModEducation.emit(newElement);
      }else{
        this.onAddEducation.emit(newElement);
      }
    }
    
  }

}
