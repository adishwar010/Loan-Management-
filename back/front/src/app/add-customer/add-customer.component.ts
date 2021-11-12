import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../appServices/customer.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
 custForm!: FormGroup;
 customer ={};
  constructor(private router: Router, private formBuilder: FormBuilder,private route: ActivatedRoute,
    private custService : CustomerService) { }
 
  ngOnInit(): void {
    this.custForm = this.formBuilder.group({
      'cust_id' : ['', Validators.required],
      'name' : ['', Validators.required],
      'age' : ['', Validators.required],
      'income' : ['', Validators.required],
      'email' : ['', Validators.required],
      'contact' : ['', Validators.required],
      'loan_id' : ['', Validators.required],
      'loan_type' : ['', Validators.required],
      'interest' : ['', Validators.required],
      'installments' : ['', Validators.required],
      'time_period' : ['', Validators.required],
      'loan_amount' : ['', Validators.required],
      'loan_status' : ['', Validators.required],
      'payment_due' : ['', Validators.required],
      'year' : ['', Validators.required],
      
      
    });
  }


 onSubmit(form:NgForm){

  // this.custService.addCustomer(form)
  //   .subscribe(res => {
  //       let id = res['_id'];
  //       this.router.navigate(['/book-details', id]);
  //     }, (err) => {
  //       console.log(err);
  //     });}
  this.custService.addCustomer(this.custForm.value).subscribe(
    (res)=>{
        console.log(res);
    },
    (err)=>{console.log(err);},
  )
 }
}
