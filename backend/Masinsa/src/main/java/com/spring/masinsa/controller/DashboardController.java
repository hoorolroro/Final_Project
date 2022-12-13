package com.spring.masinsa.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.DashBoardDTO;
import com.spring.masinsa.service.DashBoardServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin({"*"})
@RestController
public class DashboardController {
	
	@Autowired
	DashBoardServiceImpl DashBoardService;
	
	@ApiOperation(value = "23번 - date를 통해 접속 통계 조회")
	@GetMapping("/dashboard")
	public ResponseEntity<DashBoardDTO> getStatistics(@RequestParam LocalDateTime date) {
		DashBoardDTO dashBoardDTO = DashBoardService.getStatistics(date);
		return new ResponseEntity<DashBoardDTO>(dashBoardDTO, HttpStatus.OK);
	}
	
	
	
	
}
