package com.spring.masinsa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
	
	private String blocking_index;
	
	private String shape;
	
	private String color;
	
	private Long unit;
	
	@Column(name = "thumbnail_image_url")
	private String thumbnail;
	
	private Long click_num;
	
	private String soldout_status; // enum으로 하려면 어찌해야 될까...
	
	private Float avg_score;
	
	
}
