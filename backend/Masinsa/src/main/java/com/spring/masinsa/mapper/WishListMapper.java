package com.spring.masinsa.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface WishListMapper {
	public Long addWishList(Long maskId, Long memberId);
}
