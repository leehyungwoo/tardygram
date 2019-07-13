package com.tardygram.web.entities;

import java.io.Serializable;

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
@Table(name = "meetingpeople")
public class MeetingPeople implements Serializable {
    
    private static final long serialVersionUID = 1L;


    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    
    @Column(name="roomno") private int roomno;
    
    
    @ManyToOne
    @JoinColumn(name = "memberid") private Member member;

    
    @ColumnDefault("0")
    @Column(name="leader") private int leader;
  
    
    @Override
    public String toString(){
        return "Customer :[id:"+id+",roomno:" +roomno+", memberid:"+member+", leader:"+leader+"]";
    }

    //public Customer(){}  이런식으로 set으로 셋팅해야하지만
    //@NoArgsConstructor(access = AccessLevel.PUBLIC)   //기본생성자
    //로 인해서 아래같이 셋팅이 가능하다.
    @Builder
    public MeetingPeople(int roomno,Member memberid, int leader){
        this.roomno = roomno;
        this.member = member;
        this.leader = leader;
    }
}
