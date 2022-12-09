package com.spring.masinsa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.masinsa.dto.MaskDTO;
import com.spring.masinsa.entity.Image;
import com.spring.masinsa.entity.Mask;
import com.spring.masinsa.entity.SoldoutStatus;
import com.spring.masinsa.mapper.MaskMapper;
import com.spring.masinsa.repository.MaskRepository;

@Service
public class MaskServiceImpl implements MaskService {
	
	@Autowired
	MaskRepository maskRepo;
	
	@Autowired
	MaskMapper maskMapper;
	
	@Override
	public MaskDTO getMask(Long maskId) {
		Mask mask = maskRepo.findMaskById(maskId);
		MaskDTO maskDTO = Mask.entityToDTO(mask);
		return maskDTO;
	}
	
	@Override 
	public List<String> getAllImages(Long maskId) {
		return maskMapper.getAllImages(maskId);
	}
	
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
	
	public List<Image> getAllImageOb(Long maskId) {
		return maskMapper.getAllImagesOb(maskId);
	}
	
}
