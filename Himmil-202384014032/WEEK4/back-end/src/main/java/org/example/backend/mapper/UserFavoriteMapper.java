package org.example.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.example.backend.entity.UserFavorite;

// 用户收藏Mapper
@Mapper
public interface UserFavoriteMapper extends BaseMapper<UserFavorite> {
}
