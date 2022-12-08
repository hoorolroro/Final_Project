package com.spring.masinsa.dto;

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
	private String blocking_index;
	private String shape;
	private String color;
	private Long unit;
	private String thumbnail;
	private Long click_num;
	private String soldout_status; 
	private Float avg_score;
	
	
}
