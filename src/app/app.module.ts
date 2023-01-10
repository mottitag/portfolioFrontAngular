import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// components
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { ProjectComponent } from './components/project/project.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';

// http
import { HttpClientModule } from '@angular/common/http'

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ProjectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
