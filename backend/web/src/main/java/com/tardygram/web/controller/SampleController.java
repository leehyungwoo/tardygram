package com.tardygram.web.controller;

import java.util.HashMap;
import java.util.Map;

import com.tardygram.web.domain.KakaoPayApprovalVO;
import com.tardygram.web.service.KakaoPay;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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


    @Setter(onMethod_= @Autowired)
    private KakaoPay kakaopay;

    @GetMapping("/kakaoPay")
    public void kakaoPayGet() {
        
    }
    
    @PostMapping("/kakaoPay")
    public String kakaoPay(@RequestBody HashMap<String, String> data) {
        System.out.println("kakaopay 컨트롤러 매핑");
        System.out.println("data : " + data);
        System.out.println("amount : " + data.get("amount"));
        System.out.println("memberid : " + data.get("memberid"));
        //return "redirect:" + kakaopay.kakaoPayReady();
        return kakaopay.kakaoPayReady(data);
    }
    
    @GetMapping("/kakaoPaySuccess")
    public void kakaoPaySuccess(@RequestParam("pg_token") String pg_token, Model model) {
        System.out.println("성공시 컨트롤러");
        log.info("kakaoPaySuccess pg_token : " + pg_token);

        System.out.println("성공시 컨트롤러 마지막");
        model.addAttribute("info", kakaopay.kakaoPayInfo(pg_token));
        
    }
    
}
