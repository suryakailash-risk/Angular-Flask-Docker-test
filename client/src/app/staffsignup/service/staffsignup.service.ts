import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable,Subject } from 'rxjs';
import { map,filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffsignupService {

  baseUrl: String= environment.baseUrl;

  constructor(private http:HttpClient) { }

  staffSignUp(credentials: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/register`,credentials);
  }
  checkerusername(usernamecheck: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/check/username', usernamecheck);
  }
}
