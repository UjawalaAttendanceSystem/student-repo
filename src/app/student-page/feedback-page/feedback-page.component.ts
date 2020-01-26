import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/attservice.service';
import { feedback } from 'src/app/Attendance';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit {

  public myId;
  public myName;
  public msg;
  public data;
  public ret:number;
  public obj:feedback;
  constructor(private ser:AttendanceService) { }

  ngOnInit() {
      this.myId = localStorage.getItem('student_id');
      this.myName = localStorage.getItem('stu_name');
  }

  async submitfun() {
      this.obj = new feedback({ Num: this.myId, pass: this.data });
      this.ret = await  this.ser.submitfeedback(this.obj).toPromise();
      if (this.ret == 1)
      {
          this.msg="Feedback submitted !!";
      }
  }
}
