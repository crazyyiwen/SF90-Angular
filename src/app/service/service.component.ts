import { Component, OnInit } from '@angular/core';
import {DataSupplyService} from '../data-supply.service';
import {DisplayData} from '../Models/DisplayData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [DisplayData]
  //providers: [DataSupplyService]
})
export class ServiceComponent implements OnInit {
  str = 'service works!';
  data: any;
  dataByID;
  error: any;
  loading: any;
  para: any;
  deletedataid: number;
  condition: boolean = false;
  updatedata = new DisplayData();
  idshow = 0;
  constructor(private myservice: DataSupplyService, private router: Router) { }

  ngOnInit() {
    
    // get json data and observe    
  this.myservice.getData().subscribe((response) => {this.data = response;},
                                    (error) => {this.error = error; this.loading = false},
                                    () => {this.loading = false;})

    // this.myservice.getDataByID().subscribe((response) => {this.dataByID = response;},
    //                                    (error) => {this.error = error; this.loading = false},
    //                                    () => {this.loading = false;})                                   
  }
  // pass id
  passid(id){
    this.idshow = id;
  }
  // update function
  updatePut(id){
      this.condition = false;
      this.myservice.updateData(id, this.updatedata).subscribe(
        res =>{
          console.log(res); 
          debugger          
          this.router.navigate(['/service']);
          this.ngOnInit();
        },
        err => {
          debugger
          console.log(err.message);
        },
      )
  }
  // pass IDnumber  to delete function
  deleteDataProcess(deletedataid){
    this.myservice.deleteData(deletedataid).subscribe(res =>{ 
      console.log(res);
      this.ngOnInit();
      // this.router.navigate(['/service']);
    },   
    err => {
      console.log(err.message);
    },
    )
  }
}
