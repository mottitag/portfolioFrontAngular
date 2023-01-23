import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// components
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ModalAboutComponent } from './components/modal-about/modal-about.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { ProjectComponent } from './components/project/project.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';

// http
import { HttpClientModule } from '@angular/common/http'

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { ModalSkillComponent } from './components/modal-skill/modal-skill.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HomeComponent,
    ModalAboutComponent,
    NavigatorComponent,
    ProjectComponent,
    ServicesComponent,
    SkillsComponent,
    SkillItemComponent,
    ModalSkillComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DragDropModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
