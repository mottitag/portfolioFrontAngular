import { Injectable } from '@angular/core';

//interface
import { experiences } from '../portfolio';

//Http
import { HttpClient, HttpHeaders } from '@angular/common/http';

//observable
import { Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiURLExperiences = 'http://localhost:5001/experiences'

  constructor(private http:HttpClient) { }

  getDataExperiences(): Observable<experiences[]> {
    return this.http.get<experiences[]>(this.apiURLExperiences);
  }

  addExperience(exp: experiences): Observable<experiences>{
    return this.http.post<experiences>(this.apiURLExperiences, exp, httpOption);
  }

  updateExperience(exp: experiences): Observable<experiences>{
    const url = `${this.apiURLExperiences}/${exp.id}`;
    return this.http.put<experiences>(url, exp, httpOption);
  }

  deleteExp(exp:experiences): Observable<experiences>{
    const url = `${this.apiURLExperiences}/${exp.id}`;
    return this.http.delete<experiences>(url);
  }
}
