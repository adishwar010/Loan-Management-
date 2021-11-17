import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../appServices/customer.service';
import { LoanService } from '../appServices/loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
})
export class LoansComponent implements OnInit {
  loandata!: any;

  constructor(
    private router: Router,
    private loanService: LoanService,
    private custService: CustomerService
  ) {}
  getLoans() {
    this.loanService.getCustomerList().subscribe(
      (res) => {
        console.log(res);
        this.loandata = res;
      },
      (err) => {
        console.log('error is', err);
      }
    );
  }

  ngOnInit(): void {
    this.getLoans();
  }
  onInfo(customer: any) {
    this.custService.setter(customer);
    this.router.navigateByUrl(`/info`);
  }
}
