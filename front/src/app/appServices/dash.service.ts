import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../appModels/customer.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  private dash!: Customer;
  setter(dash: Customer) {
    this.dash = dash;
  }

  getter() {
    return this.dash;
  }

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  url = 'http://localhost:6500/customer';
  constructor(private http: HttpClient) {}
  getCustomerList() {
    return this.http.get(this.url);
  }
}
