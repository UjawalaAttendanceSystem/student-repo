package exam.hello;

import javax.persistence.Entity;


public class Monthlypercent {
	private String months;
	private int totaldays;
	private int present;
	public Monthlypercent(String months, int totaldays, int present) {
		
		this.months = months;
		this.totaldays = totaldays;
		this.present = present;
	}
	public String getMonths() {
		return months;
	}
	public void setMonths(String months) {
		this.months = months;
	}
	public int getTotaldays() {
		return totaldays;
	}
	public void setTotaldays(int totaldays) {
		this.totaldays = totaldays;
	}
	public int getPresent() {
		return present;
	}
	public void setPresent(int present) {
		this.present = present;
	}
	
	
	

}
