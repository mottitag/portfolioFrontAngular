import { Injectable } from '@angular/core';

//interface
import { profile, home, education, experiences } from '../portfolio';

//Http
import { HttpClient } from '@angular/common/http';

//observable
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiURLProfile = 'http://localhost:5001/profile';
  private apiURLHome = 'http://localhost:5001/home'
  private apiURLEducation = 'http://localhost:5001/education'
  private apiURLExperiences = 'http://localhost:5001/experiences'

  constructor(private http:HttpClient) { }

  getDataProfile(): Observable<profile> {
    return this.http.get<profile>(this.apiURLProfile);
  }

  getDataHome(): Observable<home> {
    return this.http.get<home>(this.apiURLHome);
  }

  getDataEducation(): Observable<education[]> {
    return this.http.get<education[]>(this.apiURLEducation);
  }

  getDataExperiences(): Observable<experiences[]> {
    return this.http.get<experiences[]>(this.apiURLExperiences);
  }

  deleteEdu(edu:education): Observable<education>{
    const url = `${this.apiURLEducation}/${edu.id}`;
    return this.http.delete<education>(url);
  }
}
