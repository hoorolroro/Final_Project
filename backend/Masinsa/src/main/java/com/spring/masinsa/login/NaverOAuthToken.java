package com.spring.masinsa.login;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NaverOAuthToken implements NaverUrls {
	
	private String access_token;
    private String refresh_token;
    private String token_type;
    private String expires_in;

}
