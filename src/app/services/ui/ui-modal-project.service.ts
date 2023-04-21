import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { project } from '../../portfolio';

@Injectable({
  providedIn: 'root'
})
export class UiModalProjectService {

  //add false and mod true
  private toAddOrMod: boolean = false;

  private project: project = {name: "", photo: "", description: ""};

  private subject = new Subject<any>();
  private subProject = new Subject<any>();
  
  constructor() { }

  toggleModalAddProject(): void {
    this.toAddOrMod = false;
    this.project = {name: "", photo: "", description: ""};
    this.subject.next(this.toAddOrMod);
    this.subProject.next(this.project);
  }

  toggleModalModProject(aProject: project): void {
    this.toAddOrMod = true;
    this.project = aProject;
    this.subject.next(this.toAddOrMod);
    this.subProject.next(this.project);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

  onToggleModProject(): Observable<any> {
    return this.subProject.asObservable();
  }
}
