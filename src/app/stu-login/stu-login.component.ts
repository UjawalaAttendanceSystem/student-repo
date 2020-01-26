import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '../attservice.service';
import { StudentLogin } from '../Attendance';




@Component({
  selector: 'app-stu-login',
  templateUrl: './stu-login.component.html',
  styleUrls: ['./stu-login.component.css']
})
export class StuLoginComponent implements OnInit {

  public studentloginarr=[];
  public stuId:number;
  public pass:string;
  public stuObj:StudentLogin;
  public check:boolean;
  public flag:boolean;
  public data;
  public loginmsg:string;
  
   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
    // this.ser.logincheckser().subscribe(data =>this.studentloginarr=data);
    
    
   }
  constructor(private router:Router, private ser:AttendanceService) { 
       //this.stuObj = new StudentLogin(this.stuId,this.pass);
  }
  
 async logincheck(url:string)
   {
      this.stuObj = new StudentLogin({ Num: this.stuId, pass: this.pass });
      this.data = await this.ser.logincheckser(this.stuObj).toPromise();
          if(this.data == 1)
            {
              localStorage.setItem('student_id',String(this.stuId));
              this.router.navigate([url]).then( (e) => {
                if (e) 
                  console.log("Navigation is successful!");
                else 
                  console.log("Navigation has failed!");
                });
              }
          else if((this.data == 0))
                    this.loginmsg="Incorrect Password";
          else
                  this.loginmsg="Invalid Account";  
     }
}
