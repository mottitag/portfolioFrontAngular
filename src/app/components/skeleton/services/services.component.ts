import { Component } from '@angular/core';

// font awesome
import { faLaptopCode, faFeather } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  faLaptopCode = faLaptopCode;
  faFeather = faFeather;
}
