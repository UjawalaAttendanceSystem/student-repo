import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attservice.service';

@Component({
  selector: 'app-graph-attendence-page',
  templateUrl: './graph-attendence-page.component.html',
  styleUrls: ['./graph-attendence-page.component.css']
})
export class GraphAttendencePageComponent implements OnInit {

 data;
  aug=0;
  sep=0;
  oct=0;
  nov=0;
  dec=0;
  public bardataset=[{data:[0,0,0,0,0],label:localStorage.getItem('student_id')}];
  public barlabels=["Aug","Sep","Oct","Nov","Dec"];
  public baroptions ={
    title:{
      text:"Bar Chart",
      display:true
    },
    scales:{
      yAxes:[{
        ticks:{
          endAtHundred:true,
          beginAtZero:true
        }
      }]
    },
    scaleShowVerticalLines:false,
    responsive:true
  };
  public barlegend=true;
  public barcharttype='bar';

  constructor(private ser:AttendanceService) { }

  async ngOnInit() {
    this.data = await  this.ser.getAttendancePercent().toPromise();
       console.log(1,this.data);
       this.bardataset[0].data=this.data;
       }
      

}

