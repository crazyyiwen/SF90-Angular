import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {UserSignUp} from '../Models/UserSignUp';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  signupFormModalEmail: string = '';
  signupFormModalPassword: string = '';
  signupFormModalConfirmPassword: string = '';
  usersignup = new UserSignUp();

  signupUrl = 'http://localhost:57962/api/Account/Register';
  constructor(private http: HttpClient, private router: Router){

  }
  signUp(){
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.signupUrl, this.usersignup, {headers: reqHeader});
  }

  signUpPost(){
    this.signUp().subscribe(res =>{
      console.log(res);
      this.router.navigate(['/login']);
    },
    err => {
      console.log(err.message);
    },
    )
  }
}




