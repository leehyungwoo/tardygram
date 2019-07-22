package com.tardygram.web.entities;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.ColumnDefault;

import lombok.Data;
import lombok.ToString;

@Data
@Table(name = "tbl_meeting")
@Entity
@ToString
public class Meeting {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long roomno; //미팅의 번호
	private String meetingtitle;//미팅의 제목
	private String meetingdetail; //미팅의 상세내용
	private String meetingdate; //미팅날짜
	private String meetingplace; //미팅장소
	private String category; //미팅카테고리 ex)동창회, 스터디
	@ColumnDefault("0")
	private int meetingprogress; //현재진행중이면1 끝나면0
	private int meetingcharge; //벌금
	private String meetingphoto; //모임장소 사진
	private String hostid; //로그인한방장의 아이디
	
	//연관관계의 주인은 Member가됨
	@ManyToMany(mappedBy = "meetings")
	@JsonIgnore
	private List<Member> members = new ArrayList<>();
	
	public void addMember(Member member) {
		members.add(member);
	}

	

}

 