package com.spring.masinsa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.masinsa.entity.WishList;

public interface WishListRepository extends JpaRepository<WishList, Long> {
	public WishList findWishListByMemberId(Long memberId);
}
