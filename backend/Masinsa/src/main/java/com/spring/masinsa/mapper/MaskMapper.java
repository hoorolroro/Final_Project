package com.spring.masinsa.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface MaskMapper {
	List<String> getAllImages(Long maskId);
}
