package exam.hello;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendanceRepo extends JpaRepository<Attendance, Integer> {
	
	@Query(value="SELECT * FROM Attendance WHERE month(date)=:month AND studentid=:userid", nativeQuery=true)
	List<Attendance> findByMonth(int month, String userid);
// select * from attendance where studentid=190850120001 and month(date)=12;

//	SELECT month(date) AS months, COUNT(CASE WHEN status= "present" OR status="absent" THEN 1 ELSE NULL END) AS totaldays, COUNT(CASE WHEN status= "present" THEN 1 ELSE NULL END) AS present FROM Attendance WHERE studentid=:userid GROUP BY month(date);
	
	@Query(value="SELECT COUNT(CASE WHEN status= \"present\" OR status=\"absent\" THEN 1 ELSE NULL END) AS totaldays, COUNT(CASE WHEN status= \"present\" THEN 1 ELSE NULL END) AS present FROM Attendance WHERE studentid=:userid GROUP BY month(date)", nativeQuery=true)
	int[][] findByPercent(String userid);
}
