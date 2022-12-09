package com.spring.masinsa.dto;

import com.spring.masinsa.entity.AnalysisInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class AnalysisInfoDTO {
	
	private Long id;
	private String relatvieSize;
	private String fit;
	private String breathAbility;
	private String delivery;
	
	// DTO -> Entity 변환
	public static AnalysisInfo dtoToEntity(AnalysisInfoDTO analysisInfoDTO) {
		AnalysisInfo analysisInfo = AnalysisInfo.builder()
												.relatvieSize(analysisInfoDTO.getRelatvieSize())
												.fit(analysisInfoDTO.getFit())
												.breathAbility(analysisInfoDTO.getBreathAbility())
												.delivery(analysisInfoDTO.getDelivery())
												.build();
		return analysisInfo;
	}
	
}
