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
@Table(name = "meeting")
public class Meeting implements Serializable {
   
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long roomno;

    @Column(name="category") private String category; 
    @Column(name="meetingtitle") private String meetingtitle;
    @Column(name="meetingdate") private String meetingdate;
    @Column(name="meetingplace") private String meetingplace;
    @Column(name="meetingdetail") private String meetingdetail;

    @ColumnDefault("true")
    @Column(name="meetingprogress") private boolean meetingprogress;
    @Column(name="meetingcharge") private int meetingcharge;
    @Column(name="meetingphoto") private String meetingphoto;

    // @OneToMany(mappedBy = "meeting", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    // private List<MeetingPeople> jointest;
   

}
 