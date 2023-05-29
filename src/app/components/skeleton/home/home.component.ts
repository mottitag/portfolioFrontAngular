import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

import { home } from '../../../portfolio'

// font awesome
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from 'src/app/services/persistence/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @ViewChild('title', {static: true}) public title!: ElementRef;
  @ViewChild('paragraph', {static: true}) public paragraph!: ElementRef;
  @ViewChild('phone', {static: true}) public phone!: ElementRef;
  @Input() isAdmin!:boolean;
  
  faPen = faPen;
  faCheck = faCheck;
  dataHome: home = {title: "", description: "", phone: ""};

  constructor (private dataPortfolio: HomeService, private renderer2: Renderer2) {
    
  }

  ngOnInit(): void {
    this.dataPortfolio.getDataHome().subscribe(data => {
      this.dataHome = data;
    })
  }

  editH1(): void {
    this.renderer2.setAttribute(this.title.nativeElement, 'contentEditable', 'true');
    this.title.nativeElement.focus();
  }

  closeEditH1(): void{
    this.dataHome.title = this.title.nativeElement.textContent;
    this.dataPortfolio.updateHome(this.dataHome).subscribe( () => {
    this.renderer2.setAttribute(this.title.nativeElement, 'contentEditable', 'false');
    });
  }

  editP(): void {
    this.renderer2.setAttribute(this.paragraph.nativeElement, 'contentEditable', 'true');
    this.paragraph.nativeElement.focus();
  }

  closeEditP(): void {
    this.dataHome.description = this.paragraph.nativeElement.textContent;
    this.dataPortfolio.updateHome(this.dataHome).subscribe( () => {
      this.renderer2.setAttribute(this.paragraph.nativeElement, 'contentEditable', 'false');
    });
  }

  editPhone(): void {
    this.renderer2.setAttribute(this.phone.nativeElement, 'contentEditable', 'true');
    this.phone.nativeElement.focus();
  }

  closeEditPhone(): void {
    this.dataHome.phone = this.phone.nativeElement.textContent;
    this.dataPortfolio.updateHome(this.dataHome).subscribe( () => {
      this.renderer2.setAttribute(this.phone.nativeElement, 'contentEditable', 'false');
    })
  }

}
