package com.tardygram.web;

import javax.transaction.Transactional;

import com.tardygram.web.domain.MemberDTO;
import com.tardygram.web.entities.MeetingPeople;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.MeetingPeopleRepository;
import com.tardygram.web.repositories.MemberRepository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.test.context.junit4.SpringRunner;

@Transactional
@Commit
@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplicationTests {
	@Autowired MemberRepository memberrepo;
    @Autowired MemberDTO memberdto;
    @Autowired MeetingPeopleRepository peopleRepo;

	@Test
	public void contextLoads() {
		Member member = new Member();
        member.setMemberid("kz1324");
        MeetingPeople people = new MeetingPeople();
        people.setLeader(0);
        //people.setRoomno2(1);
        people.setMember(member);
        peopleRepo.save(people);
	}

	

}
