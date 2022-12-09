package com.spring.masinsa.dto;

import com.spring.masinsa.entity.Mask;
import com.spring.masinsa.entity.Member;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class WishListDTO {
	
	private Long id;
	private Mask maskId;
	private Member memberId;
}
