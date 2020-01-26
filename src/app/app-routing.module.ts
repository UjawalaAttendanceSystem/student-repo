import { NgModule, ContentChild, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StuLoginComponent } from './stu-login/stu-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { ProfilePageComponent } from './student-page/profile-page/profile-page.component';
import { AttendencePageComponent } from './student-page/attendence-page/attendence-page.component';
import { FeedbackPageComponent } from './student-page/feedback-page/feedback-page.component';
import { EditprofileComponent } from './student-page/editprofile/editprofile.component';
import { ChangepasswordComponent } from './student-page/changepassword/changepassword.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'studentlogin', component: StuLoginComponent},
  {path: 'adminlogin', component: AdminLoginComponent},
  {
    path: 'student',
    component: StudentPageComponent,
     children:[
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
       {path: 'profile', component: ProfilePageComponent},
       {path: 'attendence', component: AttendencePageComponent},
       {path: 'feedback', component: FeedbackPageComponent},
       {path: 'editprofile', component: EditprofileComponent},
       {path: 'changepw', component: ChangepasswordComponent}]
  },
  { path:'adminpage', component: AdminpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponent = [AppComponent,StuLoginComponent,AdminLoginComponent,HomePageComponent];