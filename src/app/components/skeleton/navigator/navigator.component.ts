import { Component, OnInit, Input } from '@angular/core';

//interface
import { profile } from '../../../portfolio';

//services
import { PortfolioService } from 'src/app/services/persistence/portfolio.service';

// Font awesome
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Router } from '@angular/router';

const AUTHORITIES_KEY = 'AuthAuthorities';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  faPen = faPen;
  faCheck = faCheck;
  inputDisplay:string = "none";
  img = '';
  dataNav: profile = {name: "", photo: ""};
  @Input() isAdmin!:boolean;
  
  constructor(private dataPortfolio:PortfolioService, private auth: AuthenticationService, private route: Router){

  }

  ngOnInit() {
    this.dataPortfolio.getDataProfile().subscribe(data => {
      this.dataNav = data;
      this.img = data.photo;
    });
  }

  editPhoto(){
    this.inputDisplay = "block";
  }

  closeFile () {
    this.inputDisplay = "none";
  }

  changePhoto(event: any): void {
    const selectedFiles: FileList = event.target.files;
    if (selectedFiles){
      const file: File | null = selectedFiles[0];

      if (file) {
        const currentFile = file;
        const reader = new FileReader();
        reader.onload = (e:any) => {
          this.img = e.target.result;
        };
        reader.readAsDataURL(currentFile);
      }
    }
  }

  onLogout(): void {
    this.auth.logout();
    this.route.navigate(['/login']);
  }

}
