package com.spring.masinsa.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.spring.masinsa.dto.ReviewDTO;

public interface ReviewService {

	//count by maskId where review_type = "naver"
	public int countByMaskIdAndReviewType(Long maskId, String reviewType);

	List<ReviewDTO> findByMaskIdAndReviewType(Long maskId, Pageable pageable, String reviewType);

}
