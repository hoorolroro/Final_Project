package com.spring.masinsa.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.spring.masinsa.entity.Image;
import com.spring.masinsa.entity.Mask;

@Repository
@Mapper
public interface MaskMapper {
	List<Image> getAllImages(Long maskId);
	List<Mask> getAllMask(String kf, String size, String shape);
	List<Mask> getSortedMasks(String standard);
}
