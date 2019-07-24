package com.tardygram.web.controller;

import java.util.HashMap;
import java.util.List;

import com.tardygram.web.entities.Meeting;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.EnterRepository;
import com.tardygram.web.repositories.MeetingRepository;
import com.tardygram.web.repositories.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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


 
   @PostMapping(path = "/upload",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public void add(@RequestParam("file") MultipartFile file) {
    System.out.println("업로드");
    System.out.println(file);
    System.out.println(file.getOriginalFilename());
    // Member m = new Member();
    // m.setMemberid("test");

    
    // memberrepo.save(m);

}




   //방장이 모임방 개설
   @PostMapping("/create")
   public void insertMeeting(@RequestBody Meeting fd ){
    System.out.println(fd);

    Meeting meeting = new Meeting();
    fd.setMeetingprogress(1);
    Member member1 = memberrepo.findById(fd.getHostid()).get(); // 방장추가
    meeting.addMember(member1);
    member1.addMeeting(fd);
    meetingrepo.save(fd);

   }
   //모임방에 방원이 될 사람이 참여하기 버튼클릭시
   @PostMapping("/enter")
   public void enter(){
       Member m = new Member();
       m.setMemberid("moonho");         //m이라는 친구가
       enterrepo.enter(m, "5");  // 4번방에 추가
   }

   //연관테이블 레코드 삭제후 meeting테이블 레코드 삭제
   @DeleteMapping("/delete")
   public void deleteroom(){      
        meetingrepo.deleteRoom((long)1);
        // meetingrepo.deleteById((long)3);      
   }


    //모임방 전체출력
    @GetMapping("/selectall")
    public  ResponseEntity<HashMap<String, Object>> selectall(){
        System.out.println("모임방전체출력 컨트롤러 ");
        List<Meeting> mList = meetingrepo.selectall();
        System.out.println("mList : " + mList);
        HashMap map = new HashMap<>();
        map.put("mList", mList);

        return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
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