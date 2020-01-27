package exam.hello;
import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import exam.hello.studentprofile;

	@Repository
	public interface F extends JpaRepository<studentprofile, Long> {
		 
		@Query(value="SELECT * FROM studentprofile WHERE gender=:gen", nativeQuery=true)
		List<studentprofile> findByGender(String gen);

//		@Query("SELECT u FROM studentprofile u WHERE u.bgroup =?1 AND u.gender = ?2")
//		List<studentprofile> findByGenderAndBgroup(String bg, String gen);
	
		
	   //studentprofile is entity class, Integer is primary key
	   //hibernate will never work until you use concept called Primary key.
		
	  //@Query("SELECT u FROM studentprofile u WHERE u.imeino = ?")
	  //Collection<studentprofile> getstuDetails(int passRollNo);
		
		//@Query("SELECT u FROM studentprofile u WHERE u.rollno = ?1")
		//studentprofile getStuProfile(Integer passrollno);
		
		//@Query("SELECT u FROM studentprofile WHERE u.rollno = :roll")
		//studentprofile getStuProfile(
		// @Param("rollno") Integer roll;
		//@Query("UPDATE Studentlogin c SET c.password = :passwrd WHERE c.rollno = :stuid")
//	    int updatePassword(@Param("username") long stuid, @Param("passwrd") String password);
	}
