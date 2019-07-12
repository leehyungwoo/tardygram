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
@Table(name = "Members")
public class Member implements Serializable {
    
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="mebid") private String mebid; 
    @Column(name="mebpwd") private String mebpwd;
    @Column(name="mebname") private String mebname;
    @Column(name="mebemail") private String mebemail;
    @Column(name="mebphone") private String mebphone;
    @Column(name="mebbirthday") private String mebbirthday;
    @Column(name="mebgender") private String mebgender;



    @Override
    public String toString(){
        return "Member :[Id:"+mebid
        +",MebPassword:" +mebpwd
        +", MebName:"+mebname
        +", MebEmail:"+mebemail
        +", MebPhone:"+mebphone
        +", MebBirthday:"+mebbirthday
        +"]";
    }

    //public Customer(){}  이런식으로 set으로 셋팅해야하지만
    //@NoArgsConstructor(access = AccessLevel.PUBLIC)   //기본생성자
    //로 인해서 아래같이 셋팅이 가능하다.
    @Builder
    public Member(String customerId,String customerName,
    String password,String ssn,String phone,String city,
    String address,String postalcode,String photo){
        this.mebid = mebid;
        this.mebpwd = mebpwd;
        this.mebname = mebname;
        this.mebemail = mebemail;
        this.mebphone = mebphone;
        this.mebbirthday = mebbirthday;

    }
}