package com.spring.masinsa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.MaskDTO;
import com.spring.masinsa.dto.MemberDTO;
import com.spring.masinsa.service.MemberServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin({"*"})
@RestController
public class MemberController {
	
	@Autowired
	MemberServiceImpl memberService;
	
//	@ApiOperation(value = "6번 - maskId를 통해 마스크 정보 조회")
//	@GetMapping("/mask")
//	public ResponseEntity<MemberDTO> getMask(@RequestParam Long maskId) {
//		MaskDTO maskDTO = 
//		return new ResponseEntity<MemberDTO>(memberDTO, HttpStatus.OK);
//	}
	
	
}
