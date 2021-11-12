import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../appServices/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  paymentdata!: any;

  constructor(private router: Router, private paymentService: PaymentService) {}
  getPayments() {
    this.paymentService.getCustomerList().subscribe(
      (res) => {
        console.log(res);
        this.paymentdata = res;
      },
      (err) => {
        console.log('error is', err);
      }
    );
  }

  ngOnInit(): void {
    this.getPayments();
  }
}
