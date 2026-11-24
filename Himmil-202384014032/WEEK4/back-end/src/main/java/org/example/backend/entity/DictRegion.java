package org.example.backend.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// 地区字典
@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("shanxiligong_dict_region")
public class DictRegion {

    @TableId(type = IdType.AUTO)
    private Long id;

    private String name;

    private Long parentId;

    private String code;

    private Integer level;

    private Integer sortOrder;

    private LocalDateTime createTime;

    @TableLogic
    private Integer deleted;
}


