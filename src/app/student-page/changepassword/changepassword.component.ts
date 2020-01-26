import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/attservice.service'
import { StudentLogin } from 'src/app/Attendance'; 

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  public myId;
  public password1:string;
  public password2:string;
  public data;
  public msg:string;
  public obj:StudentLogin;

  constructor(public ser:AttendanceService) {
     
   }

  ngOnInit() {
    var id = localStorage.getItem('student_id');
     this.myId = id; 
  }

  async submitfun()
   {
      this.obj = new StudentLogin({ Num: this.myId, pass: this.password2 });
      this.data = await  this.ser.changePassword(this.obj).toPromise();
      if(this.data == 1)
        {
          this.msg = "Password Changed SuccessFully !!! Press Back to Profile Page"
          }
   }

}
