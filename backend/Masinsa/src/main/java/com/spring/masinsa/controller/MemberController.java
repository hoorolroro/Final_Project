package com.spring.masinsa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.MemberDTO;
import com.spring.masinsa.service.MemberServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin({"*"})
@RestController
public class MemberController {
	
	@Autowired
	MemberServiceImpl memberService;
	
	@ApiOperation(value = "3번 - memberId를 통해 회원 정보 조회")
	@GetMapping("/member")
	public ResponseEntity<MemberDTO> getMask(@RequestParam Long memberId) {
		MemberDTO memberDTO = memberService.getMember(memberId); 
		return new ResponseEntity<MemberDTO>(memberDTO, HttpStatus.OK);
	}
	
//	@ApiOperation(value = "2번 - memberId를 통해 회원 탈퇴")
//	@PutMapping("/member/delete")
//	public ResponseEntity<MemberDTO> deleteMember(@RequestParam Long memberId) {
//		MemberDTO memberDTO = memberService.deleteMember(memberId);
//		if (memberDTO != null) {
//			return new ResponseEntity<MemberDTO>(memberDTO, "회원 탈퇴 완료", HttpStatus.OK);
//		}
//		return new ResponseEntity<MemberDTO>("회원 탈퇴 실패", HttpStatus.BAD_REQUEST);
//		}
}
