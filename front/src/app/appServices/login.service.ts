import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const url = 'http://localhost:6500/customer';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  // login(credentials): Observable<any> {
  //   return this.http.post(
  //     url + 'signin',
  //     {
  //       username: credentials.username,
  //       password: credentials.password,
  //     },
  //     httpOptions
  //   );
  // }
}
