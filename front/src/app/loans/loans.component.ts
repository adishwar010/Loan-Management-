import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from '../appServices/loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
})
export class LoansComponent implements OnInit {
  loandata!: any;

  constructor(private router: Router, private loanService: LoanService) {}
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
}
