import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../appServices/customer.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customerdata!: any;

  constructor(private router: Router, private custService: CustomerService) {}

  getCustomers() {
    this.custService.getCustomerList().subscribe(
      (res) => {
        this.customerdata = res;
      },
      (err) => {
        console.log('error is', err);
      }
    );
  }

  onDeleteCustomer(id: any) {
    if (confirm('DO YOU WANT TO DELETE?')) {
      this.custService.deleteCustomer(id).subscribe(
        (res) => {
          console.log('delete succes');
          alert('successful deletion');
          this.getCustomers();
        },
        (err) => {
          console.log('error is', err);
        }
      );
    }
  }

  ngOnInit(): void {
    this.getCustomers();
  }
  onAdd() {
    this.router.navigateByUrl('/addcustomer');
  }
  onEdit(customer: any) {
    this.custService.setter(customer);
    this.router.navigateByUrl(`/editcustomer`);
    // this.custService.updateCustomer(customer,customer._id)
    console.log(customer._id);
  }
}
