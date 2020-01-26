package exam.hello;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity(name = "attendance")
public class Attendance {

	@Id
	private int sno;
	private long Studentid;
	private String Status;
	private String firstpunch;
	private String secondpunch;
	private String thirdpunch;
	private String fourthpunch;
	private Date date;
	
	
	public long getStudentid() {
		return Studentid;
	}

	public void setStudentid(long studentid) {
		Studentid = studentid;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	@Override
	public String toString() {
		return "Attendance [sno=" + sno + ", Studentid=" + Studentid + ", Status=" + Status + ", firstpunch="
				+ firstpunch + ", secondpunch=" + secondpunch + ", thirdpunch=" + thirdpunch + ", fourthpunch="
				+ fourthpunch + ", date=" + date + "]";
	}

	public Attendance() {
		// TODO Auto-generated constructor stub
		
	}

	public int getSno() {
		return sno;
	}

	public void setSno(int sno) {
		this.sno = sno;
	}


	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getFirstpunch() {
		return firstpunch;
	}

	public void setFirstpunch(String firstpunch) {
		this.firstpunch = firstpunch;
	}

	public String getSecondpunch() {
		return secondpunch;
	}

	public void setSecondpunch(String secondpunch) {
		this.secondpunch = secondpunch;
	}

	public String getThirdpunch() {
		return thirdpunch;
	}

	public void setThirdpunch(String thirdpunch) {
		this.thirdpunch = thirdpunch;
	}

	public String getFourthpunch() {
		return fourthpunch;
	}

	public void setFourthpunch(String fourthpunch) {
		this.fourthpunch = fourthpunch;
	}

}
