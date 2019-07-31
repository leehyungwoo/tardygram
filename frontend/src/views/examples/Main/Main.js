import React, {Component} from "react";
import axios from 'axios'
import Header from "components/Headers/Header.js";
import Moment from 'react-moment';
import 'moment-timezone';
// import Countdown from './CountDown'
import GoodClock from './GoodClock'
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      memberid : localStorage.getItem('loginId'),
      roomdate:"",
      roomGmonth : "",
      roomGdate : "",
      roomGhours : "",
     
    }
   
  }

  
  componentDidMount(){

    const headers = {
      'Content-Type': 'application/json',
    }

    
    axios.get(`/member/mainchk/${this.state.memberid}`, {headers:headers})
        .then(res =>{
          console.log(this)
          // alert("통신성공")

          let data = res.data;
          let date = new Date(data);

          let gmonth = date.getMonth()+1;
          
          let gdate = date.getDate();
          let ghours = date.getHours();
          if(gmonth<10){
            gmonth = "0"+gmonth;
          }
          if(gdate<10){
            gdate = "0"+gdate;
          }

          if(ghours<10){
            ghours = "0"+ghours;
          }

          this.setState({
            roomdate :date, 
            roomGmonth:gmonth,
            roomGdate:gdate,
            roomGtime:ghours,
            
          })
          console.log(this.state)
          // console.log(this.state.roomdate)
          // console.log(this.state.roomMonth)
          // console.log(this.state.roomDay)



          // console.log(`도착해야하는 시간은 : ${gotTime}`)
          // //약속시간
          // let nowTime = new Date();
          // //현재시간

       

          // console.log(`현재시간 : ${nowTime}`)
          // console.log(`약속시간 : ${gotTime}`)
       

          // let myTime = gotTime.getTime() - nowTime.getTime()
          //myTime은 남은시간 계산
          // console.log(myTime)
        })
        .catch(res =>{
          alert('실패')
        })

  }

  viewTime = ()=>{
     setInterval(function(){
      return "hi" 
    },1000)
  }
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
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
                      {/* <Moment fromNow>2019-07-31T14:00:00.000Z</Moment> */}
                      {/* <Countdown date={Date.now()+ 10000}>
                        alert("지각하셨습니다.")
                      </Countdown> */}
                    </h4>
                    {/* <Countdown timeTillDate="05 26 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a" /> */}

                        {console.log(`${year}-${this.state.roomGmonth}-${this.state.roomGdate}T00:00:00`)}
                    <GoodClock date={`${year}-${this.state.roomGmonth}-${this.state.roomGdate}T22:00:00`} />
                    <GoodClock date={`${year}-${this.state.roomGmonth}-${this.state.roomGdate}T${this.state.roomGtime}:00:00`} />
                     {this.viewTime()} 
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
