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
import com.spring.masinsa.entity.Deletion;
import com.spring.masinsa.entity.WishList;
import com.spring.masinsa.mapper.WishListMapper;
import com.spring.masinsa.repository.WishListRepository;
import com.spring.masinsa.response.Message;
import com.spring.masinsa.response.Status;

@Service
public class WishListServiceImpl implements WishListService {
	
	@Autowired
	WishListRepository wishListRepo;
	
	@Autowired
	WishListMapper wishListMapper;
	
	@Override
	@Transactional
	public WishListDTO addWishList(WishListDTO ids) {
		Boolean insertResult = wishListMapper.addWishList(ids);
		if (insertResult) {
			WishList wishList = wishListRepo.findWishListById(ids.getId());
			WishListDTO wishListDTO = WishList.entityToDTO(wishList);
			return wishListDTO;
		}
			return null;
		}
	
	@Override
	@Transactional
	public List<WishListDTO> getAllWishList(Long memberId, int page, int size) {
		Pageable pageable = PageRequest.of(page-1, size);
		Page<WishList> wishList = wishListRepo.findWishListByMemberIdAndDeletion(memberId, pageable, Deletion.N);
		List<WishListDTO> wishListDTO = wishList.getContent().stream()
										  .map(wish -> WishList.entityToDTO(wish))
										  .collect(Collectors.toList());
		return wishListDTO;
	}
	
//	@Transactional // JSON으로 수정 필요
//	public List<HashMap> getAllWishList2(Long memberId, Long page, Long size) {
//		Long limit = null;
//		Long offset = null;
//		if (size != null) {
//			limit = size;
//		}
//		if (page != null && size != null) {
//			offset = (page - 1) * size;
//		}
//		List<HashMap> wishList = wishListMapper.getAllWishList2(memberId, limit, offset);
//		JSONArray jsonArray = new JSONArray();
//		for (HashMap hashMap : wishList) {
//			jsonArray.add(getJson)
//		}
//		
//		return wishList;
//	}
	
	@Override
	@Transactional
	public Message setUpWishList(Long memberId, Long maskId) {
		WishList wishList = wishListRepo.findWishListByMemberIdAndMaskId(memberId, maskId);
		if(wishList != null) {
			if(wishList.getDeletion() == Deletion.N) {
				wishList.deleteWishList();
				wishListRepo.save(wishList);
				WishListDTO wishListDTO = WishList.entityToDTO(wishList);
				return new Message(Status.OK, "찜 삭제 완료", wishListDTO);
			}
			else if(wishList.getDeletion() == Deletion.Y) {
				wishList.restoreWishList();
				wishListRepo.save(wishList);
				WishListDTO wishListDTO = WishList.entityToDTO(wishList);
				return new Message(Status.OK, "찜 복원 완료", wishListDTO);
			}
		}
		return null;
	}
}
