import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  rootUrl = 'http://localhost:57962';
  constructor(private http: HttpClient) { }
  // 'No-Auth': 'True'
  userAuthentication(_username, _password){
    var pdata = "username=" + _username + "&password=" + _password + "&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic'});
    return this.http.post(this.rootUrl + '/token', pdata, {headers: reqHeader});
  }
  // get the localStorage token and then should be 
  // compared to the web api token, use the return value
  // to determine if the token is expired or not
  public isAuthenticated(): boolean{ 
    return this.getToken() !== null;   
    // pass the token to web api and compare
  }
  storeToken(token: string){
    //debugger
    localStorage.setItem("userToken", token);
  }
  getToken(){
    return localStorage.getItem("userToken");
  }
  removeToken(){
    return localStorage.removeItem("userToken");
  }

  // errorHandler(error: Response){
  //   console.log(error);
  //   return throwError(error);
  // }
}
