package com.spring.masinsa.service;

import java.util.List;

import com.spring.masinsa.dto.ReviewDTO;

public interface ReviewService {

	int countByMaskId(Long maskId);

	List<ReviewDTO> findByMaskId(Long maskId);

}
