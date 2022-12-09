package com.spring.masinsa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

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
public class AnalysisInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "analysis_id")
	private Long id;
	
	@Column(name = "relative_size")
	private String relatvieSize;
	
	private String fit;
	
	@Column(name = "breath_ability")
	private String breathAbility;
	
	private String delivery;
	
	@OneToOne
	@JoinColumn(name="mask_id")
	private Mask mask;
	
}
