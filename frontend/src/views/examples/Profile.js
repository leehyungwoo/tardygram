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

import {Link} from "react-router-dom";
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
import axios from "axios";
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
      MemberProgressEx:[] 
    }   
  }


  componentDidMount(){
    console.log("라이프사이클 로직실행")
     const headers = {
        'Content-Type': 'application/json',
    }
   
    let id ="jmh1753";
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
           pwd:uInfo.pwd
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







   Kakaopay = e =>{
    e.preventDefault()
    //this.setState({submitted: true})
    alert("카카오페이 버튼클릭"); 
    /* const headers = {
        'Content-Type': 'application/json',
        'Authorization' : 'e523b4aefc19df61c38d857920fc96a3',
        'Access-Control-Allow-Origin': '*'
    }
  
    let data = {
        amount : this.state.amount,
        memberid : this.state.memberid
    }
  
    alert(data.amount + data.memberid);
    axios.post('http://localhost:9000/kakaoPay', JSON.stringify(data), {headers:headers})
        .then(res =>{
            alert('kakaopay성공  url:'+res.data)
            window.open(res.data,true)
        })
        .catch(res =>{
            alert('kakaopay실패')
        }) */
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
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/theme/team-4-800x800.jpg")}
                        />
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
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
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
                      <Button color="warning" outline type="button" size="sm" onClick={this.Kakaopay}>충전</Button>
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                      {/* <img src={Crown}></img> */}
                      <img src={require("../../components/Upload/ProfileImage/스키마.png")} style={{width:"20%"}}></img>
                      <img src={require("assets/img/theme/bootstrap.jpg")} />  
                      {/* <img src={require(link)}/> */}
                      {/* ../../components/Upload/ProfileImage/asd.png */}
                      {/* <img src={require({})} />   */}
                      {/* <img src={require()} /> */
                    }
                      <img src={require("../../components/Upload/ProfileImage/crown.png")} style={{width:"20%"}}></img>
                      
                      <p>
                        파일업로드
                        <Upload></Upload>
                      </p>
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
                        <Col lg="12">
                          <FormGroup>
                             <input className="form-control-alternative"  type="file"name="file" onChange={this.onChangeHandler}/>

                          </FormGroup>
                        </Col>
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
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      개설중인 모임방
                    </h6>

                    {/* ---------------------------------------------------------------------------------------------------------- */}
                    <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" style={{width:"30%"}}>meetinrTitle</th>
                      <th scope="col">meetingPlace</th>
                      <th scope="col">meetingDate</th>
                      <th scope="col">meetingUser</th>                 
                    </tr>
                  </thead>
                  <tbody>                         
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                            <img
                              alt="..."
                              src={require("assets/img/theme/bootstrap.jpg")}
                              style={{width:"25%"}}
                            />  
                            {/* 방장 이미지 */}                          
                          <Media>
                            <span className="mb-0 text-sm">
                              <Link to="/">asdfasdf</Link>
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>$2,500 USD</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip742438047"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-1-800x800.jpg")}
                            />
                          </a>                                                                  
                        </div>
                      </td>
                   
                    </tr>
                   
              
                  </tbody>
                </Table>
             
                    {/* <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source."
                          type="textarea"
                        />
                      </FormGroup>
                    </div> */}
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
