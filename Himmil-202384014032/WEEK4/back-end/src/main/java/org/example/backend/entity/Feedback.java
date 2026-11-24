package org.example.backend.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// 反馈
@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("shanxiligong_feedback")
public class Feedback {

    @TableId(type = IdType.AUTO)
    private Long id;

    private Long userId;

    private String title;

    private String content;

    private String type;

    private Integer status;

    private String replyContent;

    private Long replyUserId;

    private LocalDateTime replyTime;

    private LocalDateTime createTime;

    @TableLogic
    private Integer deleted;
}


