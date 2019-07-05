package com.tardygram.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * HomeController
 */
@Controller
public class HomeController {
    @RequestMapping("/")
    public String name() {
        System.out.println("루트");
        return "index";
    }
    
}