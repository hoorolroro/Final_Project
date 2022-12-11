package com.spring.masinsa.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.spring.masinsa.entity.Review;
import com.spring.masinsa.entity.ReviewType;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
  //maskId를 통해 해당 review의 갯수를 count해서 리턴 -> 분석정보를 만들지 말지 결정하기 위해
  @Query(value = "select count(*) from review where mask_id = ?1 and review_type = 'naver'", nativeQuery = true)
  public int countByMaskId(Long maskId);

// find by maskId and review type
public List<Review> findByMaskIdAndReviewType(Long maskId, ReviewType reviewType, Pageable pageable);
// public List<Review> findByMaskId(Long maskId, Pageable pageable); //Slice : 페이징 처리를 위한 객체

  
}
