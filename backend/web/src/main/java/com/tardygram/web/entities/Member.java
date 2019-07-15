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
@ToString(exclude = "jointest") //아래의 어노테이션으로 생성된 onetomany에 있는 프로퍼티를 제외함
@Table(name = "member",
        uniqueConstraints = { //unique 속성주기
            @UniqueConstraint(
                columnNames = {"phone"}
                // , columnNames = {"name"};
            )
        }        
)

public class Member implements Serializable {
    
    private static final long serialVersionUID = 1L;
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="memberid") private String memberid; 
      
    @Column(name="pwd") private String pwd;
    @Column(name="name") private String name;
    @Column(name="phone") private String phone;
    @Column(name="email") private String email;
    @Column(name="birthday") private String birthday;
    @Column(name="gender") private String gender;

    @ColumnDefault("0")
    @Column(name="money") private int money;
    
    // @ColumnDefault("")
    @Column(name="profileimage") private String profileimage;

    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<MeetingPeople> jointest;

}