package com.tardygram.web.repositories;

import java.util.List;

import com.tardygram.web.entities.Member;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * MemberRepository
 */
@Repository
public interface MemberRepository extends CrudRepository<Member, String>{
    
   /*  @Query(
        value = "SELECT * FROM member WHERE memberid= :memberid",
        nativeQuery = true
    )
    public Iterable<Member> findByMemberid(@Param("memberid") String memberid);

    
    //테이블 join해서 2개의 테이블 리스트 출력
    @Query(
        value = "SELECT * FROM MEMBER JOIN MEETINGPEOPLE ON MEMBER.memberid = MEETINGPEOPLE.memberid2",
        nativeQuery = true    
    )
    public List<Object[]> joinlist(); */

    @Query(
        value = "update tbl_members set profileimage = :path where memberid=:id"
        , nativeQuery = true
    )
    public Member profileUpdate(String path, String id);
   
    @Query(
        value = "select money from tbl_members where memberid=:id"
        , nativeQuery = true
    )
    public int tardyCash(String id);
    
}