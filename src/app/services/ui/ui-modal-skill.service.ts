import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { skill } from '../../portfolio';

@Injectable({
  providedIn: 'root'
})
export class UiModalSkillService {
  // add false and mod true
  private toAddOrMod: boolean = false;

  private skill: skill = {name: "", color: "", percent: 0};

  private subject = new Subject<any>();
  private subSkill = new Subject<any>();

  constructor() { }

  toggleModalAddSkill(): void {
    this.toAddOrMod = false;
    this.skill ={name: "", color: "", percent: 0};
    this.subject.next(this.toAddOrMod);
    this.subSkill.next(this.skill);
  }

  toggleModalModSkill(aSkill: skill): void {
    this.toAddOrMod = true;
    this.skill = aSkill;
    this.subject.next(this.toAddOrMod);
    this.subSkill.next(this.skill);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  onToggleModSkill(): Observable<any> {
    return this.subSkill.asObservable();
  }
}
