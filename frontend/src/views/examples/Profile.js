/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import axios from 'axios'
import {Link,Route } from "react-router-dom";
import Upload from '../../components/Upload/Upload'
// import Crown from '../../components/Upload/ProfileImage/crown.png'

// reactstrap components
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
  Media, Badge, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";


function hostRedirect(target){
  window.location.href=target
}

class Profile extends React.Component {

  constructor(props){
    super(props)
     
    this.state={
      birthday:'',
      email:'',
      gender:'',
      memberid:'',
      money:'',
      name:'',
      profileimage:'',
      phone:'',
      pwd:'',
      hostProgressEx:[],
      MemberProgressEx:[],
      amount:'',
      hostCount:'',
      memberCount:'' 
    }   
    
  }


  componentDidMount(){
    console.log("라이프사이클 로직실행")
    
     const headers = {
        'Content-Type': 'application/json',
    }
   
    let id = localStorage.getItem("loginId");
    axios.get(`http://localhost:9000/member/mypage/${id}`,  {headers:headers})
        .then(res =>{
            //alert('통신성공  url:')
         console.log(res.data)
   
         let uInfo =res.data.uInfo
   
         this.setState({
           birthday:uInfo.birthday,
           email:uInfo.email,
           gender:uInfo.gender,
           memberid:uInfo.memberid,
           money:uInfo.money,
           name:uInfo.name,
           profileimage:uInfo.profileimage,
           phone:uInfo.phone,
           pwd:uInfo.pwd,
           hostCount: res.data.hostCount,
           memberCount : res.data.memberCount
         }) 
   
         res.data.hostProgressEx.map((item,index)=>{
             return this.setState({
               hostProgressEx:[...this.state.hostProgressEx,item] 
             })
         })
   
         res.data.MemberProgressEx.map((item,index)=>{
           this.setState({
             MemberProgressEx:[...this.state.MemberProgressEx,item] 
           })
         })
    
        })
        .catch(res =>{
            alert('통신 실패')
        })
    
   }


   imageTag=()=>{
      if(this.state.profileimage){
        return ( 
          <img className="rounded-circle" src={this.state.profileimage} style={{minWidth:"140px",maxHeight:"220px"}} ></img>
       )
      }
    }

    reciveEmit=(type)=>{
      console.log(type)
      this.setState({
        profileimage:type
      })
      this.imageTag();
    }


    amount = e =>{
      e.preventDefault()
      this.setState({
        amount : e.target.value
      })
    }

   Kakaopay = e =>{
    e.preventDefault()
    //this.setState({submitted: true})
    alert("카카오페이 버튼클릭"); 
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : 'e523b4aefc19df61c38d857920fc96a3',
        'Access-Control-Allow-Origin': '*'
    }
  
    let data = {
        amount : this.state.amount,
        memberid : localStorage.getItem("loginId")
    }
  
    alert(data.amount);
    alert(data.memberid);
 
    axios.post('http://localhost:9000/kakaoPay', JSON.stringify(data), {headers:headers})
        .then(res =>{
            alert('kakaopay성공  url:'+res.data)
            hostRedirect(res.data);
            // location.href=res.data
        })
        .catch(res =>{
            alert('kakaopay실패')
        })
  }

  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        {/* <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/theme/team-4-800x800.jpg")}
                        /> */}
                        {this.imageTag()}
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">{this.state.hostCount}</span>
                          <span className="description">개설중인 모임방</span>
                        </div>
                        <div>
                          <span className="heading">{this.state.memberCount}</span>
                          <span className="description">참여중인 모임방</span>
                        </div>
                    
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      {this.state.name}
                      <span className="font-weight-light">({this.state.gender})</span>
                    </h3>
                    <div className="h5 font-weight-450">                 
                      birthday : {this.state.birthday}<br/>
                      tardycash : {this.state.money}<br/>
                      <input type="text" placeholder="금액" onChange={this.amount}></input>                  
                      <Button color="warning" outline type="button" size="sm" onClick={this.Kakaopay}>충전</Button>
                    </div>
                    
                    <hr className="my-4" />
                      
                      <div>                      
                        파일업로드<br/>
   
                        <Upload emit={this.reciveEmit}></Upload>
                      </div>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Settings
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Userid
                            </label>
                            <Input
                              className="form-control-alternative"             
                              id="input-userid"
                              placeholder="Userid"
                              type="text"
                              defaultValue={this.state.memberid}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="test@example.com"
                              type="email"
                              defaultValue={this.state.email}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Phone
                            </label>
                            <Input
                              className="form-control-alternative"
                              
                              id="input-first-name"
                              placeholder="01012341234"
                              type="text"
                              defaultValue={this.state.phone}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Password
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              defaultValue={this.state.pwd}
                              type="password"
                           
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      개설중인 모임방
                    </h6>


                      
                    

                    {/* ---------------------------------------------------------------------------------------------------------- */}
                  <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" style={{width:"15%"}}>방장</th>
                      <th scope="col" style={{width:"15%"}}>카테고리</th>
                      <th scope="col" style={{width:"50%"}}>방타이틀</th>
                      <th scope="col" style={{width:"20%"}}>날짜</th>                 
                    </tr>
                  </thead>
                  <tbody>                         
                    
                    {this.state.hostProgressEx.map((contact,i)=>{
                      return(
                          <tr key={i}>
                              <td>{contact.roomhostid}</td>
                              <td>{contact.roomcategory}</td>
                              <td>                           
                                <Link to={"/admin/roomdetail/"+ contact.roomno}>
                                <Badge color="" className="badge-dot mr-4">
                                  <i className="bg-warning" />{contact.roomtitle}
                                </Badge>
                                </Link>  
                              </td>
                              <td>{contact.roomdate}</td>
                          </tr>
                      );
                    })} 
                   
                                            
                  </tbody>
                </Table>

                <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      참여중인 모임방
                    </h6>
                    <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" style={{width:"15%"}}>방장</th>
                      <th scope="col" style={{width:"15%"}}>카테고리</th>
                      <th scope="col" style={{width:"50%"}}>방타이틀</th>
                      <th scope="col" style={{width:"20%"}}>날짜</th>                 
                    </tr>
                  </thead>
                  <tbody>                         
                
                    {this.state.MemberProgressEx.map((contact,i)=>{
                      return(
                          <tr key={i}>
                          <td>{contact.roomhostid}</td>
                          <td>{contact.roomcategory}</td>
                          <td>
                            <Link to={"/admin/roomdetail/"+ contact.roomno}>
                            <Badge color="" className="badge-dot mr-4">
                             <i className="bg-warning" />{contact.roomtitle}                          
                            </Badge>
                            </Link>             
                          </td>
                          <td>{contact.roomdate}</td>
                          </tr>
                      );
                    })} 
                   
                    
                             
                  </tbody>
                </Table>
                    
                  </Form>
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
