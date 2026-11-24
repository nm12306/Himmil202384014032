package org.example.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.example.backend.entity.EmploymentData;

// 就业数据Mapper
@Mapper
public interface EmploymentDataMapper extends BaseMapper<EmploymentData> {

    // 多条件分页查询就业数据
    IPage<EmploymentData> selectByConditions(IPage<EmploymentData> page,
                                             @Param("provinceId") Long provinceId,
                                             @Param("regionId") Long regionId,
                                             @Param("industryId") Long industryId,
                                             @Param("majorId") Long majorId,
                                             @Param("education") String education,
                                             @Param("year") Integer year);

    // 管理端分页查询（关键字模糊匹配地区名、行业名、专业名、学历）
    IPage<EmploymentData> selectAdminList(IPage<EmploymentData> page,
                                          @Param("keyword") String keyword);
}
