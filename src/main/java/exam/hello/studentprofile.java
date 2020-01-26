package exam.hello;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class studentprofile {
	
	public studentprofile() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	private long rollno;
	private String name;
	private String dob;
	private String gender;
	private long phone;
	private String bgroup;
	public long getRollno() {
		return rollno;
	}
	@Override
	public String toString() {
		return "studentprofile [rollno=" + rollno + ", name=" + name + ", dob=" + dob + ", gender=" + gender
				+ ", phone=" + phone + ", bgroup=" + bgroup + "]";
	}
	public void setRollno(long rollno) {
		this.rollno = rollno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getBgroup() {
		return bgroup;
	}
	public void setBgroup(String bgroup) {
		this.bgroup = bgroup;
	}
}
