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

	@Select("SELECT * FROM mask ORDER BY ${col} ${order} LIMIT ${limit} OFFSET ${offset}")
	@Result(property = "id", column = "mask_id")
	@Result(property = "name", column = "mask_name")
	@Result(property = "kf", column = "blocking_index")
	@Result(property = "thumbnail", column = "thumbnail_image_url")
	@Result(property = "purchaseUrl", column = "purchase_url")
	@Result(property = "click", column = "click_num")
	@Result(property = "soldout", column = "soldout_status")
	@Result(property = "avgScore", column = "avg_score")
	List<Mask> getSortedMasksByPage(String col, String order, int limit, int offset);


	List<Mask> FilterSortMaskByPage(String sortCol, String order, Integer offset, Integer limit, String filterCol, String filter);

}
