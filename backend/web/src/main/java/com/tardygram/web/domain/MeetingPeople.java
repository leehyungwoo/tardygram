package com.tardygram.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class MeetingPeople {

    private int roomno, leader;
    private String memberid;
}