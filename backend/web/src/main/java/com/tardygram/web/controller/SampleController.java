package com.tardygram.web.controller;

import java.lang.ProcessBuilder.Redirect;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.tardygram.web.domain.KakaoPayApprovalVO;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.MemberRepository;
import com.tardygram.web.service.KakaoPay;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import lombok.Data;
import lombok.Setter;
import lombok.extern.java.Log;


@CrossOrigin("http://localhost:3000")
@Log
@RestController
@Data
public class SampleController {
    // document.getElementsByClassName("link_gnb")[1].click()
    // document.getElementById("userPhone").value="01055754786";
    // document.getElementById("userBirth").value="931229"

    private String amount = null;
    private String memberid = null;

    @Autowired MemberRepository memberrepo;

    @Setter(onMethod_= @Autowired)
    private KakaoPay kakaopay;

    @GetMapping("/kakaoPay")
    public void kakaoPayGet() {
        
    }
    
    @PostMapping("/kakaoPay")
    public String kakaoPay(@RequestBody HashMap<String, String> data) {
        // System.out.println("kakaopay 컨트롤러 매핑");
        // System.out.println("data : " + data);
        // System.out.println("amount : " + data.get("amount"));
        // System.out.println("memberid : " + data.get("memberid"));

        amount = data.get("amount");
        memberid = data.get("memberid");
        System.out.println(amount);
        return kakaopay.kakaoPayReady(data);
    }
    
    @GetMapping("/kakaoPaySuccess")
    public RedirectView  kakaoPaySuccess(@RequestParam("pg_token") String pg_token) {
        System.out.println("성공시 컨트롤러");
        //log.info("kakaoPaySuccess pg_token : " + pg_token);
        System.out.println("전역에있는 amount : " + this.getAmount());
       
        kakaopay.kakaoPayInfo(pg_token, this.getAmount(), this.getMemberid());
        
        int money = memberrepo.tardyCash(this.getMemberid());
        Member m = memberrepo.findById(this.getMemberid()).get();
        m.setMoney(money + Integer.parseInt(this.getAmount()));
        memberrepo.save(m);


        return new RedirectView("http://localhost:3000/admin/user-profile");
        
    }
    
}

 