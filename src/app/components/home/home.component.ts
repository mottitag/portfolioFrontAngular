import { Component } from '@angular/core';

// font awesome
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faPen = faPen;
}
