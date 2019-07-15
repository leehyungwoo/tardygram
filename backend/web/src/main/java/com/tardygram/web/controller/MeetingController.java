package com.tardygram.web.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.*;
import java.util.HashMap;
import java.util.List;

import com.tardygram.web.domain.MemberDTO;
import com.tardygram.web.entities.Meeting;
import com.tardygram.web.entities.MeetingPeople;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.MeetingPeopleRepository;
import com.tardygram.web.repositories.MeetingRepository;
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
@RequestMapping("/meeting")
public class MeetingController {
    @Autowired MemberRepository memberrepo;
    @Autowired MeetingPeopleRepository peopleRepo;
    @Autowired MeetingRepository meetingrepo;

 

    


    
}