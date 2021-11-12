import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  username = '';
  password = '';
  login() {
  
    if (this.username == 'Anish' && this.password == '123') {
      this.router.navigateByUrl('/sidebar');
      alert('Succesfull');
    } else {
      alert('Login unsuccessful');
    }
  }
  

  ngOnInit(): void {}
}
