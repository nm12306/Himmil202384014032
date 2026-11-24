package org.example.backend.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// 查询日志
@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("shanxiligong_query_log")
public class QueryLog {

    @TableId(type = IdType.AUTO)
    private Long id;

    private Long userId;

    private String queryType;

    private String queryParams;

    private LocalDateTime createTime;
}


