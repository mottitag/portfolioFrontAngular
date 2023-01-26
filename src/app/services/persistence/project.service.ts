import { Injectable } from '@angular/core';

//interface
import { project } from '../../portfolio';

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

  private apiURLProject = 'http://localhost:5001/projects'

  constructor(private http: HttpClient) {}

    getProject(): Observable<project[]> {
      return this.http.get<project[]>(this.apiURLProject);
    }

    addProject(aProject: project): Observable<project> {
      return this.http.post<project>(this.apiURLProject, aProject, httpOption);
    }

    updateProject(aProject: project): Observable<project>{
      const url = `${this.apiURLProject}/${aProject.id}`;
      return this.http.put<project>(url, aProject, httpOption);
    }

    deleteProject(aProject: project): Observable<project> {
      const url = `${this.apiURLProject}/${aProject.id}`;
      return this.http.delete<project>(url);
    }
}
