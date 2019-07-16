package com.tardygram.web.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.*;
import java.util.HashMap;
import java.util.List;

import com.tardygram.web.domain.MemberDTO;
import com.tardygram.web.entities.MeetingPeople;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.MeetingPeopleRepository;
import com.tardygram.web.repositories.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * MemberController
 */
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/member")
public class MemberController {
    @Autowired MemberRepository memberrepo;
    @Autowired MemberDTO memberdto;
    @Autowired MeetingPeopleRepository peopleRepo;
 

    //해당 memberid에 해당하는 레코드출력
    @PostMapping("getmember")
    public MemberDTO getMember(@RequestBody MemberDTO dto){
        System.out.println("겟매핑 테스트");
        System.out.println("프론트에서 전해준 memberid : " + dto.getMemberid());
        System.out.println("프론트에서 전해준 pwd : " + dto.getPwd());

        Iterable<Member> member = memberrepo.findByMemberid("test1");
        
        System.out.println("member? : " + member);
        System.out.println(member.toString());  
        
        return null;
    }

    //회원가입
    @GetMapping("putmember")
    public MemberDTO insertMember(){
        System.out.println("회원가입 test");

        Member member = new Member();
        member.setBirthday("931229");
        member.setEmail("kz1324@naver.com");
        member.setGender("남");       
        member.setMemberid("kz1324");
        member.setName("문호");
        member.setPhone("01022222222");
        member.setPwd("1234");
        memberrepo.save(member);
       
        return null;
    }

    //테이블 조인해서 리스트 출력
    @GetMapping("getmemberjoin")
    public MemberDTO getMemberjoin(){
        System.out.println("겟join매핑 테스트");
        Member m = new Member();
        //List<MeetingPeople> mlist =  m.getJointest();
        //System.out.println("list[0] : " + mlist.get(0));
        //System.out.println("list[1] : " + mlist.get(1));
        // String memberid = "kz1324";
        List<Object[]> result = memberrepo.joinlist();


        System.out.println("리저트타입"+result.getClass().getName());
        System.out.println("리저트타입2 : " + result);
        System.out.println("result.get(0) "+result.get(0)[0]); 
        System.out.println("Arrays.deepToString(result.get(0)) "+Arrays.deepToString(result.get(0))); 
     
        for(int i = 0; i <result.size(); i++){
            for(int j=0; j<result.get(i).length; j++){
                System.out.println(result.get(i)[j]);              
            }
            System.out.println("---------------");
        }
            
        return null;
    }


    
}