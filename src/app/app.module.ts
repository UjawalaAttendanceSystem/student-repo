import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatTabsModule} from '@angular/material/tabs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule, WavesModule ,MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StuLoginComponent } from './stu-login/stu-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilePageComponent } from './student-page/profile-page/profile-page.component';
import { AttendencePageComponent } from './student-page/attendence-page/attendence-page.component';
import { FeedbackPageComponent } from './student-page/feedback-page/feedback-page.component';

import { TodaysAttendencePageComponent } from './todays-attendence-page/todays-attendence-page.component';
import { MonthlyAttendencePageComponent } from './monthly-attendence-page/monthly-attendence-page.component';
import { AnalysisAttendencePageComponent } from './analysis-attendence-page/analysis-attendence-page.component';
import { GraphAttendencePageComponent } from './graph-attendence-page/graph-attendence-page.component';
import { AttendanceService } from './attservice.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import { EditprofileComponent } from './student-page/editprofile/editprofile.component';
import { ChangepasswordComponent } from './student-page/changepassword/changepassword.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { MessagepageComponent } from './adminpage/messagepage/messagepage.component';
import { AdminwrkpageComponent } from './adminpage/adminwrkpage/adminwrkpage.component';

@NgModule({
  declarations: [
    AppComponent,
    StuLoginComponent,
    AdminLoginComponent,
    HomePageComponent,
    StudentPageComponent,
    ProfilePageComponent,
    AttendencePageComponent,
    FeedbackPageComponent,
    TodaysAttendencePageComponent,
    MonthlyAttendencePageComponent,
    AnalysisAttendencePageComponent,
    GraphAttendencePageComponent,
    EditprofileComponent,
    ChangepasswordComponent,
    AdminpageComponent,
    MessagepageComponent,
    AdminwrkpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    ChartsModule,
    CarouselModule, WavesModule ,MDBBootstrapModule
  ],
  providers: [
    AttendanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routeComponent = [ ];
