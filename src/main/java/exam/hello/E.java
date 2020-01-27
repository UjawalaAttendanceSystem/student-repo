package exam.hello;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface E extends JpaRepository<Studentlogin, Long> {
	
//	@Modifying
//    @Query("UPDATE Studentlogin c SET c.password = :passwrd WHERE c.rollno = :stuid")
//    int updatePassword(@Param("username") long stuid, @Param("passwrd") String password);
//	@Query("UPDATE Company c SET c.address = :address WHERE c.id = :companyId")
//  int updateAddress(@Param("companyId") int companyId, @Param("address") String address);
}
