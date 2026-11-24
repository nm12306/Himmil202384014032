package org.example.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.example.backend.entity.Announcement;

// 公告Mapper
@Mapper
public interface AnnouncementMapper extends BaseMapper<Announcement> {
}
