package com.tardygram.web.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.*;
import java.util.HashMap;
import java.util.List;

import com.tardygram.web.domain.MemberDTO;
import com.tardygram.web.entities.Meeting;
import com.tardygram.web.entities.MeetingPeople;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.MeetingPeopleRepository;
import com.tardygram.web.repositories.MeetingRepository;
import com.tardygram.web.repositories.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * MemberController
 */
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/meeting")
public class MeetingController {
    @Autowired MemberRepository memberrepo;
    @Autowired MeetingPeopleRepository peopleRepo;
    @Autowired MeetingRepository meetingrepo;

    //모임방 개설 (meeting테이블 insert, meetingpeople테이블도 insert)
    @GetMapping("putmember")
    public MemberDTO insertMember(){
        System.out.println("meeting insert");

        Meeting meet = new Meeting();
        meet.setCategory("세미나");
        meet.setMeetingcharge(3000);
        meet.setMeetingdate("19/07/17");
        meet.setMeetingdetail("상세내용~~~~~~");
        meet.setMeetingplace("세미나하는곳");
        meet.setMeetingtitle("세미나는 힘들어");
        meet.setMeetingprogress(1);
        meetingrepo.save(meet);

        MeetingPeople mp = new MeetingPeople();
        Member member = new Member();
        member.setMemberid("kz1324"); //현재 로그인한 memberid
        
        mp.setLeader(1);
        mp.setMember(member);       
        mp.setRoomno(meet);
        
        peopleRepo.save(mp);
       
        return null;
    }

    @GetMapping("getmeeting")
    public void getmeeting(){
        System.out.println("join테스트");
        List<Object[]> result = meetingrepo.joinlist("kz1324");
        System.out.println("result.get(0) "+result.get(0)); 
        System.out.println("Arrays.deepToString(result.get(0)) "+Arrays.deepToString(result.get(0))); 
        for(int i = 0; i <result.size(); i++){
            for(int j=0; j<result.get(i).length; j++){
                System.out.println(result.get(i)[j]);              
            }
            System.out.println("---------------");
        }
    }
 

    


    
}