import { Injectable } from '@angular/core';

//Http
import { HttpClient } from '@angular/common/http';

//observable
import {Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  getData ():Observable<any> {
    return this.http.get('./assets/data/data.json');
  }
}
