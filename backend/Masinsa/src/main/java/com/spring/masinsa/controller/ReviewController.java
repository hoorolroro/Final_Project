package com.spring.masinsa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

  @GetMapping("/review/count")
  public int countByMaskId(@RequestParam Long maskId) {
    return reviewService.countByMaskId(maskId);
  }
  
  @GetMapping("/review")
  public ResponseEntity<List<ReviewDTO>> findByMaskId(@RequestParam Long maskId) {
    List<ReviewDTO> reviewList = reviewService.findByMaskId(maskId);
    return ResponseEntity.ok(reviewList);
  }

}
