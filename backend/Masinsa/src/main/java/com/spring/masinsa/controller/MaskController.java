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
import com.spring.masinsa.response.Message;
import com.spring.masinsa.response.Status;
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
	public ResponseEntity<List<MaskDTO>> getMaskByFilter(@RequestParam(required = false) String blockingIndex, 
									  @RequestParam(required = false) String size, 
									  @RequestParam(required = false, value="shape") String shape){
		System.out.println(shape + "안나옴");
		List<MaskDTO> maskList = maskService.getAllMask(blockingIndex, size, shape);
		return new ResponseEntity<List<MaskDTO>>(maskList, HttpStatus.OK); 
	}
	
	@ApiOperation(value = "13번 - maskId를 통해 해당 마스크의 모든 이미지 조회")
	@GetMapping("/mask/image")
	public ResponseEntity<List<ImageDTO>> getMaskDetailImages(@RequestParam Long maskId) {
		List<ImageDTO> imageList = maskService.getAllImages(maskId);
		return new ResponseEntity<List<ImageDTO>>(imageList, HttpStatus.OK);
	}
		
	@ApiOperation(value = "7번 - maskId와 soldout을 통해 마스크 품절 여부 수정")
	@PutMapping("/mask/soldout")
	public ResponseEntity<?> updateSoldout(@RequestParam Long maskId, @RequestParam String soldout) {
		MaskDTO maskDTO = maskService.updateSoldout(maskId, soldout);
		if (maskDTO != null) {
			Message msg = new Message(Status.OK, "마스크 품절여부 수정 완료", maskDTO);
		    return new ResponseEntity<>(msg, HttpStatus.OK);
		  }
		  Message msg = new Message(Status.OK, "마스크 품절여부 수정 실패", maskDTO);
		  return new ResponseEntity<>(msg, HttpStatus.OK);
		  } 
	
	@ApiOperation(value = "8번 - maskId를 통해 해당 마스크의 클릭수 1 추가")
	@PutMapping("/mask/click")
	public void updateClick(@RequestParam Long maskId) {
		maskService.updateClick(maskId);
	}
	
	//api that first filters and then sorts
	//api that takes column name, column filter , size, page  and returns list of masks with pagination
	//col, order, filterCol, filter are all optional
	@ApiOperation(value = "10번 - sortCol, order, filterCol, filter를 통해 마스크 필터링 및 정렬. filterCol은 총 3개까지 가능")
	@GetMapping("/mask/filter/sort")
	public ResponseEntity<?> getMaskList(@RequestParam(required = false) String sortCol, 
		@RequestParam(required = false) String order,
		@RequestParam(required = false) Integer page, 
		@RequestParam(required = false) Integer size, 
		@RequestParam(required = false) String filterCol1, 
		@RequestParam(required = false) String filter1,
		@RequestParam(required = false) String filterCol2,
		@RequestParam(required = false) String filter2,
		@RequestParam(required = false) String filterCol3,
		@RequestParam(required = false) String filter3) {

		List<MaskDTO> maskList = maskService.FilterSortMaskByPage(sortCol, order, page, size, filterCol1, filter1
			, filterCol2, filter2, filterCol3, filter3);
		if (maskList != null) {
			Message msg = new Message(Status.OK, "마스크 리스트 조회 완료", maskList);
		    return new ResponseEntity<>(msg, HttpStatus.OK);
		  }
		  Message msg = new Message(Status.OK, "마스크 리스트 조회 실패", maskList);
		  return new ResponseEntity<>(msg, HttpStatus.OK);
	}

}
