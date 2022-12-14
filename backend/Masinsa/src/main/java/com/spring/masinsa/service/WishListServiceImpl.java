package com.spring.masinsa.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
	
	@Override
	@Transactional
	public WishListDTO addWishList(WishListDTO ids) {
		wishListMapper.addWishList(ids);
		WishList wishList = wishListRepo.findWishListById(ids.getId());
		WishListDTO wishListDTO = WishList.entityToDTO(wishList);
		return wishListDTO;
		}
	
	@Override
	@Transactional
	public List<WishListDTO> getAllWishList(Long memberId, int page, int size) {
		Pageable pageable = PageRequest.of(page-1, size);
		Page<WishList> wishList = wishListRepo.findWishListByMemberId(memberId, pageable);
		List<WishListDTO> wishListDTO = wishList.getContent().stream()
										  .map(wish -> WishList.entityToDTO(wish))
										  .collect(Collectors.toList());
		return wishListDTO;
	}
	
	@Override
	@Transactional
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
