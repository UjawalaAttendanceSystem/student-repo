import { Component, OnInit } from '@angular/core';
import { StudentDetails } from 'src/app/Attendance';
import { AttendanceService } from 'src/app/attservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  public id:number;
  public name:string;
  public phno:number;
  public gen:string;
  public blood:string;
  public dob:string;
  public flag:boolean;
  public data:StudentDetails;
  public myId;
  public studetailobj:StudentDetails;
  
  
  constructor(private ser:AttendanceService,private router:Router) {
        this.myId=localStorage.getItem('student_id');

      }
   async ngOnInit() {
    this.data = await  this.ser.getStudentDetails(this.myId).toPromise();
       //console.log(1,this.data);
             this.id=this.data.rollno;
             this.name=this.data.name;
             this.gen=this.data.gender;
             this.blood=this.data.bgroup;
             this.dob=this.data.dob;
             this.phno=this.data.phone;
             let idname = 'stu_name';
             localStorage.setItem(idname, String(this.name));  
       }
       
   navigateTo(url:string):void
       {
         this.router.navigate([url]).then( (e) => {
           if (e) {
             console.log("Navigation is successful!");
           } else {
             console.log("Navigation has failed!");
           }
           });
       }
      
}

