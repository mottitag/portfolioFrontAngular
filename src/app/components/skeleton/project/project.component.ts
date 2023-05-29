import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

// font awesome
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

// Persistence service
import { ProjectService } from 'src/app/services/persistence/project.service';
import { UiModalProjectService } from 'src/app/services/ui/ui-modal-project.service';

// interface
import { project } from '../../../portfolio';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() isAdmin!:boolean;
  faPlus = faPlus;
  projects: project[] = [];
  suscription?: Subscription;
  toAddOrMod: boolean = false;

  constructor(private dataProject: ProjectService, private uiProject: UiModalProjectService) {}

  ngOnInit(): void {
    this.dataProject.getProject().subscribe(projectList => {
      this.projects = projectList;
    });
  }

  addProject(aProject: project): void {
    console.log("Esto es lo que contiene aProject: " + aProject);
    this.dataProject.addProject(aProject).subscribe(p => {
      console.log("Esto es lo que contiene p: " + p)
      this.projects.push(p);
    });
  }

  modProject(aProject: project): void {
    this.dataProject.updateProject(aProject).subscribe( () => {
      this.projects.forEach(p => {
        if (p.id == aProject.id) {
          p.description = aProject.description;
          p.name = aProject.name;
          p.url = aProject.url;
          p.photo = aProject.photo;
        }
      });
    });
  }

  deleteProject(aProject: project):void {
    this.dataProject.deleteProject(aProject).subscribe(() => {
      this.projects = this.projects.filter(p => p.id != aProject.id);
    });
  }

  toggleModalProject(): void {
    this.uiProject.toggleModalAddProject();
  }

  toggleModProject(aProject: project): void{
    this.uiProject.toggleModalModProject(aProject);
  }



  //DRAG AND DROP
  drop (event: CdkDragDrop<project[]>): void{
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
  }

}
