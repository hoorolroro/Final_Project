package com.spring.masinsa.exception;

import java.util.NoSuchElementException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApiException {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<String> handlerNoSuchElementException(NoSuchElementException e) {
		logger.error(e.getMessage());
		return ResponseEntity
				.status(Exceptions.E0001.getStatus())
				.body(Exceptions.E0001.getMsg());
	}
	
	
	
}
