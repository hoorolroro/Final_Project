package com.spring.masinsa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.spring.masinsa.entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
  //maskId를 통해 해당 review의 갯수를 count해서 리턴 -> 분석정보를 만들지 말지 결정하기 위해
  @Query(value = "select count(*) from review where mask_id = ?1 and review_type = 'naver'", nativeQuery = true)
  public int countByMaskId(Long maskId);

  @Query(value = "select * from review where mask_id = ?1", nativeQuery = true)
public List<Review> findByMaskId(Long maskId);
  
}
