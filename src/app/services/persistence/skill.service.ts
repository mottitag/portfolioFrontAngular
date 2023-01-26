import { Injectable } from '@angular/core';

//interface
import { skill } from '../../portfolio';

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
export class SkillService {
  private apiURLSkill = 'http://localhost:5001/skills'

  constructor(private http:HttpClient) { }
  
  getSkill(): Observable<skill[]> {
    return this.http.get<skill[]>(this.apiURLSkill);
  }

  addSkill(aSkill: skill): Observable<skill>{
    return this.http.post<skill>(this.apiURLSkill, aSkill, httpOption);
  }

  updateSkill(aSkill: skill): Observable<skill>{
    const url = `${this.apiURLSkill}/${aSkill.id}`;
    return this.http.put<skill>(url, aSkill, httpOption);
  }

  deleteSkill(aSkill:skill): Observable<skill>{
    const url = `${this.apiURLSkill}/${aSkill.id}`;
    return this.http.delete<skill>(url);
  }
}
