import { Component, EventEmitter, Input, Output } from '@angular/core';
// interface
import { service } from 'src/app/portfolio';

// font Awesome
import { faPen, faXmark, faLaptopCode } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent {
  @Input() isAdmin!:boolean;
  @Input() service!: service
  @Output() onDeleteService: EventEmitter<service> = new EventEmitter;
  @Output() onUpdateService: EventEmitter<service> = new EventEmitter;
  
  faLaptopCode = faLaptopCode;
  faPen = faPen;
  faXmark = faXmark;

  constructor(){}
  
  onDelete(aService: service): void {
    this.onDeleteService.emit(aService);
  }

  onUpdate(aService: service): void {
    this.onUpdateService.emit(aService);
  }

}
