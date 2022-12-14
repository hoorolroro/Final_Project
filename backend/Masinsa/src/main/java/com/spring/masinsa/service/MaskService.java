package com.spring.masinsa.service;

import java.util.List;

import com.spring.masinsa.dto.ImageDTO;
import com.spring.masinsa.dto.MaskDTO;

public interface MaskService  {
	
	public MaskDTO getMask(Long maskId);
	public MaskDTO updateSoldout(Long maskId, String soldout);
	public void updateClick(Long maskId);
	public List<ImageDTO> getAllImages(Long maskId);
	public List<MaskDTO> getAllMask(String kf, String size, String shape);
	public List<MaskDTO> getSortedMasks(String standard);
	public List<MaskDTO> getSortedMasksPage(String column, String order, int limit, int offset);
	
}
