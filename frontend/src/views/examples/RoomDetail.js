
import React from "react";
import axios from 'axios'

import Moment from 'react-moment';
import 'moment-timezone';
import RoomUpload from '../../components/Upload/RoomUpload'
// import Crown from '../../components/Upload/ProfileImage/crown.png'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Table,
  Media, Badge
 
 
} from "reactstrap";
// core components
 
 


class Profile extends React.Component {

  constructor(props){
    super(props)
    this.state={
      roomno:"",
      roomtitle:null,
      roomdetail:null,
      roomdate:null,
      roomplace:null,
      roomcategory:null,
      roomprogress:null,
      roomcharge:null,
      roomlatitude:null,
      roomlongitude:null,
      roomphoto:null,
      roomhostid:null,
      roompwd:null,
      selectuser:[],
      flag:true,
      roompenaltyall:null,
      latitude : "",
      longitude : "",
      distance : false,
      dist:100,
      roomBgimage:""
    }
  }
 

  componentDidMount(){


    console.log(this.props.match.params.id)
    var len =this.state.selectuser.length;
    this.setState({
      roompenaltyall:this.state.roompenaltyall*len
    })
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.get(`/room/selectone/${this.props.match.params.id}`,  {headers:headers})
      .then(res=>{
        console.log(res.data)
    let {roomno,
        roomtitle,
        roomdetail,
        roomdate,
        roomplace,
        roomcategory,
        roomprogress,
        roomcharge,
        roomlatitude,
        roomlongitude,
        roomphoto,
        roomhostid,
        roompwd,
        roompenaltyall
    } = res.data.selecthost;
    console.log(res.data.selectuser)
       let { selectuser} = res.data;
        console.log(selectuser)
        this.setState({
          roomno,
          roomtitle,
          roomdetail,
          roomdate,
          roomplace,
          roomcategory,
          roomprogress,
          roomcharge,
          roomlatitude,
          roomlongitude,
          roomphoto,
          roomhostid,
          roompwd,
          selectuser,
          roompenaltyall
        });
        console.log(this.state)

        var that = this;
        this.state.selectuser.forEach((user)=>{
          console.log(user)
          console.log(user.memberid)
          console.log(user.memberid)
          if(user.memberid === localStorage.getItem("loginId")){
            that.setState({
              flag:false
            })
          }
        })
        // function relayout() {    
            
        //     // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
        //     // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다 
        //     // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
        //     map.relayout();
        // }
      
        
        const kakao = window.kakao
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(this.state.roomlatitude, this.state.roomlongitude), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        var markerPosition  = new kakao.maps.LatLng(this.state.roomlatitude, this.state.roomlongitude); 
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        var iwContent = '<div style="padding:3px; target=_blank; color:blue">'+this.state.roomplace+'</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          iwPosition = new kakao.maps.LatLng(this.state.roomlatitude, this.state.roomlongitude); //인포윈도우 표시 위치입니다
        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          position : iwPosition,
          content : iwContent
        });
        infowindow.open(map, marker);


      })
      .catch(res=>{
        alert("통신실패")
      })



  }
  // imageTag=()=>{
  //   if(this.state.roomBgimage){
      
  //   }
  // }
  // reciveEmit=(type)=>{
  //   console.log(type)
  //   this.setState({
  //     roomBgimage:type
  //   })
  //   this.imageTag();
  // }
  joinBtn=(e)=>{
  
    if(this.state.roomhostid !== localStorage.getItem("loginId")){
      console.log("버튼",this.state.flag)
        if(this.state.flag){
          return (
            <Button className="float-right" color="default" href="#pablo" size="sm" onClick={this.enterbtn}>
            참여하기
            </Button> 
            )
          }else{
            return(
            <Button className="float-right" color="default" href="#pablo" size="sm" onClick={this.enterbtn} disabled>
            참여하기
            </Button>
            )
          }
    }else{
      return(
        <Button className="float-right" color="default" href="#pablo" size="sm" onClick={this.enterbtn} disabled>
        참여하기
        </Button>
      )
    }
  }
 
  enterbtn = e => {
    e.preventDefault()
    alert('참여버튼클릭');

    const headers = {
      'Content-Type': 'application/json',
    }
    
    let id = localStorage.getItem("loginId")   
    axios.post(`/room/enter/${id}/${this.state.roomno}/${this.state.roomcharge}`, {headers:headers})
        .then(res =>{
          alert("통신성공")
          if(res.data.status === "00"){
            alert(res.data.msg)
      
       
            console.log('m2나와 : ' +res.data.m2.memberid)
            console.log('m2 이미지 : ' + res.data.m2.profileimage)
            console.log(this.state.roompenaltyall)
            this.setState({
              selectuser:[...this.state.selectuser,{tardystate:res.data.m2.tardystate,profileimage:res.data.m2.profileimage,memberid:res.data.m2.memberid}],
              flag:false,
              roompenaltyall:this.state.roompenaltyall+this.state.roomcharge
            })

            console.log(this.state.selectuser)
         

          }else{
            alert(res.data.msg)
            this.props.history.push("/admin/user-profile")
          }
        })
        .catch(res =>{
          alert('실패')
        })
  }



  //여기는 거리계산
  calcDistance=(roomno, memberid,tardystate)=>{
    if(tardystate==="arrived"){
      return alert("이미 도착 하셨습니다")
   }
    console.log("0", roomno)
    console.log("0", memberid)
    console.log("1",this)
    let that = this
    var startPos;
    var geoOptions = {
      enableHighAccuracy: true
    }
    
    var geoError = function(error) {
      console.log("2",'Error occurred. Error code: ' + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
    };
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
        startPos = position;
        that.setState({
          latitude: startPos.coords.latitude,
          longitude: startPos.coords.longitude
        })
        console.log("2","that.setState 실행");
  
        var EARTH_R, Rad, radLat1, radLat2, radDist; 
        var distance, ret;
    
        EARTH_R = 6371000.0;
        Rad 	= Math.PI/180;
        radLat1 = Rad * that.state.longitude;
        console.log(that.state.longitude)
        radLat2 = Rad * that.state.roomlongitude;   
        //목적지 경도
        radDist = Rad * (that.state.latitude - that.state.roomlatitude);
        //목적지 위도
        distance = Math.sin(radLat1) * Math.sin(radLat2);
        distance = distance + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radDist);
        ret 	= EARTH_R * Math.acos(distance);
    
        var rtn = Math.round(Math.round(ret) / 1000);
         if(rtn <= 0)
         {
           rtn = Math.round(ret);
          //  +" m"
         }
        //  else
        //  {
        //    rtn = rtn + " km";
        // }
        // ${place_name}
        console.log("3",`현재위치와  목적지 사이의 거리는 ${rtn}M 입니다.`  );
        that.setState({
          dist : rtn,
        })
        that.CheckTardy()

      }, geoError, geoOptions)
      //목적지와 현위치랑 거리비교
    }  

   
}
reciveEmit=()=>{
  console.log("자식이 부모를 건드는")
}

//여기는 시간체크하는곳
CheckTardy = () =>{
  // this.getLocation();
  // this.calcDistance()

  console.log("4","체크타디 실행");
  console.log(this.state.longitude);
  console.log(this.state.latitude);
  // 1. 거리 확인

  console.log(`거리값은 : ${this.state.dist}`)
  if(this.state.dist < 500){
  this.distance  =	true
  let gotTime = new Date (this.state.roomdate)
  console.log(`도착해야하는 시간은 : ${gotTime}`)
  //약속시간
  let nowTime = new Date();
  //현재시간
  console.log(`현재시간 : ${nowTime}`)
  console.log(`약속시간 : ${gotTime}`)
  let myTime = gotTime.getTime() - nowTime.getTime()
    if(myTime > 1){
      alert("도착하셨습니다.")
      alert(this.state.roomno)
      alert(localStorage.getItem('loginId'))
        const headers = {
          'Content-Type': 'application/json',
        }
        // let data = {
        //   roomno : this.state.roomno,
        //   memberid : localStorage.getItem('loginId')
        // }
        axios.put(`/room/checkroom/${localStorage.getItem('loginId')}`, {headers:headers})
              .then(res =>{
                alert('성공')   

                // {tardystate:"waiting",profileimage:res.data.m2.profileimage,memberid:res.data.m2.memberid}
                var id = localStorage.getItem("loginId")                
                var that = this;
                this.state.selectuser.forEach((user,index)=>{

                    if(user.memberid === id){
                                               
                        var makeindex =that.state.selectuser;
            
                        makeindex[index].tardystate = res.data

                        that.setState({selectuser:[...that.state.selectuser]})    
                      
                    }


                })
                
                
               
              })
              .catch(res =>{
                alert('실패')
              })
    }else{
      alert("지각이에요.")
    }
  }else{
    alert("도착 후에 눌러주세요")
  }

  


}



  render() {
    return (
      <>
  
  <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">Hello Jesse</h1>
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can see the progress you've
                  made with your work and manage your projects or assigned tasks
                </p>
          
                  <RoomUpload keyparams={this.props.match.params.id} emit={this.reciveEmit} ></RoomUpload>
                
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="mt--7" fluid>
            <Row>
          
                <Col className="order-xl-1" xl="8">
                <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                            <Col className="text-left" xs="12">
                            <Button className="float-left" color="info" href="#pablo" size="sm">
                              모임이름
                            </Button>
                            <h5 className="float-left text-muted mb-3" style={{lineHeight:"2"}}>
                                {this.state.roomtitle} 
                            </h5>
                           {this.joinBtn()}
                   
                            </Col>
                            <Col className="text-left" xs="12">
                            <Button className="float-left" color="success" href="#pablo" size="sm">
                                모임시간
                              </Button>
                            <h5 className="float-left text-muted mb-3" style={{lineHeight:"2"}}>                           
                            <Moment format="YYYY년 M월 DD일 h:mm">{this.state.roomdate}</Moment>
                            </h5>
                            </Col>
                            
                            <Col className="text-left" xs="12">
                            <Button className="float-left" color="danger" href="#pablo" size="sm">
                              벌금총액
                            </Button>
                            <h5 className="float-left text-muted mb-3" style={{lineHeight:"2"}}>
                                {this.state.roompenaltyall} 원
                            </h5>
                            </Col>


                            {/* {this.state.selectuser.map((contact,i)=>{
                              return(
                                  <tr key={i}>
                                      <td>{contact.memberid}</td>
                                      <td>{contact.profileimage}</td>                             
                                  </tr>
                              );
                            })}  */}




                            <Table
                              className="align-items-center table "
                              responsive
                            >
                              <thead className="thead">
                                <tr>
                                  <th scope="col">users</th>
                                  <th scope="col">벌금액수</th>
                                  <th scope="col">상태</th>
                                  <th scope="col" />
                                </tr>
                              </thead>
                              <tbody>
          
                               {this.state.selectuser.map((user,index)=>{
                                 console.log(user)
                                  return(<tr key={index}>
                                    <th scope="row">
                                      <Media className="align-items-center">
                                        <a
                                          className="avatar rounded-circle mr-3"
                                          href="#pablo"
                                          onClick={e => e.preventDefault()}
                                        >
                                          {/* {user.profileimage} */}
                                          <img
                                            alt="..."
                                            src={user.profileimage}
                                          />
                                        </a>
                                        <Media>
                                          <span className="mb-0 text-sm">
                                           {user.memberid}
                                          </span>
                                        </Media>
                                      </Media>
                                    </th>
                                    <td>{this.state.roomcharge} 원</td>
                                    <td>
                                      <Badge color="" className="badge-dot mr-4">
                                      {(()=>{if(user.tardystate === "arrived"){
                                        return (<i className="bg-success" />)
                                      }else{
                                        return (<i className="bg-warning" />)
                                      }})()}
                                        {user.tardystate}
                                      </Badge>
                                    </td>
                                    <td className="text-right">
                                      {(()=>{
                                        if(localStorage.getItem("loginId") === user.memberid){

                                       
                                            return (<Button className="float-right" color="default"  size="sm" onClick={(e) => this.calcDistance(this.state.roomno, user.memberid,user.tardystate)}>확인</Button>)


                                          }
                                      })()}
                                    
                                    </td>
                                </tr>
                                  )
                               })}
                             </tbody>
        </Table>
        


                        </Row>
                    </CardHeader>
                   
                </Card>
                </Col>
                <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                <Card className="card-profile shadow">

                    <CardBody className="pt-0 pt-md-4">

                        <div className="text-center">
                           <Col xs="12">
                            <Button className="float-left" color="primary" href="#pablo" size="sm">
                              모임장소
                            </Button>
                            <h5 className="float-left text-muted mb-3" style={{lineHeight:"2"}}>
                                {this.state.roomplace}
                            </h5>
                            </Col>
                            {/* <SearchMap height="300px"></SearchMap> */}

                            <div id="map" style={{width: "100%", height: "350px", position: "relative", overflow: "hidden"}}></div>
                            {/* ,position:"relative",overflow:"hidden" */}

                        </div>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            
        </Container>
      </>
    );
  }
}

export default Profile;
