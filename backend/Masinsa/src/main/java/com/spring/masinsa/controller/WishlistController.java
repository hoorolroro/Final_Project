package com.spring.masinsa.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.WishListDTO;
import com.spring.masinsa.response.Message;
import com.spring.masinsa.response.Status;
import com.spring.masinsa.service.WishListServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin({"*"})
@RestController
public class WishlistController {
	
	@Autowired
	WishListServiceImpl wishListService;
	
	@ApiOperation(value = "20번 - maskId&memberId를 통해 찜 등록")
	@PostMapping("/wishlist")
	public ResponseEntity<?> addWishList(@RequestBody WishListDTO ids) {
		WishListDTO wishListDTO = wishListService.addWishList(ids);
		if(wishListDTO != null) {
			Message msg = new Message(Status.OK, "찜 등록 완료", wishListDTO);
		    return new ResponseEntity<>(msg, HttpStatus.OK);
		}
		 Message msg = new Message(Status.OK, "이미 찜 되어있는 마스크입니다.", wishListDTO);
		 return new ResponseEntity<>(msg, HttpStatus.OK);
	}
	
	@ApiOperation(value = "21번 - memberId를 통해 찜 목록 전체 조회(JPA.ver)")
	@GetMapping("/wishlist")
	public ResponseEntity<List<WishListDTO>> getWishList
	(@RequestParam Long memberId, @RequestParam int page, @RequestParam int size) {
		List<WishListDTO> wishListDTO = wishListService.getAllWishList(memberId, page, size);
		return new ResponseEntity<List<WishListDTO>>(wishListDTO, HttpStatus.OK);
	}
	
//	@ApiOperation(value = "20번 - memberId를 통해 찜 목록 전체 조회(MyBatis.ver)")
//	@GetMapping("/wishlist2")
//	public ResponseEntity<List<HashMap>> getWishList2
//	(@RequestParam Long memberId, @RequestParam Long page, @RequestParam Long size) {
//		List<HashMap> wishListDTO = wishListService.getAllWishList2(memberId, page, size);
//		return new ResponseEntity<List<HashMap>>(wishListDTO, HttpStatus.OK);
//	}
	
	
	@ApiOperation(value = "22번 - wishlistId를 통해 찜 삭제")
	@PutMapping("/wishlist")
	public ResponseEntity<?> deleteWishList(@RequestParam Long memberId, @RequestParam Long maskId) {
		WishListDTO wishListDTO = wishListService.deleteWishList(memberId, maskId);
		if(wishListDTO != null) {
			Message msg = new Message(Status.OK, "찜 삭제 완료", wishListDTO);
			return new ResponseEntity<>(msg, HttpStatus.OK);
		}
		Message msg = new Message(Status.OK, "찜 삭제 실패", wishListDTO);
		return new ResponseEntity<>(msg, HttpStatus.OK);
	}
	
}
