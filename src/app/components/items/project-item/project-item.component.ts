import { Component, EventEmitter, Input, Output } from '@angular/core';
// interface 
import { project } from 'src/app/portfolio';

// font Awesome
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() isAdmin!:boolean;
  @Input() project!: project;
  @Output() onDeleteProject: EventEmitter<project> = new EventEmitter;
  @Output() onUpdateProject: EventEmitter<project> = new EventEmitter;

  faPen = faPen;
  faXmark = faXmark;

  constructor(){}

  onDelete(aProject: project): void {
    this.onDeleteProject.emit(aProject);
  }

  onUpdate(aProject: project): void {
    this.onUpdateProject.emit(aProject);
  }

}
