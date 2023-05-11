import { Injectable } from '@angular/core';

//interface
import { home, dirBackend } from '../../portfolio';

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
export class HomeService {
  private apiURLHome = dirBackend.apiURL + 'per';

  constructor(private http:HttpClient) { }

  getDataHome(): Observable<home> {
    return this.http.get<home>(`${this.apiURLHome}/bringHome/${dirBackend.idPersona}`);
  }
  
  updateHome(dato: home): Observable<home> {
    return this.http.put<home>(`${this.apiURLHome}/updateHome/${dirBackend.idPersona}`, dato, httpOption);
  }
}
