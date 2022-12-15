package com.spring.masinsa.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.spring.masinsa.entity.Image;
import com.spring.masinsa.entity.Mask;

@Repository
@Mapper
public interface MaskMapper {
	List<Image> getAllImages(Long maskId);
	List<Mask> getAllMask(String blockingIndex, String size, String shape);
	List<Mask> getSortedMasks(String standard);


	List<Mask> FilterSortMaskByPage(String sortCol, String order, Integer limit, Integer offset, 
	String filterCol1, String filter1, String filterCol2, String filter2, String filterCol3, String filter3);
  List<Mask> SearchSortMask(String searchWord, String sortCol, String order, Integer limit, Integer offset);

}
