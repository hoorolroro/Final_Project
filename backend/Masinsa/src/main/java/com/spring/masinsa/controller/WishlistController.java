package com.spring.masinsa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@ApiOperation(value = "19번 - maskId&memberId를 통해 찜 등록")
	@PostMapping("/wishlist")
	public ResponseEntity<?> addWishList(@RequestParam Long maskId, @RequestParam Long memberId) {
		WishListDTO wishListDTO = wishListService.addWishList(maskId, memberId);
		if(wishListDTO != null) {
			Message msg = new Message(Status.OK, "찜 등록 완료", wishListDTO);
		    return new ResponseEntity<>(msg, HttpStatus.OK);
		}
		 Message msg = new Message(Status.OK, "마스크 품절여부 수정 실패", wishListDTO);
		 return new ResponseEntity<>(msg, HttpStatus.OK);
	} 
		
	
	@ApiOperation(value = "20번 - memberId를 통해 찜 목록 전체 조회")
	@GetMapping("/wishlist")
	public ResponseEntity<List<WishListDTO>> getWishList(@RequestParam Long memberId) {
		List<WishListDTO> wishListDTO = wishListService.getAllWishList(memberId);
		return new ResponseEntity<List<WishListDTO>>(wishListDTO, HttpStatus.OK);
	}
	
	@ApiOperation(value = "21번 - wishlistId를 통해 찜 삭제")
	@PutMapping("/wishlist")
	public ResponseEntity<?> deleteWishList(@RequestParam Long wishListId) {
		WishListDTO wishListDTO = wishListService.deleteWishList(wishListId);
		if(wishListDTO != null) {
			Message msg = new Message(Status.OK, "찜 삭제 완료", wishListDTO);
			return new ResponseEntity<>(msg, HttpStatus.OK);
		}
		Message msg = new Message(Status.OK, "찜 삭제 실패", wishListDTO);
		return new ResponseEntity<>(msg, HttpStatus.OK);
	}
	
}
