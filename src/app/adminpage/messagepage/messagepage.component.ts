import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/attservice.service';

@Component({
  selector: 'app-messagepage',
  templateUrl: './messagepage.component.html',
  styleUrls: ['./messagepage.component.css']
})
export class MessagepageComponent implements OnInit {

  public feedbacklist=[];
  constructor(public ser:AttendanceService) { }

   async ngOnInit() {
     this.feedbacklist = await this.ser.getfeedback().toPromise();
     //console.log(this.feedbacklist);
   }

  //  ngOnInit() {
  //      this.ser.getfeedback().subscribe(data =>this.feedbacklist=data);
  //      console.log(this.feedbacklist);
  //    }

}
