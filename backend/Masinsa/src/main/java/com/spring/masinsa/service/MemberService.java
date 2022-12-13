package com.spring.masinsa.service;

import com.spring.masinsa.dto.MemberDTO;

public interface MemberService {
	public MemberDTO getMember(Long memberId);
	public MemberDTO deleteMember(Long memberId);
	public MemberDTO saveMember(MemberDTO memberDTO);
}
