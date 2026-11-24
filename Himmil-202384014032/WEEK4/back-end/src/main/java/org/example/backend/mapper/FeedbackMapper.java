package org.example.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.example.backend.entity.Feedback;

// 反馈Mapper
@Mapper
public interface FeedbackMapper extends BaseMapper<Feedback> {
}
