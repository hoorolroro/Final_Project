package com.spring.masinsa.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.spring.masinsa.dto.ReviewDTO;

@Repository
@Mapper
public interface ReviewMapper {
	public void addMemberReview(ReviewDTO reviewDTO);
}
