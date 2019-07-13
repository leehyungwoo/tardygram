package com.tardygram.web.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.ColumnDefault;

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
@Table(name = "member",
        uniqueConstraints = {
            @UniqueConstraint(
                columnNames = {"phone"}
            )
        }        
)
public class Member implements Serializable {
    
    private static final long serialVersionUID = 1L;
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="memberid") private String memberid; 
    
    // @GeneratedValue(strategy=GenerationType.AUTO)
    // @Column(name="id")
    // private Long id;
    
    @Column(name="pwd") private String pwd;
    @Column(name="name") private String name;
    @Column(name="phone") private String phone;
    @Column(name="email") private String email;
    @Column(name="birthday") private String birthday;
    @Column(name="gender") private String gender;

    @ColumnDefault("0")
    @Column(name="money") private int money;

    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<MeetingPeople> jointest;


    @Override
    public String toString(){
        return "Member :[memberid:"+memberid
        +",pwd:" +pwd
        +", name:"+name
        +", phone:"+phone
        +", email:"+email
        +", birthday:"+birthday
        +", gender:"+gender
        +", money:"+money
        +"]";
    }

    //public Customer(){}  이런식으로 set으로 셋팅해야하지만
    //@NoArgsConstructor(access = AccessLevel.PUBLIC)   //기본생성자
    //로 인해서 아래같이 셋팅이 가능하다.
    @Builder
    public Member(String memberid,String pwd,
    String name,String phone,String email,String birthday,
    String gender,int money){
        this.memberid = memberid;
        this.pwd = pwd;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
        this.money = money;
    }
}