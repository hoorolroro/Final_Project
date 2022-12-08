package com.spring.masinsa.dto;

import com.spring.masinsa.entity.Mask;
import com.spring.masinsa.entity.SoldoutStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class MaskDTO {
	
	private Long id;
	private String name;
	private String size;
	private Long price;
	private String kf;
	private String shape;
	private String color;
	private Long unit;
	private String thumbnail;
	private Long click;
	private SoldoutStatus soldout; 
	private Float avg_score;
	
	// DTO -> Entity 변환
	public static Mask dtoToEntity(MaskDTO maskDTO) {
		Mask mask = Mask.builder()
						 .name(maskDTO.getName())
						 .size(maskDTO.getSize())
						 .price(maskDTO.getPrice())
						 .kf(maskDTO.getKf())
						 .shape(maskDTO.getShape())
						 .color(maskDTO.getColor())
						 .unit(maskDTO.getUnit())
						 .thumbnail(maskDTO.getThumbnail())
						 .click(maskDTO.getClick())
						 .soldout(maskDTO.getSoldout())
						 .avg_score(maskDTO.getAvg_score())
						 .build();
		return mask;
	}
	
}
