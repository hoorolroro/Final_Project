package com.spring.masinsa.dto;

import com.spring.masinsa.entity.Deletion;
import com.spring.masinsa.entity.Member;

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
	private String birth;
	private Deletion deletion;
	
	// DTO -> Entity 변환
	public static Member dtoToEntity(MemberDTO memberDTO) {
		Member member = Member.builder()
							  .id(memberDTO.getId())
							  .nickname(memberDTO.getNickname())
							  .sex(memberDTO.getSex())
							  .age_group(memberDTO.getAge_group())
							  .birth(memberDTO.getBirth())
							  .deletion(memberDTO.getDeletion())
							  .build();
		return member;	  
	}
	
}
