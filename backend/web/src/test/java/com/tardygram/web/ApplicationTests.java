package com.tardygram.web;

import java.util.stream.IntStream;

import javax.transaction.Transactional;

import com.tardygram.web.entities.Room;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.RoomRepository;
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
	RoomRepository roomRepo;
	
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
	public void testInsertRooms() {
		
		IntStream.range(0, 1).forEach(i -> {
			
			Room room = new Room();
			room.setMname("MEET"+i);
			
			Member member1 = memberRepo.findById("user1").get();
			
			room.addMember(member1);
			member1.addRoom(room);
			
			log.info(""+room);
			
			Member member2 = memberRepo.findById("user2").get();
			
			room.addMember(member2);
			member2.addRoom(room);

			roomRepo.save(room);
			
		});
	}
	
	@Test
	public void testReadRoom() {
		
		Room room = roomRepo.findById(1L).get();
		
		log.info(""+ room);
		
		
    } */
    

	
}
