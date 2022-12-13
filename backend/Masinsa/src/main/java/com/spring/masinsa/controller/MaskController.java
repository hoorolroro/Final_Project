package com.spring.masinsa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.ImageDTO;
import com.spring.masinsa.dto.MaskDTO;
import com.spring.masinsa.service.MaskServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin({"*"})
@RestController
public class MaskController {
	
	@Autowired
	MaskServiceImpl maskService;

	@ApiOperation(value = "6번 - maskId를 통해 마스크 정보 조회")
	@GetMapping("/mask")
	public ResponseEntity<MaskDTO> getMask(@RequestParam Long maskId) {
		MaskDTO maskDTO = maskService.getMask(maskId);
		return new ResponseEntity<MaskDTO>(maskDTO, HttpStatus.OK);
	}
	 
	@ApiOperation(value = "10번 - kf, size, shape를 이용하여 검색결과 조회 (필터링)")
	@GetMapping("/mask/filter")
	public ResponseEntity<List<MaskDTO>> getMaskByFilter(@RequestParam(required = false) String kf, 
									  @RequestParam(required = false) String size, 
									  @RequestParam(required = false) String shape){
		List<MaskDTO> maskList = maskService.getAllMask(kf, size, shape);
		return new ResponseEntity<List<MaskDTO>>(maskList, HttpStatus.OK); 
	}
	
	@ApiOperation(value = "13번 - maskId를 통해 해당 마스크의 모든 이미지 조회")
	@GetMapping("/mask/image")
	public ResponseEntity<List<ImageDTO>> getMaskDetailImages(@RequestParam Long maskId) {
		List<ImageDTO> imageList = maskService.getAllImages(maskId);
		return new ResponseEntity<List<ImageDTO>>(imageList, HttpStatus.OK);
	}
	
	@ApiOperation(value = "11번 - standard를 통해 마스크 해당 기준으로 정렬 (해결 필요...)")
	@GetMapping("/mask/sort")
	public ResponseEntity<List<MaskDTO>> getSortedMasks(@RequestParam String standard) {
		List<MaskDTO> maskList = maskService.getSortedMasks(standard);
		return new ResponseEntity<List<MaskDTO>>(maskList, HttpStatus.OK);
	}
	
	@ApiOperation(value = "7번 - maskId와 soldout을 통해 마스크 품절 여부 수정")
	@PutMapping("/mask/soldout")
	public ResponseEntity<?> updateSoldout(@RequestParam Long maskId, @RequestParam String soldout) {
		if (maskService.updateSoldout(maskId, soldout)) {
		    return new ResponseEntity<>("마스크 품절여부 수정 완료", HttpStatus.OK);
		  }
		  return new ResponseEntity<>("마스크 품절여부 수정 실패", HttpStatus.BAD_REQUEST);
		  } 
	
	@ApiOperation(value = "8번 - maskId를 통해 해당 마스크의 클릭수 1 추가")
	@PutMapping("/mask/click")
	public void updateClick(@RequestParam Long maskId) {
		maskService.updateClick(maskId);
	}
	
}
