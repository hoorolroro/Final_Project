package com.spring.masinsa.service;

import java.time.LocalDateTime;

import com.spring.masinsa.dto.DashBoardDTO;

public interface DashBoardService {
	public DashBoardDTO getStatistics(LocalDateTime date);
}
