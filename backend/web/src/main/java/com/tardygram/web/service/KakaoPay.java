package com.tardygram.web.service;

import java.net.URI;
import java.net.URISyntaxException;

import com.tardygram.web.domain.KakaoPayApprovalVO;
import com.tardygram.web.domain.KakaoPayReadyVO;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import lombok.extern.java.Log;

@Service
@Log
public class KakaoPay {
 
    private static final String HOST = "https://kapi.kakao.com";
    
    private KakaoPayReadyVO kakaoPayReadyVO;
    private KakaoPayApprovalVO kakaoPayApprovalVO;
    
    public String kakaoPayReady() {
 
        RestTemplate restTemplate = new RestTemplate();
 
        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "e523b4aefc19df61c38d857920fc96a3");
        headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
        
        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");  //가맹점코드, 10자, 테스트버전아닐시 카카오한테서 cid받아야함
        params.add("partner_order_id", "1001");    //가맹점 주문번호, 최대100자
        params.add("partner_user_id", "moonho");   //가맹점 회원id, 최대100자
        params.add("item_name", "갤럭시S9");        //상품명, 최대100자
        params.add("quantity", "1");    //상품수량, integer타입
        params.add("total_amount", "100");  //상품총액 integer타입
        params.add("tax_free_amount", "100");   //상품비과세 금액, integer타입
        params.add("approval_url", "http://localhost:9000/kakaoPaySuccess");    //결제성공시 redirect url
        params.add("cancel_url", "http://localhost:9000/kakaoPayCancel");       //결제취소시 redirect url
        params.add("fail_url", "http://localhost:9000/kakaoPaySuccessFail");    //결제실패시 redirect url
        //params.add("pg_token", "http://naver.com");
 
         HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);
 
        try {
            kakaoPayReadyVO = restTemplate.postForObject(new URI(HOST + "/v1/payment/ready"), body, KakaoPayReadyVO.class);
            
            log.info("" + kakaoPayReadyVO);
            
            //kakaoPayReadyVO.setNext_redirect_pc_url("/localhost:3000");
            //요청한 클라이언트가 pc 웹일 경우 redirect. 카카오톡으로 TMS를 보내기 위한 사용자입력화면이으로 redirect
            return kakaoPayReadyVO.getNext_redirect_pc_url(); 
 
        } catch (RestClientException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (URISyntaxException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
        return "/pay";
        //return "/localhost:3000";
        
    }


    public KakaoPayApprovalVO kakaoPayInfo(String pg_token) {
 
        log.info("KakaoPayInfoVO............................................");
        log.info("-----------------------------");
        
        RestTemplate restTemplate = new RestTemplate();
 
        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "e523b4aefc19df61c38d857920fc96a3");
        headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
 
        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");
        params.add("tid", kakaoPayReadyVO.getTid()); //결제 고유 번호 20자 
        params.add("partner_order_id", "1001");
        params.add("partner_user_id", "gorany");
        params.add("pg_token", "http://naver.com");
        params.add("total_amount", "2100");
        //params.add("pg_token", "http://naver.com");

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);
        
        try {
            kakaoPayApprovalVO = restTemplate.postForObject(new URI(HOST + "/v1/payment/approve"), body, KakaoPayApprovalVO.class);
            log.info("" + kakaoPayApprovalVO);
          
            return kakaoPayApprovalVO;
        
        } catch (RestClientException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (URISyntaxException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
        return null;
    }
    
}
 