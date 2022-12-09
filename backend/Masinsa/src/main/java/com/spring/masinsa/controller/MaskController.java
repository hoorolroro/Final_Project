package com.spring.masinsa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.ImageDTO;
import com.spring.masinsa.dto.MaskDTO;
import com.spring.masinsa.service.MaskServiceImpl;

@CrossOrigin({"*"})
@RestController
public class MaskController {
	
	@Autowired
	MaskServiceImpl maskService;

	// 5번 - maskID를 통해 마스크 정보 조회
	@GetMapping("/mask")
	public MaskDTO getMask(@RequestParam Long maskId) {
		return maskService.getMask(maskId);
	}
	
	// 12번 - maskId를 통해 마스크 상세 이미지 조회
	@GetMapping("/mask/image")
	public List<String> getMaskDetailImage(@RequestParam Long maskId) {
		return maskService.getAllImages(maskId);
	}
	
	// 9번 - kf, size, shape를 이용하여 검색결과 조회 (필터링)
	@GetMapping("/mask/filter")
	public List<MaskDTO> getMaskByFilter(@RequestParam(required = false) String kf, 
									  @RequestParam(required = false) String size, 
									  @RequestParam(required = false) String shape){
		return maskService.getAllMask(kf, size, shape);
	}
	
	// maskId를 통해 해당 마스크의 모든 이미지 조회
	@GetMapping("/mask/image2")
	public List<ImageDTO> getMaskDetailImages(@RequestParam Long maskId) {
		return maskService.getAllImagesOb(maskId);
	}
	
	// 10번 - standard를 통해 마스크 해당 기준으로 정렬 (해결 필요...)
	@GetMapping("/mask/sort")
	public List<MaskDTO> getSortedMasks(@RequestParam String standard) {
		return maskService.getSortedMasks(standard);
	}
	
	// 6번 - maskId와 soldout을 통해 마스크 품절 여부 수정
	@PutMapping("/mask/soldout")
	public void updateSoldout(@RequestParam Long maskId, @RequestParam String soldout) {
		maskService.updateSoldout(maskId, soldout);
	}
	
	// 7번 - maskId를 통해 해당 마스크의 클릭수 1 추가
	@PutMapping("/mask/click")
	public void updateClick(@RequestParam Long maskId) {
		maskService.updateClick(maskId);
	}
	
	// 8번 - maskId를 통해 마스크 정보 삭제
	@DeleteMapping("/mask")
	public void deleteMask(@RequestParam Long maskId) {
		maskService.deleteMask(maskId);
	}
	
	
}
