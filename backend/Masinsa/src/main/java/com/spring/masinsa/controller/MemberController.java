package com.spring.masinsa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.masinsa.dto.MemberDTO;
import com.spring.masinsa.login.NaverOAuthToken;
import com.spring.masinsa.login.NaverProfileResponse;
import com.spring.masinsa.response.Message;
import com.spring.masinsa.response.Status;
import com.spring.masinsa.service.MemberServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin({"*"})
@RestController
public class MemberController {
	
	@Autowired
	MemberServiceImpl memberService;

	
	
	
//	@ApiOperation(value = "1번 - 네이버 회원 데이터 DB에 저장")
//	@PostMapping("/member/new-member")
//	//params : memberId, nickName, sex, ageGroup, birthDate  : all are optional
//	//memberDTO를 받아서 DB에 저장
//	public ResponseEntity<?> getNaverInfo(@RequestParam String code, @RequestParam String state) throws JsonMappingException, JsonProcessingException{
//		
//		// 네이버에 전달할 속성들 Map에 담기
//		MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
//	    params.add("grant_type","authorization_code");
//	    params.add("client_id","ckARsfTeqhLi8LFaHR1c");
//	    params.add("client_secret", "rbRFW5dr8m");
//	    params.add("code", code);
//	    params.add("state", state);
//	    
//	    // 네이버에 전달할 HTTP 요청 메세지 생성 
//	    HttpEntity<MultiValueMap<String, String>> naverTokenRequest = makeTokenRequest(params);
//	    
//	    // TOKEN_REQUEST_URL로 HTTP 요청 전송 후 tokenResponse(DB 저장용 토큰) 반환 받음 
//	    RestTemplate rt = new RestTemplate();
//	    ResponseEntity<String> tokenResponse = rt.exchange(
//	    		"https://openapi.naver.com/v1/nid/me",
//	             HttpMethod.POST,
//	             naverTokenRequest,
//	             String.class
//	    );
//	    
//	    // 반환받은  tokenResponse를 ObjectMapper를 통해 NaverOAuthToken 객체로 매핑
//	    ObjectMapper objectMapper = new ObjectMapper();
//	    NaverOAuthToken naverToken = objectMapper.readValue(tokenResponse.getBody(), NaverOAuthToken.class);
//	    
//	    // 네이버에 전달할 HTTP 요청 메세지 생성
//	    HttpEntity<MultiValueMap<String, String>> naverProfileRequest = makeProfileRequest(naverToken);
//	    
//	    ResponseEntity<String> profileResponse = rt.exchange(
//				"https://openapi.naver.com/v1/nid/me",
//			    HttpMethod.POST,
//			    naverProfileRequest,
//			    String.class
//	    );
//
//	    NaverProfileResponse naverProfileResponse = objectMapper.readValue(profileResponse.getBody(), NaverProfileResponse.class);
//	    System.out.println(naverProfileResponse);
//	    return null;
//	}
//	
//	private HttpEntity<MultiValueMap<String, String>> makeTokenRequest(MultiValueMap<String, String> params) {
//	    HttpHeaders headers = new HttpHeaders();
//	    headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
//	    HttpEntity<MultiValueMap<String, String>> naverTokenRequest = new HttpEntity<>(params, headers);
//	    return naverTokenRequest;
//	}
//	
//	private HttpEntity<MultiValueMap<String, String>> makeProfileRequest(NaverOAuthToken naverToken) {
//	    HttpHeaders headers = new HttpHeaders();
//	    headers.add("Authorization", "Bearer "+ naverToken.getAccess_token());
//	    headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
//	    HttpEntity<MultiValueMap<String, String>> naverProfileRequest = new HttpEntity<>(headers);
//	    return naverProfileRequest;
//	    }
	
	
//	@ApiOperation(value = "1번 - 회원 데이터 DB에 저장")
//	@PostMapping("/member/new-member")
//	//params : memberId, nickName, sex, ageGroup, birthDate  : all are optional
//	//memberDTO를 받아서 DB에 저장
//	public ResponseEntity<?> saveMember(@RequestBody MemberDTO memberDTO)
//	{
//		System.out.println("memberDTO : " + memberDTO);
//		MemberDTO member = memberService.saveMember(memberDTO);
//		if (member != null) {
//			Message msg = new Message(Status.OK, "회원가입 성공", member);
//			return new ResponseEntity<>(msg, HttpStatus.OK);
//		}
//		Message msg = new Message(Status.OK, "회원가입 실패", memberDTO);
//		return new ResponseEntity<>(msg, HttpStatus.OK);
//	}
	
	@ApiOperation(value = "2번 - memberId를 통해 회원 탈퇴")
	@PutMapping("/member/delete")
	public ResponseEntity<?> deleteMember(@RequestParam Long memberId) {
		MemberDTO memberDTO = memberService.deleteMember(memberId);
		if (memberDTO != null) {
			Message msg = new Message(Status.OK, "회원 탈퇴 완료", memberDTO);
			return new ResponseEntity<>(msg, HttpStatus.OK);
		}
		Message msg = new Message(Status.OK, "회원 탈퇴 실패", memberDTO);
		return new ResponseEntity<>(msg, HttpStatus.OK);
	}

	@ApiOperation(value = "3번 - memberId를 통해 회원 정보 조회")
	@GetMapping("/member")
	public ResponseEntity<MemberDTO> getMask(@RequestParam Long memberId) {
		MemberDTO memberDTO = memberService.getMember(memberId); 
		return new ResponseEntity<MemberDTO>(memberDTO, HttpStatus.OK);
	}
	
	
}
