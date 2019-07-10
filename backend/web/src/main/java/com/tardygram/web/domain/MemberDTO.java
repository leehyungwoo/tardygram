package com.tardygram.web.domain;
import lombok.Data;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
@Data @Component @Lazy
public class MemberDTO {

    private String mebid, mebpwd,
    mebname,mebemail,mebphone,mebbirthday,mebgender;
}
