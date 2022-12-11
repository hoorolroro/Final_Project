package com.spring.masinsa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.ReviewDTO;
import com.spring.masinsa.service.ReviewServiceImpl;

@RestController
@CrossOrigin(origins = "*")
public class ReviewController {

  @Autowired 
  ReviewServiceImpl reviewService;

  //AnalysisInfoController.java에서 분석정보를 만들기 위해 리뷰갯수를 확인하는 메소드
  @GetMapping("/review/count")
  public int countByMaskId(@RequestParam Long maskId) {
    return reviewService.countByMaskId(maskId);
  }
  
  @GetMapping("/review")
  public ResponseEntity<List<ReviewDTO>> findByMaskIdAndReviewType(@RequestParam Long maskId,
      @PageableDefault(size = 10, page = 1) Pageable pageable, 
      @RequestParam String reviewType) {
    pageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize()); //page는 0부터 시작 -> front에서 1부터 시작하므로 -1해줘야함
    return ResponseEntity.ok(reviewService.findByMaskIdAndReviewType(maskId, pageable, reviewType));
  }

}
