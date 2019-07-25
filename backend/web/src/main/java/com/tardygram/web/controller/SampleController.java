package com.tardygram.web.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.tardygram.web.service.KakaoPay;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import lombok.Setter;
import lombok.extern.java.Log;


@CrossOrigin("http://localhost:3000")
@Log
@RestController
public class SampleController {
    // document.getElementsByClassName("link_gnb")[1].click()
    // document.getElementById("userPhone").value="01055754786";
    // document.getElementById("userBirth").value="931229"

    @Setter(onMethod_= @Autowired)
    private KakaoPay kakaopay;

    @GetMapping("/kakaoPay")
    public void kakaoPayGet() {
        
    }
    
    @PostMapping("/kakaoPay")
    public String kakaoPay(@RequestBody HashMap<String, String> data,  HttpSession session) {
        // System.out.println("kakaopay 컨트롤러 매핑");
        // System.out.println("data : " + data);
        // System.out.println("amount : " + data.get("amount"));
        // System.out.println("memberid : " + data.get("memberid"));


        session.setAttribute("amount", data.get("amount"));
        session.setAttribute("memberid", data.get("memberid"));
        System.out.println("여기1");
        return kakaopay.kakaoPayReady(data);
    }
    
    @GetMapping("/kakaoPaySuccess")
    public void kakaoPaySuccess(@RequestParam("pg_token") String pg_token, Model model, HttpSession session) {
        System.out.println("성공시 컨트롤러");
        //log.info("kakaoPaySuccess pg_token : " + pg_token);
 
        String amount = (String)session.getAttribute("amount");
        System.out.println("성공컨트롤러에서의 amount : " +amount);
        String memberid = (String)session.getAttribute("memberid");
        System.out.println("성공컨트롤러에서의 memberid : " + memberid);

        model.addAttribute("info", kakaopay.kakaoPayInfo(pg_token, amount, memberid));
        
    }
    
}
