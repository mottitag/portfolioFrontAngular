import { Component, OnInit } from '@angular/core';

//interface
import { profile } from '../../portfolio';

//services
import { PortfolioService } from 'src/app/services/portfolio.service';

// Font awesome
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

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
  dataNav!: profile;
  
  constructor(private dataPortfolio:PortfolioService){

  }

  ngOnInit(): void {
    this.dataPortfolio.getDataProfile().subscribe(data => {
      this.dataNav = data;
      this.img = data.img;
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

}
