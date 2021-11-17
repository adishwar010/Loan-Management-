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
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
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
  }
}
