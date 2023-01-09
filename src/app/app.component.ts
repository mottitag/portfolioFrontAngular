import { Component } from '@angular/core';

// AOS Animation
import * as AOS from 'aos';

// Font Awesome
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-PFMottita';
  faPen = faPen;

  ngOnInit() {
    AOS.init();
  }
}
