package com.spring.masinsa.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.spring.masinsa.entity.Image;

@Repository
@Mapper
public interface MaskMapper {
	List<String> getAllImages(Long maskId);
	List<Image> getAllImagesOb(Long maskId);
}
