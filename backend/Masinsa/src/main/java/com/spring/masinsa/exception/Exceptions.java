package com.spring.masinsa.exception;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Exceptions {
	
	E0001(HttpStatus.NOT_FOUND, 404, "해당 요청값은 존재하지 않습니다.");
	
	private final HttpStatus status;
	private final int statusCode;
	private final String msg;
		
	
}
