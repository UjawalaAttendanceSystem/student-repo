package exam.hello;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "feedback")
public class feedback {

    @Id
	private int uid;
	private long rollno;
	private String msg;
	private feedback() {
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "feedback [uid=" + uid + ", rollno=" + rollno + ", msg=" + msg + "]";
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public long getRollno() {
		return rollno;
	}
	public void setRollno(long rollno) {
		this.rollno = rollno;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}

}
