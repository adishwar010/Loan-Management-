import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from "@angular/router";
import { CustomerService } from '../appServices/customer.service';
import { Customer } from '../appModels/customer.model';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  submitted = false;
  editForm!: FormGroup;
  customerdata !:any;
  public customer!: Customer;
  constructor(private router: Router,private custService : CustomerService ,public fb: FormBuilder,
    private actRoute: ActivatedRoute,) {  }

  // editCustomers(id:any){
  //   this.custService.updateCustomer(id).subscribe((res)=>{console.log(res)
  //   this.customerdata = res;
  //   } ,(err)=>{console.log("error is",err);},)
  // }
  ngOnInit(): void {
    this.customer = this.custService.getter();
    let id = this.actRoute.snapshot.paramMap.get('id');
    // this.editForm = this.fb.group({
    //   'cust_id' : ['', Validators.required],
    //   'name' : ['', Validators.required],
    //   'age' : ['', Validators.required],
    //   'income' : ['', Validators.required],
    //   'email' : ['', Validators.required],
    //   'contact' : ['', Validators.required],
    //   'loan_id' : ['', Validators.required],
    //   'loan_type' : ['', Validators.required],
    //   'interest' : ['', Validators.required],
    //   'installments' : ['', Validators.required],
    //   'time_period' : ['', Validators.required],
    //   'loan_amount' : ['', Validators.required],
    //   'loan_status' : ['', Validators.required],
    //   'payment_due' : ['', Validators.required],
    //   'year' : ['', Validators.required],
    // })
  }

  onUpdateCust(){
    // alert('hello');
    // let id = this.actRoute.snapshot.paramMap.get('id');
    // alert(id);
    console.log("customer1 is =",this.customer)
    this.custService.updateCustomer(this.customer).subscribe(
      // alert('hiiiii');
      (res)=>{
        console.log("HELLO",res);
        this.router.navigateByUrl(`/customer`)},
      (err)=>{console.log("ERRIS",err);}
    )
      //   this.customerdata = res;
      //   } ,(err)=>{console.log("error is",err);},)
  }







  }

  

 




