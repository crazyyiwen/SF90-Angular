import { Component, OnInit } from '@angular/core';
import {DisplayData} from '../../Models/DisplayData';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataSupplyService } from 'src/app/data-supply.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  // urlPOST = 'http://localhost:57962/api/Values';
  datapost = new DisplayData();
  constructor(private datatask: DataSupplyService, private http: HttpClient, private router: Router) { }

  ngOnInit() {}

  handleClick(data: DisplayData){
    this.datatask.addTask(data).subscribe(res =>{
      console.log(res);
      this.router.navigate(['/service']);
    },
    err => {
      console.log(err.message);
    },
    )
  }

}
