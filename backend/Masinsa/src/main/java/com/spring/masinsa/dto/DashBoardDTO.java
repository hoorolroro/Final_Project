package com.spring.masinsa.dto;

import java.time.LocalDateTime;

import com.spring.masinsa.entity.DashBoard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class DashBoardDTO {
	
	private LocalDateTime date;
	private Long connectionCount;
	private Long loginCount;
	
	// DTO -> Entity 변환
	public static DashBoard dtoToEntity(DashBoardDTO dashBoardDTO) {
		DashBoard dashBoard = DashBoard.builder()
									   .connectionCount(dashBoardDTO.getConnectionCount())
									   .loginCount(dashBoardDTO.getLoginCount())
									   .build();
		return dashBoard;
	}
	
}
