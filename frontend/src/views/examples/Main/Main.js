import React, {Component} from "react";
import axios from 'axios'
import Header from "components/Headers/Header.js";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Table,
  Badge
} from "reactstrap";

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      memberid : localStorage.getItem('loginId')
    }
   
  }

  componentDidMount(){

    const headers = {
      'Content-Type': 'application/json',
    }
    
    
    axios.get(`/member/mainchk/${this.state.memberid}`, {headers:headers})
        .then(res =>{
          alert("통신성공")
          console.log(res)
        })
        .catch(res =>{
          alert('실패')
        })



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

        console.log("3",`현재위치와  목적지 사이의 거리는 ${rtn}M 입니다.`  );
        that.setState({
          dist : rtn,
        })
        that.CheckTardy()

      }, geoError, geoOptions)
      //목적지와 현위치랑 거리비교
    }  

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
        
    }
  }
}





  render() {

    return (
      <>
        <Header />  
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                  ASDFS
                    </div>
                  </Col>
                </Row>
               
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                     asdASD                  
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">                    
                      ASDF
                    <hr className="my-4" />    
                  </div>
                </CardBody>
              </Card>
            </Col>


            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">tardygram에 오신것을 환영합니다.</h3>
                    </Col>               
                  </Row>
                </CardHeader>
                <CardBody>
                    <h4 className="text-muted mb-4">
                      {this.state.memberid} (님) 다음 모임까지 135651시간 남았습니다. 
                    </h4>
                    <div>
                      asdfasdfasdf
                    </div>
                    <div>
                      asdfasdfasdf
                    </div>
                    

                    <hr className="my-4" />
                   
                  
                    
           
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      
      </>
    );
  }
}

export default Main;
