import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../appModels/customer.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customer!: Customer;

  setter(customer: Customer) {
    this.customer = customer;
  }

  getter() {
    return this.customer;
  }

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  url = 'http://localhost:6500/customer';
  getUrl = 'http://localhost:6500/customer';
  deleteUrl = 'http://localhost:6500/customer';
  updateUrl = 'http://localhost:6500/customer';
  constructor(private http: HttpClient) {}

  //sending post request
  addCustomer(emp: Customer) {
    return this.http.post(this.url, emp);
  }
  //retrieving customer data
  getCustomerList() {
    return this.http.get(this.getUrl);
  }

  // getCustomer(){
  //   return this.http.get(this.getUrl )
  // }
//retreiving a single customer
  getCustomer(id: any): Observable<any> {
    let url = `${this.getUrl}/read/${id}`;
    return this.http.get<Response>(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
//delete customer
  deleteCustomer(id: any) {
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }
//update customer
  updateCustomer(emp: Customer) {
    return this.http.put(`${this.updateUrl}/${emp._id}`, emp);
  }
//error generation
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
