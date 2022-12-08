package com.spring.masinsa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.masinsa.dto.MaskDTO;
import com.spring.masinsa.entity.Mask;
import com.spring.masinsa.entity.SoldoutStatus;
import com.spring.masinsa.repository.MaskRepository;

@Service
public class MaskServiceImpl implements MaskService {
	
	@Autowired
	MaskRepository maskRepo;
	
	@Override
	public MaskDTO getMask(Long maskId) {
		Mask mask = maskRepo.findMaskById(maskId);
		MaskDTO maskDTO = Mask.entityToDTO(mask);
		return maskDTO;
	}
	
//	@Override - mask&image 외래키 join 설정 적용 필요
//	public String getMaskDetailImage(Long maskId) {
//		Mask mask = maskRepo.findMaskById(maskId);
//		String url = mask.get
//	}
	
//	@Override - batch 적용
//	public MaskDTO getMaskByKeyword(String keyword) {
//		Mask mask = maskRepo.findMaskById(maskId);
//		MaskDTO maskDTO = Mask.entityToDTO(mask);
//		return maskDTO;
//	}
	
	@Override
	public void deleteMask(Long maskId) {
		maskRepo.deleteById(maskId);
	}
	
	@Override
	public void updateSoldout(Long maskId, String soldout) {
		Mask mask = maskRepo.findMaskById(maskId);
		if (soldout.equals("Y")) {
			mask.updateSoldout(SoldoutStatus.Y);
		} 
		else if (soldout.equals("N")) {
			mask.updateSoldout(SoldoutStatus.N);
		}
		maskRepo.save(mask);
	}
	
	@Override
	public void updateClick(Long maskId) {
		Mask mask = maskRepo.findMaskById(maskId);
		mask.updateClick();
		maskRepo.save(mask);
	}
	
}
