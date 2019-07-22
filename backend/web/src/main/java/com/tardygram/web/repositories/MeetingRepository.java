package com.tardygram.web.repositories;

import java.util.List;
import java.util.Map;

 
import com.tardygram.web.entities.Meeting;
 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
 
import org.springframework.stereotype.Repository;

/**
 * MemberRepository
 */
@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long>{

   /*  @Query(
        value = "select * from meeting JOIN meetingpeople ON meeting.roomno = meetingpeople.roomno2 WHERE memberid2=:memberid",
        nativeQuery = true    
    )
    public List<Object[]> joinlist(String memberid); */

    @Query(
        value = "delete from tbl_members_meetings where meetings_roomno= :roomno"
        , nativeQuery = true
    )
    public void deleteRoom(Long roomno);


    @Query(
        value = "select * from tbl_meeting m where m.meetingprogress=1 and m.hostid=:hostid "
        , nativeQuery = true
    )
    public List<Meeting> hostProgressEx(String hostid);


    @Query(
        value = "select * from tbl_meeting mt JOIN tbl_members_meetings mm ON mt.roomno=mm.meetings_roomno where mt.meetingprogress=0 and mt.hostid= mm.members_memberid and mm.members_memberid=:memberid"
        , nativeQuery = true
    )
    public List<Meeting> hostNotProgressEx(String memberid);


    @Query(
        value = "select * from tbl_meeting mt JOIN tbl_members_meetings mm ON mt.roomno=mm.meetings_roomno where mt.meetingprogress=1 and mt.hostid!= mm.members_memberid and mm.members_memberid=:memberid"
        , nativeQuery = true
    )
    public List<Meeting> MemberProgressEx(String memberid);


    @Query(
        value = "select * from tbl_meeting mt JOIN tbl_members_meetings mm ON mt.roomno=mm.meetings_roomno where mt.meetingprogress=0 and mt.hostid!= mm.members_memberid and mm.members_memberid=:memberid"
        , nativeQuery = true
    )
    public List<Meeting> MemberNotProgressEx(String memberid);

    //모임테이블 전체 조회
    @Query(
        value = "select * from tbl_meeting where meetingprogress=1"
        , nativeQuery = true
    )
    public List<Meeting> selectall();
}