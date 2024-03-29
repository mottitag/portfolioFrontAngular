import { Injectable } from '@angular/core';

//interface
import { experiences, dirBackend } from '../../portfolio';

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
  private apiURLExperiences = dirBackend.apiUrlCrud + 'exp';
  private apiURLAddExp = dirBackend.apiUrlCrud + 'per/newExp/' + dirBackend.idPersona;

  constructor(private http:HttpClient) { }

  getDataExperiences(): Observable<experiences[]> {
    return this.http.get<experiences[]>(`${this.apiURLExperiences}/bring`);
  }

  addExperience(exp: experiences): Observable<experiences>{
    return this.http.post<experiences>(this.apiURLAddExp, exp, httpOption);
  }

  updateExperience(exp: experiences): Observable<experiences>{
    const url = `${this.apiURLExperiences}/update/${exp.id}`;
    return this.http.put<experiences>(url, exp, httpOption);
  }

  deleteExp(exp:experiences): Observable<experiences>{
    const url = `${this.apiURLExperiences}/del/${exp.id}`;
    return this.http.delete<experiences>(url);
  }
}
