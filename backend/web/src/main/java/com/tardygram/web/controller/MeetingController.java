package com.tardygram.web.controller;

import com.tardygram.web.entities.Meeting;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.EnterRepository;
import com.tardygram.web.repositories.MeetingRepository;
import com.tardygram.web.repositories.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
   @Autowired MeetingRepository meetingrepo;
   @Autowired EnterRepository enterrepo;

   //방장이 모임방 개설
   @PostMapping("/create")
   public void insertMeeting(){

        String hostName = "moonho";

       System.out.println("meeting insert");
       Meeting meeting = new Meeting();
       meeting.setCategory("c의 동창회");
       meeting.setMeetingcharge(3000);
       meeting.setMeetingdate("19/07/01");
       meeting.setMeetingdetail("c와함께 엤날 즐거운 동창회");
       meeting.setHostid(hostName);
       meeting.setMeetingplace("서울 비트캠프");
       meeting.setMeetingprogress(1);              //생성시 방진행
       meeting.setMeetingtitle(" 엤날 동창회으어");     
       Member member1 = memberrepo.findById(hostName).get(); // 방장추가
       //meeting.addMember(member1);
       member1.addMeeting(meeting);
       meetingrepo.save(meeting);

   }

   //모임방에 방원이 될 사람이 참여하기 버튼클릭시
   @PostMapping("/enter")
   public void enter(){
       Member m = new Member();
       m.setMemberid("a");         //m이라는 친구가
       enterrepo.enter(m, "1");  // 4번방에 추가
   }

   //연관테이블 레코드 삭제후 meeting테이블 레코드 삭제
   @DeleteMapping("/delete")
   public void deleteroom(){      
        meetingrepo.deleteRoom((long)1);
        // meetingrepo.deleteById((long)3);      
   }




   //해당 id에 해당하는 user의 meeting + meetingpeople 2개의 테이블 조인
   /* @GetMapping("getmeeting")
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
   } */












}