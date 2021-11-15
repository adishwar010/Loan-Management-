import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { LoansComponent } from './loans/loans.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'loan',
    component: LoansComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'addcustomer',
    component: AddCustomerComponent,
  },
  {
    path: 'editcustomer',
    component: EditcustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
