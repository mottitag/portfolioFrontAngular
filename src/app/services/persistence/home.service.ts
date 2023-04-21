import { Injectable } from '@angular/core';

//interface
import { home } from '../../portfolio';

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
  private apiURLHome = 'http://localhost:8080/per';

  constructor(private http:HttpClient) { }

  getDataHome(): Observable<home> {
    return this.http.get<home>(`${this.apiURLHome}/bringHome/1`);
  }
  
  updateHome(dato: home): Observable<home> {
    return this.http.put<home>(`${this.apiURLHome}/updateHome/1`, dato, httpOption);
  }
}
