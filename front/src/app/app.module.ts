import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatCardModule} from '@angular/material/card';
  import {MatButtonModule} from '@angular/material/button';
  import {MatIconModule} from '@angular/material/icon';
  import {MatTableModule} from '@angular/material/table';
  import {MatSortModule} from '@angular/material/sort';
  import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
  import {MatPaginatorModule} from '@angular/material/paginator';
  import {MatInputModule} from '@angular/material/input';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { LoansComponent } from './loans/loans.component';
import { PaymentComponent } from './payment/payment.component';
import { InfoComponent } from './info/info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashComponent } from './dash/dash.component';
@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    CustomerComponent,
    AddCustomerComponent,
    EditcustomerComponent,
    LoansComponent,
    PaymentComponent,
    InfoComponent,
    DashboardComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
