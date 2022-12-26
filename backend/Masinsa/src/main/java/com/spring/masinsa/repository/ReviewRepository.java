package com.spring.masinsa.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.spring.masinsa.entity.Review;
import com.spring.masinsa.entity.ReviewType;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
  public int countByMaskIdAndReviewType(Long maskId, ReviewType reviewType);
  public List<Review> findByMaskIdAndReviewType(Long maskId, 
		  ReviewType reviewType, Pageable pageable);
  public Review findReviewById(Long reviewId);
  public Review findReviewByMemberIdAndMaskId(Long memberId, Long maskId);
  
}
