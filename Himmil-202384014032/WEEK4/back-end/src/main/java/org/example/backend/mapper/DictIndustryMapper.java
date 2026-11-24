package org.example.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.example.backend.entity.DictIndustry;

// 行业字典Mapper
@Mapper
public interface DictIndustryMapper extends BaseMapper<DictIndustry> {
}
