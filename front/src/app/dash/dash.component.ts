import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashService } from '../appServices/dash.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
  appdata!: any;
  count_cust!: number;
  count_loans!: number;
  count_active!: number;
  count_amount!: number;
  count_due!: number;

  constructor(private router: Router, private dashservice: DashService) {}
  getCustomerData() {
    this.dashservice.getCustomerList().subscribe(
      (res) => {
        console.log(res);
        this.appdata = res;

        let count = 0,
          count2 = 0,
          count_amount = 0,
          count_due = 0;
        let obj = this.appdata.find((value: any) => {
          count++;
          if (
            value.loan_status === 'active' ||
            value.loan_status === 'Active' ||
            value.loan_status === 'ACTIVE'
          ) {
            count2++;
          }
          count_amount += value.loan_amount;
          count_due += value.payment_due;
        });

        this.count_cust = count;
        this.count_loans = count;
        this.count_active = count2;
        this.count_amount = count_amount;
        this.count_due = count_due;
      },
      (err) => {
        console.log('error is', err);
      }
    );
  }

  ngOnInit(): void {
    this.getCustomerData();
  }
}
