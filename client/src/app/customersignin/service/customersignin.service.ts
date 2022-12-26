import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable,Subject } from 'rxjs';
import { map,filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersigninService {
  baseUrl: String= environment.baseUrl;

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  login_customer(data:any): Observable<any>{
    return this.http.post<any>(this.baseUrl+'/login',data);
  }
}
// customerlogin