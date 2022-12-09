package com.spring.masinsa.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class WishListDTO {
	
	private Long id;
	private Long maskId;
	private Long memberId;
}
