package org.example.backend.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// 操作日志
@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("shanxiligong_operation_log")
public class OperationLog {

    @TableId(type = IdType.AUTO)
    private Long id;

    private Long operatorId;

    private String operatorName;

    private String operationType;

    private String operationTarget;

    private String operationDetail;

    private String ipAddress;

    private LocalDateTime createTime;
}


