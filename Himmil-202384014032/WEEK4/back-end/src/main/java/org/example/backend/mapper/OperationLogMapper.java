package org.example.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.example.backend.entity.OperationLog;

// 操作日志Mapper
@Mapper
public interface OperationLogMapper extends BaseMapper<OperationLog> {
}
