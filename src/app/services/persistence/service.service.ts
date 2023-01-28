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
  private apiURLServices = 'http://localhost:5001/services';

  constructor(private http: HttpClient) { }

  getService(): Observable<service[]> {
    return this.http.get<service[]>(this.apiURLServices);
  }

  addService(aService: service): Observable<service> {
    return this.http.post<service>(this.apiURLServices, aService, httpOption);
  }

  updateService(aService: service): Observable<service> {
    const url = `${this.apiURLServices}/${aService.id}`;
    return this.http.put<service>(url, aService, httpOption);
  }

  deleteService(aService: service): Observable<service> {
    const url = `${this.apiURLServices}/${aService.id}`;
    return this.http.delete<service>(url);
  }
}
