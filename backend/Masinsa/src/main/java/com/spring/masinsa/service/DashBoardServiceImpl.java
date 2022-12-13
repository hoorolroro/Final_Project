package com.spring.masinsa.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.masinsa.dto.DashBoardDTO;
import com.spring.masinsa.entity.DashBoard;
import com.spring.masinsa.repository.DashBoardRepository;

@Service
public class DashBoardServiceImpl implements DashBoardService {
	
	@Autowired
	DashBoardRepository DashBoardRepo;
	
	@Override
	public DashBoardDTO getStatistics(LocalDateTime date) {
		DashBoard dashBoard = DashBoardRepo.findDashBoardByDate(date);
		DashBoardDTO dashBoardDTO = DashBoard.entityToDTO(dashBoard);
		return dashBoardDTO;
	}
	
	
}
