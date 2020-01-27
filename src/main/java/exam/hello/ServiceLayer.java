package exam.hello;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exam.hello.studentprofile;

@Service
public class ServiceLayer {
	
	private E obje;
	private F objf;
	private feedbackRepo objFeedRepo;
	private AttendanceRepo objAttRepo;
		
	@Autowired
	public void setObje(F objf) {
		System.out.println("Service : repository StudentlProfile DAO  wired to service ");
		this.objf = objf;
	}
	
	@Autowired
	public void setObje(E obje) {
		System.out.println("Service : repository StudentlLogin DAO  wired to service ");
		this.obje = obje;
	}
	
	@Autowired
	public void setObjFeedRepo(feedbackRepo objfb) {
		System.out.println("Service : repository Attendence DAO  wired to service ");
		this.objFeedRepo = objfb;
	}
	
	@Autowired
	public void setObjAttRepo(AttendanceRepo objAtt) {
		System.out.println("Service : repository Feedback DAO  wired to service ");
		this.objAttRepo = objAtt;
	}
	
	
	public ServiceLayer()
	{	
		//System.out.println("B object created");
	}

		public int getStudent(Studentlogin stulog) {
		// TODO Auto-generated method stub
	
		 long y =stulog.getRollno();
		 Optional<Studentlogin> x = obje.findById(y);
		  Studentlogin stu =null;
		  if(x.isPresent())
			{
				 stu = x.get();
				 if(stu.getPassword().equals(stulog.getPassword()))
				 {
					 return 1;
				 }
				 else
					 return 0;//get the mobile object			
			}
		 return -1;
	}

	public studentprofile getStuProfile(long y) {
		// TODO Auto-generated method stub
		  Optional<studentprofile> x = objf.findById(y);
		  studentprofile stu =null;
		  if(x.isPresent())
			{
				 stu = x.get();  //get the mobile object			
			}
		 return stu;
	}

	public Studentlogin stuChangePasswrd(Studentlogin chobj) {
		
		return obje.save(chobj);
	}

	public studentprofile StuChangeProf(studentprofile passobj) {
		// TODO Auto-generated method stub
		return objf.save(passobj);
	}

	public List<Attendance> getAttendance(int month, String userid) {
		// TODO Auto-generated method stub
		System.out.println(month);
		List<Attendance> x=objAttRepo.findByMonth(month,userid);
		return x;	
	}

	public int sndFeedb(feedback feedbckObj) {
		 objFeedRepo.save(feedbckObj);
		return 1;
	}

	public List<feedback> getFds() {
		List<feedback> s = objFeedRepo.findAll();
		return s;
	}

	public double[] totalPercent(String userid) {
		// TODO Auto-generated method stub
		int[] presentdays=new int[5];
		int[] totaldays=new int[5];
		double[] percentage=new double[5];
		int[][] x=objAttRepo.findByPercent(userid);
		
		for(int i=0;i<x.length;i++) {
			System.out.println("i="+i);
				totaldays[i]=x[i][0];
				presentdays[i]=x[i][1];
				percentage[i]= ((double)presentdays[i]/(double)totaldays[i])*100.0;

				System.out.println(  " t["+i+"]--"+ percentage[i]);
			
		}
		
		return percentage;
		
	}

//	public List<AttendanceRepo> getAtten(String gen) {
//		// TODO Auto-generated method stub
//		System.out.println(gen);
//		List<studentprofile> x=objf.findByGenderAndBgroup(gen);
//		return x;	
//	}
	
}