package com.spring.masinsa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.ReviewDTO;
import com.spring.masinsa.response.Message;
import com.spring.masinsa.response.Status;
import com.spring.masinsa.service.ReviewServiceImpl;

import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin(origins = {"*"})
public class ReviewController {

  @Autowired 
  ReviewServiceImpl reviewService;

  //AnalysisInfoController.java에서 분석정보를 만들기 위해 리뷰갯수를 확인하는 메소드
  @ApiOperation(value = "maskId, reviewType에 해당하는 리뷰 갯수를 반환한다.")
  @GetMapping("/review/count")
  public ResponseEntity<?> countByMaskIdAndReviewType(@RequestParam Long maskId, @RequestParam String reviewType) {
    Message message = new Message();
    int count = reviewService.countByMaskIdAndReviewType(maskId, reviewType);
    if (count == -1) {
      message.setMessage(maskId + "에 해당하는 마스크가 없습니다.");
    }
    if (count == 0) {
      message.setMessage(maskId + "에 해당하는 마스크는 " + reviewType + " 리뷰가 없습니다.");
    }
    else {
      message.setMessage(maskId + "에 해당하는 마스크는 " + reviewType + " 리뷰가 " + count + "개 있습니다.");
    }
    message.setStatus(Status.OK);
    message.setResult(count);

    return new ResponseEntity<>(message, HttpStatus.OK);
  }
  
  @ApiOperation(value = "14번 - maskId, reviewType에 해당하는 리뷰를 반환한다. (페이징 처리)")
  @GetMapping("/review")
  public ResponseEntity<?> findByMaskIdAndReviewType(@RequestParam Long maskId,
      @PageableDefault(size = 10, page = 1) Pageable pageable, 
      @RequestParam String reviewType) {
    pageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize()); //page는 0부터 시작 -> front에서 1부터 시작하므로 -1해줘야함
    Message message = new Message();
    List<ReviewDTO> reviewList = reviewService.findByMaskIdAndReviewType(maskId, pageable, reviewType);
    if (reviewList == null) {
      message.setMessage(maskId + "에 해당하는 마스크가 없습니다.");
    }
    else {
      message.setMessage(maskId + "에 해당하는 마스크의 " + reviewType + " 리뷰를 반환합니다.");
    }
    message.setStatus(Status.OK);
    message.setResult(reviewList);
    return new ResponseEntity<>(message, HttpStatus.OK);
  }

}
