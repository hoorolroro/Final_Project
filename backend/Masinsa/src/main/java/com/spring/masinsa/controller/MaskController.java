package com.spring.masinsa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.MaskDTO;
import com.spring.masinsa.entity.Image;
import com.spring.masinsa.service.MaskServiceImpl;

@CrossOrigin({"*"})
@RestController
public class MaskController {
	
	@Autowired
	MaskServiceImpl maskService;

	
	// maskID를 통해 마스크 정보 조회
	@GetMapping("/mask")
	public MaskDTO getMask(@RequestParam Long maskId) {
		MaskDTO maskDTO = null;
		maskDTO = maskService.getMask(maskId);
		return maskDTO;
	}
	
//	// 상품명에 관련된 keyword를 입력받아 해당 keyword가 상품명에 있으면 출력 (Batch이용 -> 내일 해보기로..)
//		@GetMapping("/mask/keyword")
//		public List<MaskDTO> getMaskByKeyword(@RequestParam String keyword) {
//			List<MaskDTO> maskList = new ArrayList<MaskDTO>();
//			
//			maskDTO = maskService.getMaskByKeyword(keyword);
//			return maskDTO;
//		}
	
	// maskId를 통해 마스크 상세 이미지 조회
	@GetMapping("/mask/image")
	public List<String> getMaskDetailImage(@RequestParam Long maskId) {
		List<String> imageUrlList = maskService.getAllImages(maskId);
		return imageUrlList;
	}
	
	@GetMapping("/mask/image2")
	public List<Image> getMaskDetailImages(@RequestParam Long maskId) {
		List<Image> imageList = maskService.getAllImagesOb(maskId);
		return imageList;
	}
	
	// maskId와 soldout을 통해 마스크 품절 여부 수정
	@PutMapping("/mask/soldout")
	public void updateSoldout(@RequestParam Long maskId, @RequestParam String soldout) {
		maskService.updateSoldout(maskId, soldout);
	}
	
	// maskId를 통해 해당 마스크의 클릭수 1 추가
	@PutMapping("/mask/click")
	public void updateClick(@RequestParam Long maskId) {
		maskService.updateClick(maskId);
	}
	
	// maskId를 통해 마스크 정보 삭제
	@DeleteMapping("/mask")
	public void deleteMask(@RequestParam Long maskId) {
		maskService.deleteMask(maskId);
	}
	
	
	
}
