import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  private baseURL = "https://bookcart.azurewebsites.net/api/Login";
  constructor(private http: HttpClient) { }

  executeAuthentication(email: string, password: string): Observable<any>{
     return this.http.post<any>(`${this.baseURL}`, { email, password }).pipe(
      map(response =>{
        sessionStorage.setItem("email", response.email)
        sessionStorage.setItem("token",`Bearer ${response.token}`)
       return response;
      } )
    );
  }

  createUser(email: string, password: string): Observable<any>{
    return this.http.post<any>(`${this.baseURL}/signup`, { email, password }).pipe(
     map(response => response)
   );
 }

 getEmailAuthenticated(){
   return sessionStorage.getItem("email");
 }}