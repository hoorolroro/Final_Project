package com.spring.masinsa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.spring.masinsa.dto.WishListDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Builder
@Table(name="wishlist")
public class WishList {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "wishlist_id")
	private Long id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="mask_id")
	private Mask mask;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="member_id")
	private Member member;
	
//	// Entity -> DTO 변환
//	public static WishListDTO entityToDTO(WishList wishList) {
//		WishListDTO wishListDTO = WishListDTO.builder()
//											.id(wishList.getId())
//											.maskId(wishList.getMask().)
//											
//		return wishListDTO;
//	}
	
	
}
