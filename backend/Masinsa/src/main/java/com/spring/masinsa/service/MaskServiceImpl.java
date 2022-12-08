package com.spring.masinsa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.masinsa.repository.MaskRepository;

@Service
public class MaskServiceImpl implements MaskService {
	
	@Autowired
	MaskRepository maskRepo;
	
	
}
