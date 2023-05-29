import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {

  isAdmin: boolean = false;
  roles: string[] = [];


  constructor(private auth: AuthenticationService){}

  ngOnInit() {
    this.roles = this.auth.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === "ADMIN"){
        this.isAdmin = true;
      }
    })
  }

}
