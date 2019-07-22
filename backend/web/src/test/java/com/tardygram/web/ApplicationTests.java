package com.tardygram.web;

import java.util.stream.IntStream;

import javax.transaction.Transactional;

import com.tardygram.web.entities.Meeting;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.MeetingRepository;
import com.tardygram.web.repositories.MemberRepository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.test.context.junit4.SpringRunner;


import lombok.extern.java.Log;

@RunWith(SpringRunner.class)
@SpringBootTest
@Log
@Commit
@Transactional
public class ApplicationTests {

	@Autowired
	MemberRepository memberRepo;
	
	@Autowired
	MeetingRepository meetingRepo;
	
	/* @Test
	public void testInsertMember() {
		
		IntStream.range(0, 100).forEach(i -> {

			Member member = new Member();
			member.setUid("user" + i);
			member.setUpw("pw");
			member.setUname("USER" + i);
			
			memberRepo.save(member);
		});
	}
	
	
	@Test
	public void testInsertMeetings() {
		
		IntStream.range(0, 1).forEach(i -> {
			
			Meeting meeting = new Meeting();
			meeting.setMname("MEET"+i);
			
			Member member1 = memberRepo.findById("user1").get();
			
			meeting.addMember(member1);
			member1.addMeeting(meeting);
			
			log.info(""+meeting);
			
			Member member2 = memberRepo.findById("user2").get();
			
			meeting.addMember(member2);
			member2.addMeeting(meeting);

			meetingRepo.save(meeting);
			
		});
	}
	
	@Test
	public void testReadMeeting() {
		
		Meeting meeting = meetingRepo.findById(1L).get();
		
		log.info(""+ meeting);
		
		
    } */
    

	
}
