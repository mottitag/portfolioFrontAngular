import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

// interfaces
import { education, experiences } from '../../portfolio';

// font awesome
import { faPen, faCheck, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faXmark = faXmark;
  faPen = faPen;
  faCheck = faCheck;
  faPlus = faPlus;
  eduList: education[] = [];
  expList: experiences[] = [];

  constructor(private dataAbout:PortfolioService) {}
  
  ngOnInit(): void {
    this.dataAbout.getDataEducation().subscribe(dataEdu => {
      this.eduList = dataEdu;
    })
    this.dataAbout.getDataExperiences().subscribe(dataExp => {
      this.expList = dataExp;
    })
  }
  
  onDeleteEdu(edu:education) {
    this.dataAbout.deleteEdu(edu).subscribe(() => {
      this.eduList = this.eduList.filter(e => e.id !== edu.id)
    })
  }
  onDeleteExp(exp:experiences) {
    console.log(exp)
  }

}
