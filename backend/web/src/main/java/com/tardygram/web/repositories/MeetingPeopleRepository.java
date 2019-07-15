package com.tardygram.web.repositories;

import java.util.List;

import com.tardygram.web.entities.MeetingPeople;
import com.tardygram.web.entities.Member;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * MemberRepository
 */
@Repository
public interface MeetingPeopleRepository extends CrudRepository<MeetingPeople, Long>{


    
}