package org.example.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.example.backend.entity.User;

// 用户Mapper
@Mapper
public interface UserMapper extends BaseMapper<User> {
}
