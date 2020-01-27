import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attservice.service';
import { MatSelectModule } from '@angular/material/select';
import * as $ from "jquery";
import { AttArray } from '../Attendance';

export interface Months {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-monthly-attendence-page',
  templateUrl: './monthly-attendence-page.component.html',
  styleUrls: ['./monthly-attendence-page.component.css']
})
export class MonthlyAttendencePageComponent implements OnInit {

  public attarray=[];
  public myId;
  public smon=8;
  public data;
  public Month: Months[] = [
    {value: 1, viewValue: 'Jan'},
    {value: 2, viewValue: 'Feb'},
    {value: 3, viewValue: 'Mar'},
    {value: 4, viewValue: 'Apr'},
    {value: 5, viewValue: 'May'},
    {value: 6, viewValue: 'June'},
    {value: 7, viewValue: 'July'},
    {value: 8, viewValue: 'Aug'},
    {value: 9, viewValue: 'Sept'},
    {value: 10, viewValue: 'Oct'},
    {value: 11, viewValue: 'Nov'},
    {value: 12, viewValue: 'Dec'}
  ];
  constructor(private sel:MatSelectModule,private ser:AttendanceService) {
    this.myId=localStorage.getItem('student_id');
   }

  async ngOnInit() {
    this.data = await  this.ser.getAttendance(this.myId,this.smon).toPromise();
      //console.log(1,data);
           //this.attarray=data;  
     console.log(this.data);
        
  }
  
 async getAttendance()
  {
     this.data = await  this.ser.getAttendance(this.myId,this.smon).toPromise();
  }

}
