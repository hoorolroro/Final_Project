package com.spring.masinsa.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@ToString(exclude = {"wishlist"})
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
	
	@Enumerated(EnumType.STRING)
	private Deletion deletion;
	
	@OneToMany(mappedBy = "member")
	@JsonIgnore
	private List<WishList> wishlist = new ArrayList<WishList>();

	private String token;

	
	// Entity -> DTO 변환
	public static MemberDTO entityToDTO(Member member) {
		MemberDTO memberDTO = MemberDTO.builder()
										.id(member.getId())
										.nickname(member.getNickname())
										.sex(member.getSex())
										.age_group(member.getAge_group())
										.birth(member.getBirth())
										.deletion(member.getDeletion())
										.token(member.getToken())
										.build();
		return memberDTO;
	}
	
	public void deleteMember() {
		this.deletion = Deletion.Y;
	}
	
	
}
