package com.tardygram.web.domain;
import lombok.Data;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
@Data @Component @Lazy
public class MeetingDTO {

    private String category, meetingtitle,
    meetingdate, meetingplace, meetingdetail, meetingphoto;
    private int meetingcharge, meetingprogress;
}
