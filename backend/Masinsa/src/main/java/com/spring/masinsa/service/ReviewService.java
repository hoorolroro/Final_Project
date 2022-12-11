package com.spring.masinsa.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.spring.masinsa.dto.ReviewDTO;

public interface ReviewService {

	int countByMaskId(Long maskId);

	List<ReviewDTO> findByMaskIdAndReviewType(Long maskId, Pageable pageable, String reviewType);

}
