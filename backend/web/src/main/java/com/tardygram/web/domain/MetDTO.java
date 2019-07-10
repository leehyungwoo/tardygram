package com.tardygram.web.domain;
import lombok.Data;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
@Data @Component @Lazy
public class MetDTO {

    private String metroom, metcategory,
    mettitle, metdate, metplace, metintro, metdetail, metcharge, metpoint;
}
