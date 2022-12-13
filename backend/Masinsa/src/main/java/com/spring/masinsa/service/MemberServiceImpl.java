package com.spring.masinsa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.masinsa.dto.MemberDTO;
import com.spring.masinsa.entity.Member;
import com.spring.masinsa.repository.MemberRepository;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	MemberRepository memberRepo;
	
	@Override
	public MemberDTO getMember(Long memberId) {
		Member member = memberRepo.findMemberById(memberId);
		MemberDTO memberDTO = Member.entityToDTO(member);
		return memberDTO;
	}
	
	@Override
	public MemberDTO deleteMember(Long memberId) {
		Member member = memberRepo.findMemberById(memberId);
		if(member != null) {
			member.deleteMember();
			memberRepo.save(member);
			MemberDTO memberDTO = Member.entityToDTO(member);
			return memberDTO;
		}
		return null;
	}

	@Override
  public MemberDTO saveMember(MemberDTO memberDTO) {
    Member member = MemberDTO.dtoToEntity(memberDTO);
		memberRepo.save(member);
		return Member.entityToDTO(member);
  }
}