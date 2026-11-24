package org.example.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.example.backend.entity.DictRegion;

// 地区字典Mapper
@Mapper
public interface DictRegionMapper extends BaseMapper<DictRegion> {
}
