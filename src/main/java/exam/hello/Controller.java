package exam.hello;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "*")
@RestController
public class Controller {
	
	private ServiceLayer obj1;
	public Controller()
	{
	}
	
	@Autowired
	public void setObj1(ServiceLayer obj1) {
		System.out.println("Controller : service is wired with Controller ");
		this.obj1 = obj1;
	}


	
	@PostMapping("/slogin") //-----------Student Login
	public int getStudentLogin(@RequestBody Studentlogin slobj)
	{
		System.out.println(slobj);
		int x =obj1.getStudent(slobj);
		return x;	
	}
	
	@GetMapping("/stupro")  //------------Student Profile
	public studentprofile getstudentprofile(@RequestParam("rollno")long roll)
	{
		studentprofile x =obj1.getStuProfile(roll);
		return x;
	}
	
	@PutMapping("/chpw") //---------------Change Password
	//public Studentlogin StuChangePassword(@RequestBody Studentlogin passobj)
	public int StuChangePassword(@RequestBody Studentlogin passobj)
	{
		System.out.println("inside postmapping");
		Studentlogin x =obj1.stuChangePasswrd(passobj);
		return 1;
	}
	
	@PostMapping("/chpf") //----------------Chnage profile
	public int StuChangeStud(@RequestBody studentprofile passobj)
	{
		studentprofile x =obj1.StuChangeProf(passobj);
		return 1;
	}
	
	@GetMapping("/att") 
	public List<Attendance> getAttendance(@RequestParam("mon") int month,@RequestParam("id") String userid)
	{
		List<Attendance> x =obj1.getAttendance(month, userid);
		return x;
	}
	
	@PostMapping("/sndfeed")  //------------sending feedback
	public int sndFeedbckStu(@RequestBody feedback feedbckObj)
	{
		int x = obj1.sndFeedb(feedbckObj);
		return x;
	}
	
	@GetMapping("/feedbacks") 
	public List<feedback> getfeedbacks()
	{
		List<feedback> x =obj1.getFds();
		return x;
	}
	@GetMapping("/attpercent") 
	public double[]getPercentage(@RequestParam("id") String userid)
	{
		double[] x =obj1.totalPercent(userid);
		return x;
	}
	
	

}