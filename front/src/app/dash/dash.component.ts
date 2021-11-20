import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashService } from '../appServices/dash.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  appdata!: any;
  

  constructor(private router: Router, private dashservice: DashService) {}
  getData() {
    this.dashservice.getCustomerList().subscribe(
      (res) => {
        console.log(res);
        this.appdata = res;
      },
      (err) => {
        console.log('error is', err);
      }
    );
  }
  getTotalCustomers(){
    let count =0;
    for(let i=0; i<this.appdata.size();i++){
      count = count++;
    }
  }
  ngOnInit(): void {
    this.getData();
  }

}
