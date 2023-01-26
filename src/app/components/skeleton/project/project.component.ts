import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

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

  faPlus = faPlus;
  projects: project[] = [];
  suscription?: Subscription;
  toAddOrMod: boolean = false;

  constructor(private dataProject: ProjectService, private uiProject: UiModalProjectService) {}

  ngOnInit(): void {
    this.dataProject.getProject().subscribe(projectList => {
      this.projects = projectList;
      console.log(this.projects);
    });
  }

  addProject(aProject: project): void {
    this.dataProject.addProject(aProject).subscribe(p => {
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
  drop (event: CdkDragDrop<project[]>){
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex)
  }

}
