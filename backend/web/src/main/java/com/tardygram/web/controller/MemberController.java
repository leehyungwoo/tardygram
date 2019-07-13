package com.tardygram.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.tardygram.web.domain.MemberDTO;
import com.tardygram.web.entities.MeetingPeople;
import com.tardygram.web.entities.Member;
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
@RequestMapping("/member")
public class MemberController {
    @Autowired MemberRepository memberrepo;
    @Autowired MemberDTO memberdto;
 
    /* @GetMapping("/get")
    public List get() {
        //List<HashMap>
        System.out.println("겟");
        Iterable<Member> entities= repo.findByMemberName("이정록");
        System.out.println(entities);
        System.out.println(" 엔티티");
        int index = 0 ;
        ArrayList<HashMap> result = new ArrayList<>();
       
        for(Member g : entities){
            HashMap<Number,Object> map = new HashMap<>();
    
            map.put(index++,g);
            result.add(map);
        }

        System.out.println(result);
        return result;
    } */
    @GetMapping("getmember")
    public MemberDTO getMember(){
        System.out.println("겟매핑 테스트");
        Iterable<Member> member = memberrepo.findByMemberId("kz1324");
        System.out.println("member : " + member);
        System.out.println(member.toString());  
        //member에 담긴 내용을 dto에 다시 set
        return null;
    }

    @GetMapping("putmember")
    public MemberDTO insertMember(){
        System.out.println("회원가입 test");
        Member member = new Member();
        member.setBirthday("931229");
        member.setEmail("test1@test");
        member.setGender("남");       
        member.setMemberid("test");
        member.setName("정문호1");
        member.setPhone("01000000000");
        member.setPwd("1234");
        memberrepo.save(member);
        
        return null;
    }

    @GetMapping("getmemberjoin")
    public MemberDTO getMemberjoin(){
        System.out.println("겟join매핑 테스트");
        Member member = new Member();
        //ArrayList<HashMap> list = new ArrayList<>();
        List<MeetingPeople> list = member.getJointest();
        for(MeetingPeople m : list){
            list.add(m);
        }
        System.out.println(list.get(0));
        System.out.println(list.get(1));
        //System.out.println("member : " + member);
        //System.out.println(member.toString());  
        //member에 담긴 내용을 dto에 다시 set
        return null;
    }
}