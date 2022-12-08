package com.spring.masinsa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.spring.masinsa.dto.MaskDTO;

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
public class Mask {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "mask_id")
	private Long id;
	
	@Column(name = "mask_name")
	private String name;
	
	private String size;
	
	private Long price;
	
	@Column(name = "blocking_index")
	private String kf;
	
	private String shape;
	
	private String color;
	
	private Long unit;
	
	@Column(name = "thumbnail_image_url")
	private String thumbnail;
	
	@Column(name = "click_num")
	private Long click;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "soldout_status")
	private SoldoutStatus soldout; 
	
	private Float avg_score;
	
	// Entity -> DTO 변환
	public MaskDTO entityToDTO(Mask mask) {
		MaskDTO maskDTO = MaskDTO.builder()
								 .name(mask.getName())
								 .size(mask.getSize())
								 .price(mask.getPrice())
								 .kf(mask.getKf())
								 .shape(mask.getShape())
								 .color(mask.getColor())
								 .unit(mask.getUnit())
								 .thumbnail(mask.getThumbnail())
								 .click(mask.getClick())
								 .soldout(mask.getSoldout())
								 .avg_score(mask.getAvg_score())
								 .build();
		return maskDTO;
	}
	
}
