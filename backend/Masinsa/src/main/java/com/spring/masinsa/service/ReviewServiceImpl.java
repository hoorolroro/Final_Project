package com.spring.masinsa.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.spring.masinsa.dto.ReviewDTO;
import com.spring.masinsa.entity.Review;
import com.spring.masinsa.entity.ReviewType;
import com.spring.masinsa.repository.ReviewRepository;

@Service
public class ReviewServiceImpl implements ReviewService {

  @Autowired
  private ReviewRepository reviewRepository;
  //count by maskId where review_type = "naver"


  //maskId를 받아서 해당 마스크의 리뷰갯수를 조회(네이버 리뷰만) -> 분석정보를 만들지 말지 결정하기 위해
  @Override
  public int countByMaskId(Long maskId) { 
    return reviewRepository.countByMaskId(maskId);
  }

  @Override
  public List<ReviewDTO> findByMaskIdAndReviewType(Long maskId, Pageable pageable, String reviewType) {
    ReviewType reviewType2 = ReviewType.valueOf(reviewType); //ex) reviewType이 naver면 ReviewType.NAVER로 변환
    List<Review> reviewList = reviewRepository.findByMaskIdAndReviewType(maskId, reviewType2, pageable);
    List<ReviewDTO> reviewDTOList = new ArrayList<>();
    for (Review review : reviewList) {
      ReviewDTO reviewDTO = Review.entityToDTO(review);
      reviewDTOList.add(reviewDTO);
    }
    return reviewDTOList;
  }
}
