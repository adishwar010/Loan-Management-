import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../appModels/user.model';
const url = 'http://localhost:6500/customer';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private user!: user;
  url = 'http://localhost:6500/users';
  setter(user: user) {
    this.user = user;
  }

  getter() {
    return this.user;
  }
  constructor(private http: HttpClient) {}

  getLogin() {
    return this.http.get(this.url);
  }

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
