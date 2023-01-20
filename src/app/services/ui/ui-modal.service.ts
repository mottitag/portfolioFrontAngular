import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { education, experiences } from '../../portfolio';

@Injectable({
  providedIn: 'root'
})
export class UiModalService {
  // edu false and exp true
  private toEduOrExp: boolean = false;
  // add false and mod true
  private toAddOrMod: boolean = false;

  private education: education = {school: "", title: "", logo: "", start: "", end: "", description: ""};
  private experience: experiences = {company: "", position: "", logo: "", start: "", end: "", description: ""};

  private subject = new Subject<any>();
  private subject2 = new Subject<any>();
  private subEducation = new Subject<any>();
  private subExperience = new Subject<any>();

  constructor() { }

  toggleModalAddEdu(): void {
    this.toEduOrExp = false;
    this.toAddOrMod = false;
    this.education = {school: "", title: "", logo: "", start: "", end: "", description: ""};
    this.subject.next(this.toEduOrExp);
    this.subject2.next(this.toAddOrMod);
    this.subEducation.next(this.education);
  }

  toggleModalAddExp(): void {
    this.toEduOrExp = true;
    this.toAddOrMod = false;
    this.experience = {company: "", position: "", logo: "", start: "", end: "", description: ""};
    this.subject.next(this.toEduOrExp);
    this.subject2.next(this.toAddOrMod);
    this.subExperience.next(this.experience);
  }

  toggleModalModEdu(edu: education): void {
    this.toEduOrExp = false;
    this.toAddOrMod = true;
    this.education = edu;
    this.subject.next(this.toEduOrExp);
    this.subject2.next(this.toAddOrMod);
    this.subEducation.next(this.education);
  }

  toggleModalModExp(exp: experiences): void {
    this.toEduOrExp = true;
    this.toAddOrMod = true;
    this.experience = exp;
    this.subject.next(this.toEduOrExp);
    this.subject2.next(this.toAddOrMod);
    this.subExperience.next(this.experience);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  onToggleAdd(): Observable<any> {
    return this.subject2.asObservable();
  }

  onToggleModEdu(): Observable<any> {
    return this.subEducation.asObservable();
  }

  onToggleModExp(): Observable<any> {
    return this.subExperience.asObservable();
  }
}
