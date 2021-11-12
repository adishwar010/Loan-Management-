import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../appModels/customer.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private loans!: Customer;
  setter(loans: Customer) {
    this.loans = loans;
  }

  getter() {
    return this.loans;
  }

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  url = 'http://localhost:6500/customer';
  getUrl = 'http://localhost:6500/customer';
  constructor(private http: HttpClient) {}
  getCustomerList() {
    return this.http.get(this.getUrl);
  }
}
