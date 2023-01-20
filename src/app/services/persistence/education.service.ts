import { Injectable } from '@angular/core';

//interface
import { education } from '../../portfolio';

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
export class EducationService {
  private apiURLEducation = 'http://localhost:5001/education'

  constructor(private http:HttpClient) { }

  getDataEducation(): Observable<education[]> {
    return this.http.get<education[]>(this.apiURLEducation);
  }

  addEducation(edu: education): Observable<education>{
    return this.http.post<education>(this.apiURLEducation, edu, httpOption);
  }

  updateEducation(edu: education): Observable<education>{
    const url = `${this.apiURLEducation}/${edu.id}`;
    return this.http.put<education>(url, edu, httpOption);
  }

  deleteEdu(edu:education): Observable<education>{
    const url = `${this.apiURLEducation}/${edu.id}`;
    return this.http.delete<education>(url);
  }
}
