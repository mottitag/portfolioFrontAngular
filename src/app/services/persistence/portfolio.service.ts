import { Injectable } from '@angular/core';

//interface
import { profile } from '../../portfolio';

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
export class PortfolioService {
  private apiURLProfile = 'http://localhost:8080/per';

  constructor(private http:HttpClient) { }

  // Get Services
  getDataProfile(): Observable<profile> {
    return this.http.get<profile>(`${this.apiURLProfile}/bringProf/1`);
  }

}
