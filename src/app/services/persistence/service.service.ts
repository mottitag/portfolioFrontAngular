import { Injectable } from '@angular/core';

//interface
import { service } from 'src/app/portfolio';

// http
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Observable
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

const httpOption = {
  headers: new HttpHeaders({
    'content-type': 'applications/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiURLServices = 'http://localhost:8080/serv';
  private apiURLAddServ = 'http://localhost:8080/per/newServ/1';

  constructor(private http: HttpClient) { }

  getService(): Observable<service[]> {
    return this.http.get<service[]>(`${this.apiURLServices}/bring`);
  }

  addService(aService: service): Observable<service> {
    return this.http.post<service>(this.apiURLAddServ, aService, httpOption);
  }

  updateService(aService: service): Observable<service> {
    const url = `${this.apiURLServices}/update/${aService.id}`;
    return this.http.put<service>(url, aService, httpOption);
  }

  deleteService(aService: service): Observable<service> {
    const url = `${this.apiURLServices}/del/${aService.id}`;
    return this.http.delete<service>(url);
  }
}
