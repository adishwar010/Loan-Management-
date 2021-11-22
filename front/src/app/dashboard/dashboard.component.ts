import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  adminname:any;
  constructor(private router: Router) {}

  onCustomer() {
    this.router.navigateByUrl(`customer`);
  }

  onLoans() {
    this.router.navigateByUrl(`loan`);
  }

  onPayments() {
    this.router.navigateByUrl(`payment`);
  }

  onDashboard() {
    this.router.navigateByUrl(`dash`);
  }

  onLogout() {
    if (confirm('Do you want to LogOut ?')) {
      this.router.navigateByUrl(`login`);
    }
  }

  ngOnInit(): void {
     this.adminname =localStorage.getItem("name");
  }
}
