import { Component, OnInit } from '@angular/core';

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
  dataNav: any;
  
  constructor(private dataPortfolio:PortfolioService){

  }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data => {
      console.log(data);
      this.dataNav = data;
      this.img = data.nav.foto_perfil;
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
