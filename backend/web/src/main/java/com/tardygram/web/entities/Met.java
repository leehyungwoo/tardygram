package com.tardygram.web.entities;
import java.io.Serializable;
import javax.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor(access = AccessLevel.PUBLIC)   //기본생성자
@Entity
@Getter
@Setter
@ToString
@Table(name = "met")
public class Met implements Serializable {
   
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Column(name="metroom") private String metroom; 
    @Column(name="metcategory") private String metcategory;
    @Column(name="mettitle") private String mettitle;
    @Column(name="metdate") private String metdate;
    @Column(name="metplace") private String metplace;
    @Column(name="metintro") private String metintro;
    @Column(name="metdetail") private String metdetail;
    @Column(name="metcharge") private String metcharge;
    @Column(name="metpoint") private String metpoint;
    @Override
    public String toString(){
        return "Met :[metroom:"+metroom+",metcategory:" +metcategory
        +", mettitle:"+mettitle
        +", metdate:"+metdate
        +", metplace:"+metplace
        +", metintro:"+metintro
        +", metdetail:"+metdetail
        +", metcharge:"+metcharge
        +", metpoint:"+metpoint
        +"]";
    }

    @Builder
    public Met(
        String metroom,
        String metcategory,
        String mettitle,
        String metdate,
        String metplace,
        String metintro,
        String metdetail,
        String metcharge,
        String metpoint
    )
    {
        this.metroom = metroom;
        this.metcategory = metcategory;
        this.mettitle = mettitle;
        this.metdate = metdate;
        this.metplace = metplace;
        this.metintro = metintro;
        this.metdetail = metdetail;
        this.metcharge = metcharge;
        this.metpoint = metpoint;
    }
}
 