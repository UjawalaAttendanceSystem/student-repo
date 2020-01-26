export class StudentLogin
{
   rollno:number;
   password:string;
   constructor({ Num, pass }: { Num: number; pass: string; })
    {
      this.rollno = Num;  
      this.password = pass;
    }
}

export class StudentDetails
{
   rollno:number;
   name:string;
   dob:string;
   gender:string;
   phone:number;
   bgroup:string;

   constructor ({r,n,d,g,p,b})
   {
      this.rollno = r;
      this.name = n;
      this.dob = d;
      this.gender = g;
      this.phone = p;
      this.bgroup = b;
   }
}

export class AttArray
{
   id:number;
   attArr:AttDetails[];
}

export class AttDetails
{
   date:string;
   First_Punch:string;
   Second_Punch:string;
   Third_Punch:string;
   Fourth_Punch:string; 
   Present_Absent:string;                            
}

export class feedback
{
   uid:number;
   rollno:number;
   msg:string;
   constructor({ Num, pass }: { Num: number; pass: string; })
    {
      this.rollno = Num;  
      this.msg = pass;
    }
}