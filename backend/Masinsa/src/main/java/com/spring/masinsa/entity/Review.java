package com.spring.masinsa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.spring.masinsa.dto.ReviewDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Builder
public class Review {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "review_id")
	private Long id;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="mask_id")
	private Mask mask;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="member_id")
	private Member member;
	
	private String score;
	
	private String option;
	
	private String content;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "review_type")
	private ReviewType reviewType;
	
	public static ReviewDTO entityToDTO(Review review) {
		ReviewDTO reviewDTO = ReviewDTO.builder()
				.id(review.getId())
				.memberId(review.getMember().getId())
				.memberNickname(review.getMember().getNickname())
				.maskId(review.getMask().getId())
				.score(review.getScore())
				.option(review.getOption())
				.content(review.getContent())
				.reviewType(review.getReviewType())
				.build();
		return reviewDTO;
	}
}
