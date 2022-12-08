package com.spring.masinsa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.spring.masinsa.dto.MemberDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Builder
public class Member {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "member_id")
	private Long id;
	
	private String nickname;
	
	private String sex;
	
	private String age_group;
	
	@Column(name = "birth_date")
	private String birth;
	
	// Entity -> DTO 변환
	public static MemberDTO entityToDTO(Member member) {
		MemberDTO memberDTO = MemberDTO.builder()
										.nickname(member.getNickname())
										.sex(member.getSex())
										.age_group(member.getAge_group())
										.birth(member.getBirth())
										.build();
		return memberDTO;
	}
	
}
