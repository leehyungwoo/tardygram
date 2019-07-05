package com.tardygram.web.repositories;

import com.tardygram.web.entities.*;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * CustomerRepository
 */

 @Repository
public interface CustomerRepository extends CrudRepository<Customer, Long>{
    // public CustomerDTO findByCustomerIdAndPassword(String customerId,String Password);
    
}