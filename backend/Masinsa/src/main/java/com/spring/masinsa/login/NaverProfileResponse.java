package com.spring.masinsa.login;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NaverProfileResponse {
	private String resultcode;
    private String message;
    private NaverProfile response;
}
