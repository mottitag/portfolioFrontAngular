import { Component, EventEmitter, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiModalProjectService } from 'src/app/services/ui/ui-modal-project.service';

// Interface
import { project } from '../../../portfolio';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.css']
})
export class ModalProjectComponent {
  id?: number = 0;
  name: string = "";
  urlPhoto: string = "";
  urlLink: string = "";
  description: string = "";
  toAddOrMod: boolean = false;
  subToAddOrMod?: Subscription;
  subProject?: Subscription;

  @Output() onAddProject: EventEmitter<project> = new EventEmitter;
  @Output() onModProject: EventEmitter<project> = new EventEmitter;

  constructor(private uiService: UiModalProjectService) {
    this.subToAddOrMod = this.uiService.onToggle().subscribe(value => {
      this.toAddOrMod = value;
    });
    this.subProject = this.uiService.onToggleModProject().subscribe(aProject => {
      this.id = aProject.id;
      this.name = aProject.name;
      this.urlPhoto = aProject.photo;
      this.urlLink = aProject.url;
      this.description = aProject.description;
    });
  }

  onSubmit(){
    if (this.name.length === 0 || this.urlPhoto.length === 0 ||
        this.urlLink.length === 0 || this.description.length === 0){
        alert("Debe completar todos los campos");
        return
    }
    const newElement = {
      id: this.id,
      name: this.name,
      photo: this.urlPhoto,
      url: this.urlLink,
      description: this.description
    };
    if (this.toAddOrMod){
      this.onAddProject.emit(newElement);
    }else {
      this.onModProject.emit(newElement);
    }
  }

}
