import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserLogin} from '../Models/UserLogin';
import { HttpErrorResponse } from '@angular/common/http';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin = new UserLogin();
  isLoginError: boolean = false;
  isLogin: boolean;
  constructor(private loginservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
    
  }
  OnSubmit(username, password){
    this.loginservice.userAuthentication(username, password).subscribe((data: any)=>{localStorage.setItem('userToken', data.access_token);
    this.isLogin = true;
    this.router.navigate(['/service']);},
    (err: HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }
  // Logout(){
  //   this.isLogin = false;
  //   this.loginservice.removeToken();
  // }
}
