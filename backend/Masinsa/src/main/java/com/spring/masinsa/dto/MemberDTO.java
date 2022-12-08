package com.spring.masinsa.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class MemberDTO {
	
	private Long id;
	private String nickname;
	private String sex;
	private String age_group;
	private String birth_date;
	
}
