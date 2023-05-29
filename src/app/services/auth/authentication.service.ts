import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { dirBackend, jwtDto } from 'src/app/portfolio';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = dirBackend.apiURLAuth + "login";
  currentUserSubject: BehaviorSubject<any>;
  roles: Array<string> = [];

  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  public setToken(token: string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string{
    return sessionStorage.getItem(TOKEN_KEY)!; 
  }

  public setUsername(username: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername():string {
    return sessionStorage.getItem(USERNAME_KEY)!;
  }

  public setAuthorities(authorities: string[]): void{
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[]{
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  login (credential:any): Observable<jwtDto>{
    return this.http.post<jwtDto>(this.url, credential).pipe(map(data =>{
      this.setToken(data.accessToken);
      this.setUsername(data.username);
      this.setAuthorities(data.authorities);
      this.currentUserSubject.next(data);
      this.roles = data.authorities;
      return data;
    }))
  }

  public logout(): void{
    window.sessionStorage.clear();
  }

  get UserAuth(){
    return this.currentUserSubject.value;
  }
}
