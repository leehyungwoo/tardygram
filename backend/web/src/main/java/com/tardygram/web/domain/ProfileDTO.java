package com.tardygram.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class ProfileDTO {

    private String proid, proimage,
    protimes, prorate, projoindate, pronow, prolast, procash;
}