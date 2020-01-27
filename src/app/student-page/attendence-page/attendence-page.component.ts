import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-attendence-page',
  templateUrl: './attendence-page.component.html',
  styleUrls: ['./attendence-page.component.css']
})
export class AttendencePageComponent implements OnInit {

  constructor(public x:MatTabsModule) { }

  ngOnInit() {
  }

}
