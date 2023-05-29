import { Injectable } from '@angular/core';

//interface
import { profile, dirBackend } from '../../portfolio';

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
  private apiURLProfile = dirBackend.apiUrlCrud + 'per';

  constructor(private http:HttpClient) { }

  // Get Services
  getDataProfile(): Observable<profile> {
    return this.http.get<profile>(`${this.apiURLProfile}/bringProf/${dirBackend.idPersona}`);
  }

}
