import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../appServices/customer.service';
import { Customer } from '../appModels/customer.model';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css'],
})
export class EditcustomerComponent implements OnInit {
  submitted = false;
  editForm!: FormGroup;
  customerdata!: any;
  public customer!: Customer;
  constructor(
    private router: Router,
    private custService: CustomerService,
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.customer = this.custService.getter();
    let id = this.actRoute.snapshot.paramMap.get('id');
  }

  onUpdateCust(cust: Customer) {
    if (confirm('DO YOU WANT TO UPDATE?')) {
      this.custService.updateCustomer(cust).subscribe(
        (res) => {
          console.log('Update Succesfull');
          alert('successful Updation');
          this.router.navigateByUrl('/customer');
        },
        (err) => {
          console.log('error is', err);
        }
      );
    }
  }
}
