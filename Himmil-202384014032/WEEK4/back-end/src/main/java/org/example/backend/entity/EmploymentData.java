package org.example.backend.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

// 就业数据
@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("shanxiligong_employment_data")
public class EmploymentData {

    @TableId(type = IdType.AUTO)
    private Long id;

    private Long regionId;

    private Long provinceId;

    private Long industryId;

    private Long majorId;

    private String education;

    private Integer year;

    private BigDecimal avgSalary;

    private BigDecimal medianSalary;

    private BigDecimal employmentRate;

    private Integer sampleSize;

    private LocalDateTime createTime;

    private LocalDateTime updateTime;

    @TableLogic
    private Integer deleted;
}


