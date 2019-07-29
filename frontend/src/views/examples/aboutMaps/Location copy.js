import React from "react";
import ReactDOM from "react-dom";
import Moment from 'react-moment';
import 'moment-timezone';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
  } from "reactstrap";
  let latitude = 0;
  let longitude = 0;
  let that = this;

  let rtn = 0;
  class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      latitude : "",
      longitude : "",
      distance : false,
      dist:2,
      aTime : false,
      }
  }
  
  getCurrentPosition = () => {
    const geolocation = navigator.geolocation;

    geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      () => {
        console.log(new Error("Permission denied"));
      }
    );
  };
  calcDistance=()=>{

    //목적지와 현위치랑 거리비교
    var EARTH_R, Rad, radLat1, radLat2, radDist; 
    var distance, ret;

    EARTH_R = 6371000.0;
    Rad 	= Math.PI/180;
    radLat1 = Rad * longitude;
    radLat2 = Rad * 126.98631090000005;
    //126.99 목적지 경도
    radDist = Rad * (latitude - 37.563398);
    //37.563 목적지 위도
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
    console.log(`현재위치와  목적지 사이의 거리는 ${rtn}M 입니다.`  );

    //place_name 목적지 
    return  this.state.dist = rtn;
}
CheckTardy = () =>{
  this.getLocation();
  console.log(longitude);
  console.log(latitude);
  this.calcDistance()
  // 1. 거리 확인

  console.log(`거리값은 : ${this.state.dist}`)
  if(this.state.dist < 50){
  this.distance  =	true
  let gotTime = new Date ("2019-07-27T19:40+0900")
  //약속시간
  let nowTime = new Date();
  //현재시간
  console.log(`현재시간 : ${nowTime}`)
  console.log(`약속시간 : ${gotTime}`)
  let myTime = gotTime.getTime() - nowTime.getTime()
    if(myTime > 1){
      alert("도착하셨습니다.")
    }else{
      alert("지각이에요.")
    }
  }else{
    alert("도착 후에 눌러주세요")
  }
}
myLocation = (a,b) =>{
  this.setState({
    latitude : this.a,
    longitude : this.b
  })  
  console.log(this.latitude)
  console.log(this.longitude)
}
getLocation= () => {
  if (navigator.geolocation) { // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(function(position) {
      alert(position.coords.latitude + ' ' + position.coords.longitude);
      that.setState({
        latitude: position.coords.latitude,
        longitude : position.coords.longitude
      })
      that.props.emit(that.state)

      console.log(this)

      
    }, function(error) {
      console.error(error);
    }, {
      enableHighAccuracy: false,
      maximumAge: 0,
      timeout: Infinity
    }     
    );
  } else {
    alert('GPS를 지원하지 않습니다');
  }
}



  //  <Location />
  render() {
    return (
      <div className="App">
           약속 시간은
          <Moment fromNow>2019-07-27T15:40+0900</Moment>
          <br></br>
          <Button 
          onClick={this.CheckTardy}>
            도착했습니다!!                
          </Button>      
        </div>
      
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Location />, rootElement);

export default Location
