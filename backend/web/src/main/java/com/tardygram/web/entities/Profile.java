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
@Table(name = "customers")
public class Profile implements Serializable {
    
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    
    @Column(name="proid") private String proid; 
    @Column(name="proimage") private String proimage;
    @Column(name="protimes") private String protimes;
    @Column(name="prorate") private String prorate;
    @Column(name="projoindate") private String projoindate;
    @Column(name="pronow") private String pronow;
    @Column(name="prolast") private String prolast;
    @Column(name="procash") private String procash;
    
    @Override
    public String toString(){
        return "Customer :[proid:"+proid+",proimage:" +proimage+", protimes:"+protimes+", prorate:"+prorate+", projoindate:"+projoindate+
        ", pronow:"+pronow+", prolast:"+prolast+", procash:"+procash+"]";
    }

    //public Customer(){}  이런식으로 set으로 셋팅해야하지만
    //@NoArgsConstructor(access = AccessLevel.PUBLIC)   //기본생성자
    //로 인해서 아래같이 셋팅이 가능하다.
    @Builder
    public Profile(String proid,String proimage,
    String protimes,String prorate,String projoindate,String pronow,
    String prolast,String procash){
        this.proid = proid;
        this.proimage = proimage;
        this.protimes = protimes;
        this.prorate = prorate;
        this.projoindate = projoindate;
        this.pronow = pronow;
        this.prolast = prolast;
        this.procash = procash;
    }
}
