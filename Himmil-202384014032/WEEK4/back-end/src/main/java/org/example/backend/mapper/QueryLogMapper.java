package org.example.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.example.backend.entity.QueryLog;

// 查询日志Mapper
@Mapper
public interface QueryLogMapper extends BaseMapper<QueryLog> {
}
