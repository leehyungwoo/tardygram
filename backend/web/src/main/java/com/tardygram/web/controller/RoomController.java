package com.tardygram.web.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
            //여기 바꾸기 memberrepo.profileUpdate(DbPath, id);
            return DbPath;
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return "No Img";                     
    }




   //방장이 모임방 개설
   @PostMapping("/create")
   public void insertRoom(@RequestBody Room fd ){
    System.out.println(fd);

    Room room = new Room();
    fd.setRoomprogress(1);
    Member member1 = memberrepo.findById(fd.getRoomhostid()).get(); // 방장추가
    room.addMember(member1);
    member1.addRoom(fd);
    roomrepo.save(fd);

   }
   //모임방에 방원이 될 사람이 참여하기 버튼클릭시
   @PostMapping("/enter")
   public void enter(){
       Member m = new Member();
       m.setMemberid("jmh1753");         //m이라는 친구가
       enterrepo.enter(m, "2");  // 4번방에 추가
   }

   //연관테이블 레코드 삭제후 room테이블 레코드 삭제
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

   //해당 id에 해당하는 user의 room + roompeople 2개의 테이블 조인
   /* @GetMapping("getroom")
   public void getroom(){
       System.out.println("join테스트");
       List<Object[]> result = roomrepo.joinlist("kz1324");
       System.out.println("result.get(0) "+result.get(0));
       System.out.println("Arrays.deepToString(result.get(0)) "+Arrays.deepToString(result.get(0)));
       for(int i = 0; i <result.size(); i++){
           for(int j=0; j<result.get(i).length; j++){
               System.out.println(result.get(i)[j]);
           }
           System.out.println("---------------");
       }
   } */












}