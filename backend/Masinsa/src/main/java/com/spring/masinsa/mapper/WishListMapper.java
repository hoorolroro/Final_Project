package com.spring.masinsa.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.spring.masinsa.dto.WishListDTO;
import com.spring.masinsa.entity.WishList;

@Repository
@Mapper
public interface WishListMapper {
	public void addWishList(WishListDTO ids);
	public List<WishList> getAllWishList(Long memberId, Long limit, Long offset);
}
