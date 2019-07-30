package com.tardygram.web.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.tardygram.web.entities.Room;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.EnterRepository;
import com.tardygram.web.repositories.RoomRepository;
import com.tardygram.web.repositories.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;

/**
* MemberController
*/
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/room")
public class RoomController {
   @Autowired MemberRepository memberrepo;
   @Autowired RoomRepository roomrepo;
   @Autowired EnterRepository enterrepo;

   private static String UPLOADED_FOLDER = "C:\\Users\\user\\Desktop\\tardygram\\frontend\\public\\image\\room\\";

   @GetMapping("/sucess")
   public String add() {
        System.out.println("성공시 컨트롤러"); 
        return "localhost:3000";       
    }
    
    //모임방 이미지 업로드
    @PostMapping(path="/upload/{id}",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public String roomUpload(@RequestParam("file") MultipartFile file, @PathVariable String id){
        
        System.out.println("파일업로드 컨트롤러");
        System.out.println("건너온 data : " + file);
        System.out.println("로그인한id : " + id);
        System.out.println("파일이름 : " + file.getOriginalFilename());

        try{
            String DbPath = "/image/room/" + file.getOriginalFilename();
            System.out.println("Dbpath : " + DbPath);
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);
            System.out.println("path : " + path);
            System.out.println(id);
            
            //roomrepo.roomUpdate(DbPath, id);
            return DbPath;
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return "No Img";                     
    }



   //방장이 모임방 개설
   @PostMapping(path="/create")
   public String insertRoom(@RequestBody Room data) {
        System.out.println("컨트롤러 도착");
        System.out.println("room : " + data);

        Room room = new Room();
        data.setRoomprogress(1);

        Member member = memberrepo.findById(data.getRoomhostid()).get();
        System.out.println("member : " + member);
        
        if(member.getMoney() >= data.getRoomcharge()){
            int tardycashe = member.getMoney()-data.getRoomcharge();
            member.addRoom(data);
            roomrepo.save(data);
            memberrepo.roomTardy(data.getRoomhostid(), tardycashe);
            roomrepo.insertPenaltyall(data.getRoomno(), data.getRoomcharge());
            return "방이 생성되었습니다.";
        } else{
            return "tardycash가 부족합니다.";
        }
   }


   //모임방에 방원이 될 사람이 참여하기 버튼클릭시  
   @PostMapping("/enter/{id}/{roomno}/{roomcharge}")
   public String enter(@PathVariable String id, @PathVariable int roomno, @PathVariable int roomcharge){
       System.out.println("enter컨트롤러 도착");
       System.out.println("id : " + id);
       System.out.println("roomno : " + roomno);
       System.out.println("roomcharge : " + roomcharge);
       
       int tardycashe = memberrepo.tardyCash(id);
       if(tardycashe >= roomcharge){
            Member m = new Member();
            m.setMemberid(id);
            enterrepo.enter(m, roomno);
            int money = tardycashe - roomcharge;
            memberrepo.roomTardy(id, money);
            roomrepo.insertPenaltyall(Long.parseLong(Integer.toString(roomno)), roomcharge);
            return "방에 참여하셨습니다.";
       }else {
           return "tardy캐시를 확인하세요";
       }
   }


    //연관테이블 레코드 삭제후 room테이블 레코드 삭제, 각인원들에게 돈다시 줘야함
    @DeleteMapping("/delete")
    public void deleteroom(){      
            roomrepo.deleteRoom((long)1);
            // roomrepo.deleteById((long)3);      
    }


    //모임방 전체출력
    @GetMapping("/selectall")
    public  ResponseEntity<HashMap<String, Object>> selectall(){
        System.out.println("모임방전체출력 컨트롤러 ");
        List<Room> mList = roomrepo.selectall();
        System.out.println("mList : " + mList);
        HashMap map = new HashMap<>();
        map.put("mList", mList);

        return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
    }


   //모임방 디테일
   @GetMapping("/selectone/{roomno}")
   public ResponseEntity<HashMap<String, Object>> selectone(@PathVariable Long roomno){
   // public void selectone(@PathVariable int roomno){
       System.out.println("selectone 컨트롤러 도착");
       System.out.println("roomno : " + roomno);
       Room selecthost = roomrepo.selecthost(roomno);
       List<Object []> selectuser = roomrepo.selectuser(roomno);
       List memberList = new ArrayList<>();
 
       selectuser.forEach(arr -> {
           HashMap<String,Object> memlist =new HashMap<>();
           String memberid = arr[0].toString();
           memlist.put("memberid", memberid);
      
           try{
               String profileimage = arr[1].toString();
               memlist.put("profileimage", profileimage);
               System.out.println(profileimage);
           }catch(Exception e){
               memlist.put("profileimage", "null");
           }
           memberList.add(memlist);
       });
 
       System.out.println("selectuser : " + selectuser);
       HashMap<String,Object> map =new HashMap<>();
       map.put("selecthost", selecthost);
       map.put("selectuser", memberList);
       // System.out.println(map);
        return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
   }












}