package com.tardygram.web.repositories;

import com.tardygram.web.entities.Member;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * MemberRepository
 */
@Repository
public interface MemberRepository extends CrudRepository<Member, Long>{

    @Query(
        value = "SELECT * FROM member WHERE memberid= :memberid",
        nativeQuery = true
    )
    public Iterable<Member> findByMemberId(@Param("memberid") String memberid);


    
    //public Iterable<Member> findByMemberJoin(); 
    
}