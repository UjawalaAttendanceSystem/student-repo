package exam.hello;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Studentlogin {
	@Id
	private long rollno;
	private String password;
		public Studentlogin() {
		
	}

	public long getRollno() {
		return rollno;
	}

	public void setRollno(long rollno) {
		this.rollno = rollno;
	}

	

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	

	@Override
	public String toString() {
		return "Studetnlogin [rollno=" + rollno + ", password=" + password + " ]";
	}
	
	

}
