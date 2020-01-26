import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentLogin, StudentDetails, AttArray,feedback } from './Attendance';
declare const myFun:any;
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  
  private _url1:string ="/assets/data/studentlogin.json";
  private _url2:string ="/assets/data/studentdetails.json";
  private _url3:string ="/assets/data/attendanceArr.json";
  private _url4:string = "http://localhost:9900/feedbacks";

  constructor(private http:HttpClient) { }

  logincheckser(obj:StudentLogin):Observable<any>{
    
      return this.http.post("http://localhost:9900/slogin",obj);
  }

  getStudentDetails(roll:number):Observable<StudentDetails>
   {
        var x ="http://localhost:9900/stupro?rollno="+roll;
        return this.http.get<StudentDetails>(x);
   }

  getAttendance(sid:string, month: number):Observable<any>
   {
        return this.http.get<any>("http://localhost:9900/att?mon="+month+"&id="+sid);
   }
   getAttendancePercent():Observable<any>
   {
        return this.http.get<any>("http://localhost:9900/attpercent?id="+localStorage.getItem('student_id'));
   }

   getfeedback():Observable<feedback[]>
    {
        return this.http.get<feedback[]>("http://localhost:9900/feedbacks");
    }

   submitfeedback(i:feedback):Observable<any>
    {
        //return this.http.get<feedback[]>("http://localhost:9900/sndfeed");
        let x ="http://localhost:9900/sndfeed";
        return this.http.post(x,i);
    }

    changePassword(obj:StudentLogin):Observable<any>
    {
        let x ="http://localhost:9900/chpw";
        return this.http.put(x,obj);
    }

    editProfile(obj:StudentDetails):Observable<any>
    {
        let x ="http://localhost:9900/chpf";
        return this.http.post(x,obj);
    }

}
