package com.spring.masinsa.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.spring.masinsa.dto.DashBoardDTO;

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
@Table(name="dashboard")
public class DashBoard {
	
	@Id
	private LocalDateTime date;
	
	@Column(name = "connection_count")
	private Long connectionCount;
	
	@Column(name = "login_count")
	private Long loginCount;
	
	// Entity -> DTO 변환
	public static DashBoardDTO entityToDTO(DashBoard dashBoard) {
		DashBoardDTO dashBoardDTO = DashBoardDTO.builder()
												.date(dashBoard.getDate())
												.connectionCount(dashBoard.getConnectionCount())
												.loginCount(dashBoard.getLoginCount())
												.build();
		return dashBoardDTO;
	}
}
