package com.spring.masinsa.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.spring.masinsa.dto.WishListDTO;

@Repository
@Mapper
public interface WishListMapper {
	public void addWishList(WishListDTO ids);
}
