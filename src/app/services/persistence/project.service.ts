import { Injectable } from '@angular/core';

//interface
import { project, dirBackend } from '../../portfolio';

//Http
import { HttpClient, HttpHeaders } from '@angular/common/http';

//observable
import { observable, Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiURLProject = dirBackend.apiUrlCrud + 'pro';
  private apiURLAddPro = dirBackend.apiUrlCrud + 'per/newPro/' + dirBackend.idPersona;

  constructor(private http: HttpClient) {}

    getProject(): Observable<project[]> {
      return this.http.get<project[]>(`${this.apiURLProject}/bring`);
    }

    addProject(aProject: project): Observable<project> {
      return this.http.post<project>(this.apiURLAddPro, aProject, httpOption);
    }

    updateProject(aProject: project): Observable<project>{
      const url = `${this.apiURLProject}/update/${aProject.id}`;
      return this.http.put<project>(url, aProject, httpOption);
    }

    deleteProject(aProject: project): Observable<project> {
      const url = `${this.apiURLProject}/del/${aProject.id}`;
      return this.http.delete<project>(url);
    }
}
