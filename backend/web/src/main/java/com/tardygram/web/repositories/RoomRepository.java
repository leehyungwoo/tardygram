package com.tardygram.web.repositories;

import java.util.List;
import java.util.Map;

 
import com.tardygram.web.entities.Room;
 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
 
import org.springframework.stereotype.Repository;

/**
 * MemberRepository
 */
@Repository
public interface RoomRepository extends JpaRepository<Room, Long>{

   /*  @Query(
        value = "select * from room JOIN roompeople ON room.roomno = roompeople.roomno2 WHERE memberid2=:memberid",
        nativeQuery = true    
    )
    public List<Object[]> joinlist(String memberid); */

    @Query(
        value = "delete from tbl_members_rooms where rooms_roomno= :roomno"
        , nativeQuery = true
    )
    public void deleteRoom(Long roomno);


    @Query(
        value = "select * from tbl_room m where m.roomprogress=1 and m.roomhostid=:roomhostid "
        , nativeQuery = true
    )
    public List<Room> hostProgressEx(String roomhostid);


    @Query(
        value = "select * from tbl_room mt JOIN tbl_members_rooms mm ON mt.roomno=mm.rooms_roomno where mt.roomprogress=0 and mt.roomhostid= mm.members_memberid and mm.members_memberid=:memberid"
        , nativeQuery = true
    )
    public List<Room> hostNotProgressEx(String memberid);


    @Query(
        value = "select * from tbl_room mt JOIN tbl_members_rooms mm ON mt.roomno=mm.rooms_roomno where mt.roomprogress=1 and mt.roomhostid!= mm.members_memberid and mm.members_memberid=:memberid"
        , nativeQuery = true
    )
    public List<Room> MemberProgressEx(String memberid);


    @Query(
        value = "select * from tbl_room mt JOIN tbl_members_rooms mm ON mt.roomno=mm.rooms_roomno where mt.roomprogress=0 and mt.roomhostid!= mm.members_memberid and mm.members_memberid=:memberid"
        , nativeQuery = true
    )
    public List<Room> MemberNotProgressEx(String memberid);

    //모임테이블 전체 조회
    @Query(
        value = "select * from tbl_room where roomprogress=1"
        , nativeQuery = true
    )
    public List<Room> selectall();
    //내가 개설한 현재진행중인 방의 count
    @Query(
        value = "select count(*) from tbl_room where roomhostid=:id and roomprogress=1"
        , nativeQuery = true
    )
    public int HostCount(String id);

    //내가 참여중인 현재진행중인 방의 count
    @Query(
        value = "select count(*) from tbl_room mt JOIN tbl_members_rooms mm ON mt.roomno=mm.rooms_roomno where mt.roomhostid != mm.members_memberid and mm.members_memberid=:id and mt.roomprogress=1"
        , nativeQuery = true
    )
    public int MemberCount(String id);


    //프로필 이미지 업데이트 메소드
    @Query(
        value = "update tbl_room set roomphoto = :path where roomhostid=:id"
        , nativeQuery = true
    )
    public Room roomUpdate(String path, String id);
}