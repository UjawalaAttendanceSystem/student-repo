import { Component, OnInit } from '@angular/core';
import { StudentDetails } from 'src/app/Attendance';
import { AttendanceService } from 'src/app/attservice.service'

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  public myId;
  public rollno;
  public name;
  public dob;
  public gender;
  public phone;
  public bgroup;
  public msg:string;
  public data;
  public obj:StudentDetails;

  constructor(public ser:AttendanceService) { }

  ngOnInit() {
    this.myId = localStorage.getItem("student_id");
    this.rollno = this.myId
  }

  async subfun()
   {
       this.obj = new StudentDetails( {r:this.rollno,n:this.name,d:this.dob,g:this.gender,p:this.phone,b:this.bgroup})
       this.data = await  this.ser.editProfile(this.obj).toPromise();
       if(this.data == 1)
        {
          this.msg = "Changes made SuccessFully !!! Press Back to Profile Page"
        }
   }
}
