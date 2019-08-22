import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DisplayData } from './Models/DisplayData';


@Injectable({
  providedIn: 'root'
})
export class DataSupplyService {
  url = 'http://localhost:57962/api/Values';
  urlID = 'http://localhost:57962/api/Values/6';
  urlPOST = 'http://localhost:57962/api/Values/';
  dataposts = new DisplayData();
  _dataid: number;

  constructor(private http: HttpClient) { }
  
  getData(){   
    return this.http.get(this.url);
  }
  getDataByID(){
    return this.http.get(this.urlID);
  }
  addTask(dataposts){
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.urlPOST, dataposts, {headers: reqHeader});
  }
  deleteData(dataid){
    
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.delete(this.urlPOST + dataid.toString(), {headers: reqHeader});
  }
  updateData(id, dataposts){
    //debugger
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(this.urlPOST + id.toString(), dataposts, {headers: reqHeader});
  }
}
