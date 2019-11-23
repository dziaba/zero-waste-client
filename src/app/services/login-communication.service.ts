import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginCommunicationService {
  serwer = 'https://ptsv2.com/t/1tvvs-1574476938/post';
  sprawdzdup = new HttpParams({ fromString: 'rozkaz=test' });
  getuser(nowa: User): Observable<User> {
    console.log(JSON.stringify(nowa));
    console.log(this.http.post<User>(this.serwer, JSON.stringify(nowa)));
    return this.http.post<User>(this.serwer, JSON.stringify(nowa));
  }

  constructor(private http: HttpClient) { }
}
