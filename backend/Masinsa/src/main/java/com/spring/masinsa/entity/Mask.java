package com.spring.masinsa.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.DynamicUpdate;

import com.spring.masinsa.dto.MaskDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@DynamicUpdate
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
	
	@Column(name = "avg_score")
	private Float avgScore;
	
	@OneToMany(mappedBy = "mask")
	private List<Image> images = new ArrayList<Image>();
	
	@OneToMany(mappedBy = "mask")
	private List<WishList> wishlist = new ArrayList<WishList>();
	
	@OneToMany(mappedBy = "mask")
	private List<Review> reviews = new ArrayList<Review>();
	
	// Entity -> DTO 변환
	public static MaskDTO entityToDTO(Mask mask) {
		MaskDTO maskDTO = MaskDTO.builder()
								 .id(mask.getId())
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
								 .avgScore(mask.getAvgScore())
								 .build();
		return maskDTO;
	}
	
	public void updateClick() {
		this.click = click + 1;
	}
	
	public void updateSoldout(SoldoutStatus soldout) {
		this.soldout = soldout; // @DynamicUpdate 적용으로 나머지 컬럼의 데이터는 보존되는 동시에 soldout만 변경이 가능
	}
	
}
