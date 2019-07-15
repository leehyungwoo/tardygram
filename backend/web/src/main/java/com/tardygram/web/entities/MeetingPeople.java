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
@ToString(exclude = "member")
@Table(name = "meetingpeople")
public class MeetingPeople implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name="roomno2") private Meeting roomno;
       
    @ManyToOne
    @JoinColumn(name = "memberid2") private Member member;
  
    @ColumnDefault("0")
    @Column(name="leader") private int leader;


}
