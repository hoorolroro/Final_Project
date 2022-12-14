package com.spring.masinsa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.masinsa.dto.WishListDTO;
import com.spring.masinsa.entity.WishList;
import com.spring.masinsa.mapper.WishListMapper;
import com.spring.masinsa.repository.WishListRepository;

@Service
public class WishListServiceImpl implements WishListService {
	
	@Autowired
	WishListRepository wishListRepo;
	
	@Autowired
	WishListMapper wishListMapper;
	
	public WishListDTO addWishList(Long maskId, Long memberId) {
		Long wishListId = wishListMapper.addWishList(maskId, memberId);
		System.out.println(wishListId);
		WishList wishList = wishListRepo.findWishListById(wishListId);
		WishListDTO wishListDTO = WishList.entityToDTO(wishList);
		return wishListDTO;
	}
	
	public List<WishListDTO> getAllWishList(Long memberId) {
		List<WishList> wishList = wishListRepo.findWishListByMemberId(memberId);
		List<WishListDTO> wishListDTO = wishList.stream()
										  .map(wish -> WishList.entityToDTO(wish))
										  .collect(Collectors.toList());
		return wishListDTO;
	}
	
	public WishListDTO deleteWishList(Long wishListId) {
		WishList wishList = wishListRepo.findWishListById(wishListId);
		if(wishList != null) {
			wishList.deleteWishList();
			wishListRepo.save(wishList);
			WishListDTO wishListDTO = WishList.entityToDTO(wishList);
			return wishListDTO;
		}
		return null;
	}
	
}
