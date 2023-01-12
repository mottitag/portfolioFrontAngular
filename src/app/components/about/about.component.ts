import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

// font awesome
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faPlus = faPlus;
  eduList:any;
  expList:any;

  constructor(private dataAbout:PortfolioService) {}
  
  ngOnInit(): void {
    this.dataAbout.getData().subscribe(data => {
      this.eduList = data.education;
      this.expList = data.experiences;
    })
  }

}
