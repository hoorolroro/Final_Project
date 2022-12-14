package com.spring.masinsa.service;

import java.util.List;

import com.spring.masinsa.dto.WishListDTO;

public interface WishListService {
	public WishListDTO addWishList(WishListDTO ids);
	public List<WishListDTO> getAllWishList(Long memberId);
	public WishListDTO deleteWishList(Long wishListId);
}
