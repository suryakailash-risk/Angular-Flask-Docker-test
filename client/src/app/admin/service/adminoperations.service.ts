import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminoperationsService {

  baseUrl: String = environment.baseUrl;

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }


  postbookdata(id: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/post/masterdata', id);
  }

  aappost(id: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/post/aapdatadata', id);
  }

  getauthor(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get/aapdatadata/author');
  }
  getartist(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get/aapdatadata/artist');
  }
  getpublisher(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get/aapdatadata/publisher');
  }
  getlanguage(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get/languagedata');
  }
  getsubject(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get/subjectdata');
  }
  getcategory(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get/categorydata');
  }
  languagepost(id: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/post/languagedata', id);
  }
  subjectpost(id: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/post/subjectdata', id);
  }
  categorypost(id: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/post/categorydata', id);
  }
  // getpublishersearch(id: any): Observable<any> {
  //   return this.http.post<any>(this.baseUrl + '/get/masterdata/publisher', id);
  // }
  // getauthorsearch(id: any): Observable<any> {
  //   return this.http.post<any>(this.baseUrl + '/get/masterdata/author', id);
  // }
  // gettownsearch(id: any): Observable<any> {
  //   return this.http.post<any>(this.baseUrl + '/get/masterdata/publishertown', id);
  // }
  getsearch(id: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/get/searchdata', id);
  }
  aapget(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get/aapdatadata/' + id);
  }
  aapput(id: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/update/aapdatadata', id);
  }
  aapputphoto(idwithphoto: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/update/aapdatadataphoto', idwithphoto);
  }
  aapputusername(idwithusername: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/update/aapdatadatausername', idwithusername);
  }
  aapputphotousername(idphotousername: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/update/aapdatadataphotousername', idphotousername);
  }
  bookget(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get/masterdataeachbook/' + id);
  }
  editbookput(id: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/update/masterdata', id);
  }
  subjectput(id: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/update/subjectdatadata', id);
  }
  categoryput(id: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/update/categorydatadata', id);
  }
  languageput(id: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/update/languagedatadata', id);
  }
  getallaap(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get/allaapfortable');
  }
  statusupdate(id: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/post/status', id);
  }
  statusupdatedis(id: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/post/disstatus', id);
  }
  exportdatainfo(id: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/get/exportdatafromtable', id);
  }
  checker(id: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/check/isbn', id);
  }
  checkerusername(usernamecheck: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/check/username', usernamecheck);
  }
}
