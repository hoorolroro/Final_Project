package com.spring.masinsa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.AnalysisInfoDTO;
import com.spring.masinsa.service.AnalysisInfoServiceImpl;
import com.spring.masinsa.service.ReviewServiceImpl;


@CrossOrigin(origins = "*")
@RestController
public class AnalysisInfoController {

  @Autowired
  AnalysisInfoServiceImpl analysisInfoService;

  @Autowired
  ReviewServiceImpl reviewService;

  @GetMapping("/analysisinfo")
  public ResponseEntity<?> getAnalysisInfo(@RequestParam Long maskId) {
  //먼저 해당 마스크의 리뷰갯수가 10000개 이상인지 확인
  int reviewCount = reviewService.countByMaskId(maskId);
  if(reviewCount < 10000) {
    return new ResponseEntity<>("해당 마스크의 리뷰가 10000개 이상이 아닙니다.", HttpStatus.BAD_REQUEST);
  }
  //해당 마스크의 리뷰가 10000개 이상이면 분석정보를 만들어서 리턴
  AnalysisInfoDTO analysisInfo = analysisInfoService.getAnalysisInfo(maskId);
  return new ResponseEntity<AnalysisInfoDTO>(analysisInfo, HttpStatus.OK);
  }

  @DeleteMapping("/analysisinfo")
  public ResponseEntity<?> deleteAnalysisInfo(@RequestParam Long maskId) {
  //해당 마스크의 분석정보를 삭제
  if (analysisInfoService.deleteAnalysisInfo(maskId)) {
    return new ResponseEntity<>("해당 마스크의 분석정보가 삭제되었습니다.", HttpStatus.OK);
  }
  return new ResponseEntity<>("해당 마스크의 분석정보가 삭제되지 않았습니다.", HttpStatus.BAD_REQUEST);
  } 

}
