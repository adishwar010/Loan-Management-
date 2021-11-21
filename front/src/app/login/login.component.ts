import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../appServices/login.service';
import { user } from '../appModels/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginservice: LoginService) {}
  // username = '';
  // password = '';
  logindata: any;
  username!: String;
  password!: String;
  public user!: user;

  // login() {
  //   this.loginservice.login();
  //   if (this.username == 'Anish' && this.password == '123') {
  //     this.router.navigateByUrl('/sidebar');
  //     alert('Succesfull');
  //   } else {
  //     alert('Login unsuccessful');
  //   }
  // }

  login() {
    this.loginservice.getLogin().subscribe(
      (res) => {
        this.logindata = res;

        let count = 0;
        let obj = this.logindata.find((value: any) => {
          if (
            value.username == this.username &&
            value.password == this.password
          ) {
            count++;
          }
        });
        if (count == 1) {
          this.router.navigateByUrl(`/dash`);
        } else {
          alert('Invalid credentials');
        }
      },
      (err) => {
        console.log('error is', err);
      }
    );
  }

  ngOnInit(): void {
    this.logindata = this.loginservice.getter();
  }
}
