import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

// font awesome
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs';

//Persistence service
import { ServiceService } from 'src/app/services/persistence/service.service';
import { UiModalServiceService } from 'src/app/services/ui/ui-modal-service.service';

// interface
import { service } from 'src/app/portfolio';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  @Input() isAdmin!:boolean;
  faPlus = faPlus;
  services: service[] = [];
  subscription?: Subscription;
  toAddOrModd: boolean = false;

  constructor(private dataService: ServiceService, private uiService: UiModalServiceService) { }

  ngOnInit(): void {
    this.dataService.getService().subscribe(serviceList => {
      this.services = serviceList;
    });
  }

  addService(aService: service): void {
    this.dataService.addService(aService).subscribe(s => {
      this.services.push(s);
    });
  }

  modService(aService: service): void {
    this.dataService.updateService(aService).subscribe( () => {
      this.services.forEach(s => {
        if (s.id = aService.id){
          s.description = aService.description;
          s.name = aService.name;
        }
      });
    });
  }

  deleteService(aService: service): void {
    this.dataService.deleteService(aService).subscribe(() => {
      this.services = this.services.filter(s => s.id != aService.id)
    });
  }

  toggleModalService(): void {
    this.uiService.toggleModalAddService();
  }

  toggleModService(aService: service): void {
    this.uiService.toggleModalModService(aService);
  }

  //Drag and Drop
  drop (event: CdkDragDrop<service[]>): void {
    moveItemInArray(this.services, event.previousIndex, event.currentIndex);
  }
}
