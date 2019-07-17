package com.tardygram.web.controller;

import com.tardygram.web.service.KakaoPay;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
    public String kakaoPay() {
        System.out.println("kakaopay 컨트롤러 매핑");
        //log.info("kakaoPay post............................................");
        System.out.println("리턴값 : " + kakaopay.kakaoPayReady());
        System.out.println("redirect:" + kakaopay.kakaoPayReady());
        //return "redirect:" + kakaopay.kakaoPayReady();
        return kakaopay.kakaoPayReady();
    }
    
    @GetMapping("/kakaoPaySuccess")
    public void kakaoPaySuccess(@RequestParam("pg_token") String pg_token, Model model) {
        log.info("kakaoPaySuccess get............................................");
        log.info("kakaoPaySuccess pg_token : " + pg_token);
        
        model.addAttribute("info", kakaopay.kakaoPayInfo(pg_token));
        
    }
    
}
