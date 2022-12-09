package com.spring.masinsa.dto;

import com.spring.masinsa.entity.Review;
import com.spring.masinsa.entity.ReviewType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ReviewDTO {
	
	private Long id;
	private Long memberId;
	private Long maskId;
	private String score;
	private String option;
	private String content;
	private ReviewType reviewType;
	
	// DTO -> Entity 변환
	public static Review dtoToEntity(ReviewDTO reviewDTO) {
		Review review = Review.builder()
							  .score(reviewDTO.getScore())
							  .option(reviewDTO.getOption())
							  .content(reviewDTO.getContent())
							  .reviewType(reviewDTO.getReviewType())
							  .build();
		return review;
	}
}
