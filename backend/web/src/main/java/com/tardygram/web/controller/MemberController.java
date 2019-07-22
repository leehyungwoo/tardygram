package com.tardygram.web.controller;


import java.util.HashMap;
import java.util.List;
 

import javax.transaction.Transactional; 
import com.tardygram.web.entities.Meeting;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.MeetingRepository;
import com.tardygram.web.repositories.MemberRepository;
 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * MemberController
 */
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/member")
@Transactional
public class MemberController {
    @Autowired
    MemberRepository memberrepo;
    @Autowired
    MeetingRepository meetingrepo;

    // 회원가입
    @PostMapping("/join")
    public ResponseEntity<Member> insertMember(@RequestBody Member joinFd) {
        return new ResponseEntity<Member>(memberrepo.save(joinFd), HttpStatus.OK);
    }

    // 회원탈퇴
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteMember() {
        // Member m = new Member();
        // m.setMemberid("memberid");
        memberrepo.deleteById("c");
        return new ResponseEntity<String>("되어주세요", HttpStatus.OK);
    }

    // 로그인
    @PostMapping("/select")
    public ResponseEntity<HashMap<String,String>> selectone(@RequestBody Member loginFd) {
        HashMap<String,String> map =new HashMap<>();
        try{
            Member repoData = memberrepo.findById(loginFd.getMemberid()).get();
            memberrepo.findById(loginFd.getMemberid());
             System.out.println("아이디 통과");
            if (loginFd.getPwd().equals(repoData.getPwd())) {
                System.out.println("비번 통과");
                map.put("status","sucess");
                map.put("dataid",loginFd.getMemberid());
                return new ResponseEntity<HashMap<String,String>>(map, HttpStatus.OK);
            } else {
                System.out.println("비번 실패");
                map.put("status","fail");
                map.put("msg","비밀번호가 틀렸습니다");
                return new ResponseEntity<HashMap<String,String>>(map, HttpStatus.OK);
            }
        } catch(Exception e) {
            System.out.println("실패");
            map.put("status","fail");
            map.put("msg","아이디 또는 비밀번호가 틀렸습니다");
            return new ResponseEntity<HashMap<String,String>>(map, HttpStatus.OK);
        }

    }

    // 마이페이지 정보 보여주기
    @GetMapping("/mypage/{id}")
    public ResponseEntity<HashMap<String, Object>> mypage(@PathVariable String id) {
        System.out.println("mypage 컨트롤러");
        System.out.println("프론트에서 오는 id : " + id);
        HashMap<String, Object> map = new HashMap<>();
        // c가왔을때
        // 1. 그냥회원내용
        System.out.println("1번 hostProgressEx: " + memberrepo.findById(id).get());
        Member m1 = memberrepo.findById(id).get();
        map.put("uInfo", m1);

        // 2. 방장, 진행O
        List<Meeting> m2 = meetingrepo.selectMypage2(id);
        map.put("hostProgressEx", m2);
        System.out.println("2번 hostProgressEx: " + meetingrepo.selectMypage2(id));

        // 3. 방장, 진행X
        System.out.println("3번 hostNotProgressEx: " + meetingrepo.selectMypage3(id));
        List<Meeting> m3 = meetingrepo.selectMypage3(id);
        map.put("hostNotProgressEx", m3);

        // 4. 방원, 진행O
        System.out.println("4번 MemberProgressEx: " + meetingrepo.selectMypage4(id));
        List<Meeting> m4 = meetingrepo.selectMypage4(id);
        map.put("MemberProgressEx", m4);

        // //5. 방원, 진행X
        System.out.println("5번 MemberNotProgressEx: " + meetingrepo.selectMypage5(id));
        List<Meeting> m5 = meetingrepo.selectMypage5(id);
        map.put("MemberNotProgressEx", m5);
 
        return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);

    }

}