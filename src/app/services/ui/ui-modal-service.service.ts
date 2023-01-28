import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { service } from 'src/app/portfolio';

@Injectable({
  providedIn: 'root'
})
export class UiModalServiceService {

  //add false and mod true
  private toAddOrMod: boolean = false;

  private service: service = {name: "", description: ""};

  private subject = new Subject<any>();
  private subService = new Subject<any>();


  constructor() { }

  toggleModalAddService(): void {
    this.toAddOrMod = false;
    this.service = {name: "", description: ""};
    this.subject.next(this.toAddOrMod);
    this.subService.next(this.service);
  }

  toggleModalModService(aService: service): void {
    this.toAddOrMod = true;
    this.service = aService;
    this.subject.next(this.toAddOrMod);
    this.subService.next(this.service);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

  onToggleModProject(): Observable<any> {
    return this.subService.asObservable();
  }
}
