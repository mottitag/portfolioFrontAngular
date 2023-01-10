import { Component, OnInit } from '@angular/core';

//services
import { PortfolioService } from 'src/app/services/portfolio.service';

// Font awesome
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  faPen = faPen;
  dataNav:any;
  
  constructor(private dataPortfolio:PortfolioService){

  }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data => {
      console.log(data);
      this.dataNav = data;
    });
  }
}
