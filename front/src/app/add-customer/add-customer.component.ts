import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../appServices/customer.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  custForm!: FormGroup;
  customer = {};
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private custService: CustomerService
  ) {}

  ngOnInit(): void {
    this.custForm = this.formBuilder.group({
      cust_id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      income: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      loan_id: ['', Validators.required],
      loan_type: ['', Validators.required],
      interest: ['', Validators.required],
      installments: ['', Validators.required],
      time_period: ['', Validators.required],
      loan_amount: ['', Validators.required],
      loan_status: ['', Validators.required],
      payment_due: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  isValid(): boolean {
    console.log('hi');
    if (
      this.custForm.value.cust_id == '' ||
      this.custForm.value.name == '' ||
      this.custForm.value.age == '' ||
      this.custForm.value.income == '' ||
      this.custForm.value.email == '' ||
      this.custForm.value.contact == '' ||
      this.custForm.value.loan_id == '' ||
      this.custForm.value.loan_type == '' ||
      this.custForm.value.interest == '' ||
      this.custForm.value.installments == '' ||
      this.custForm.value.time_period == '' ||
      this.custForm.value.loan_amount == '' ||
      this.custForm.value.loan_status == '' ||
      this.custForm.value.payment_due == '' ||
      this.custForm.value.year == ''
    ) {
      return true;
    }
    return false;
  }

  onSubmit(form: NgForm) {
    if (this.isValid()) {
      alert('Some fields are missing');
    }
    // console.log(this.custForm.value.cust_id);
    else {
      this.custService.addCustomer(this.custForm.value).subscribe(
        (res) => {
          console.log(res);
          this.router.navigateByUrl(`/customer`);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
