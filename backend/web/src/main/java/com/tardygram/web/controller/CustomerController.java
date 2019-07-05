package com.tardygram.web.controller;


import com.tardygram.web.domain.CustomerDTO;
import com.tardygram.web.repositories.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * CustomerController
 */
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600) //리액트포트
@RestController
@RequestMapping("/contents")

public class CustomerController {
    @Autowired CustomerRepository repo;
    @Autowired CustomerDTO customer;

    @PostMapping("/")
    public void post(@RequestBody String param ) {
        System.out.println("포스트 경로");
    }
    @GetMapping("/{id}")
    public void get(@PathVariable String param) {
        System.out.println("겟 경로");
    }
    @PutMapping("/")
    public void put() {
        System.out.println("풋 경로");
    }
    @DeleteMapping("/")
    public void delte() {
        System.out.println("딜리트 경로");

    }
}