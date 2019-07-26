import React from "react";
import ReactDOM from "react-dom";
import Geolocation from "./Contents";


class Location extends React.Component {
  state={
    zigack : "false",
    latitude : "",
    longitude : "",

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
    radLat1 = Rad * this.state.longitude;
    radLat2 = Rad * 126.98633090000001;
    //126.99 목적지 경도
    radDist = Rad * (this.state.latitude - 37.563398);
    //37.563 목적지 위도
    distance = Math.sin(radLat1) * Math.sin(radLat2);
    distance = distance + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radDist);
    ret 	= EARTH_R * Math.acos(distance);

    var rtn = Math.round(Math.round(ret) / 1000);
     if(rtn <= 0)
     {
       rtn = Math.round(ret) + " m";
     }else
     {
       rtn = rtn + " km";
    }
    // ${place_name}
    console.log(`현재위치와  사이의 거리는 ${rtn} 입니다.`  );
    if(50 < rtn){
      this.zigack = true
    }else{
      this.zigack = false
    }
    //place_name 목적지 
    return  rtn;
}

  //  <Location />
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Some magic happen!</h2>

        <Geolocation
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) => (
            <div>
              <button onClick={getCurrentPosition}>현재위치 불러오기   </button>
              <br />
              <br />
              {error && <div>{error.message}</div>}
              <pre>
                latitude: {latitude}
                <br />
                <br />
                longitude: {longitude}
              </pre>
            </div>
          )}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Location />, rootElement);

export default Location