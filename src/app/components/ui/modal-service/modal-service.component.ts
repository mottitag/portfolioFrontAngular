import { Component, EventEmitter, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiModalServiceService } from 'src/app/services/ui/ui-modal-service.service';

// Interface
import { service } from 'src/app/portfolio';

@Component({
  selector: 'app-modal-service',
  templateUrl: './modal-service.component.html',
  styleUrls: ['./modal-service.component.css']
})
export class ModalServiceComponent {
  id?: number = 0;
  name: string = "";
  description: string = "";
  toAddOrMod: boolean = false;
  subToAddOrMod?: Subscription;
  subService?: Subscription;

  @Output() onAddService: EventEmitter<service> = new EventEmitter;
  @Output() onModService: EventEmitter<service> = new EventEmitter;

  constructor(private uiService: UiModalServiceService) {
    this.subToAddOrMod = this.uiService.onToggle().subscribe(value => {
      this.toAddOrMod = value;
    });
    this.subService = this.uiService.onToggleModProject().subscribe(aService => {
      this.id = aService.id;
      this.name = aService.name;
      this.description = aService.description;
    });
  }

  onSubmit(){
    if (this.name.length === 0 ||  this.description.length === 0){
      alert("Debe completar todos los campos");
      return
    }
    const newElement = {
      id: this.id,
      name: this.name,
      description: this.description
    };
    console.log("Servicio para enviar a base de datos: " + newElement)
    if (this.toAddOrMod){
      this.onModService.emit(newElement);
    }else {
      this.onAddService.emit(newElement);
    }
  }
}
