package com.spring.masinsa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.masinsa.entity.WishList;

public interface WishListRepository extends JpaRepository<WishList, Long> {
	public List<WishList> findWishListByMemberId(Long memberId);
	public WishList findWishListById(Long WishListId);
	public WishList findWishListByMaskIdAndMemberId(Long maskId, Long memberId);
}
