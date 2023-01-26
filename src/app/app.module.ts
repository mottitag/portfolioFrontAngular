import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// components
import { AboutComponent } from './components/skeleton/about/about.component';
import { ContactComponent } from './components/skeleton/contact/contact.component';
import { EducationComponent } from './components/items/education/education.component';
import { ExperienceComponent } from './components/items/experience/experience.component';
import { FooterComponent } from './components/skeleton/footer/footer.component';
import { HomeComponent } from './components/skeleton/home/home.component';
import { ModalAboutComponent } from './components/ui/modal-about/modal-about.component';
import { ModalProjectComponent } from './components/ui/modal-project/modal-project.component';
import { ModalSkillComponent } from './components/ui/modal-skill/modal-skill.component';
import { NavigatorComponent } from './components/skeleton/navigator/navigator.component';
import { ProjectComponent } from './components/skeleton/project/project.component';
import { ProjectItemComponent } from './components/items/project-item/project-item.component';
import { ServicesComponent } from './components/skeleton/services/services.component';
import { SkillsComponent } from './components/skeleton/skills/skills.component';
import { SkillItemComponent } from './components/items/skill-item/skill-item.component';

// http
import { HttpClientModule } from '@angular/common/http'

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    ProjectItemComponent,
    ModalProjectComponent,
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
