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
import SearchMap from "./SearchMap"
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
  Media, Badge, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, 
  Progress,
 
 
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";



class Profile extends React.Component {

  constructor(props){
    super(props)    
    this.state={
      selecthost : null
    }   
  }
 
  componentDidMount(){
    console.log(this.props.match.params.id)

    const headers = {
      'Content-Type': 'application/json',
    }

    axios.get(`/room/selectone/${this.props.match.params.id}`,  {headers:headers})
      .then(res=>{
        console.log(res.data)
        
        let selecthost = res.data.selecthost
        this.setState({
          selecthost:res.data.selecthost.roomtitle
        })
       console.log('',this.state)


        // res.data.mList.map((item,index)=>{  
        //   return this.setState({
        //     mList:[...this.state.mList, item]
        //    })       
        // })
      })
      .catch(res=>{
        alert("통신실패")
      })

  }
 


  render() {
    return (
      <>
  
      <UserHeader /> {/* Page content */}
        <Container className="mt--7" fluid>
            <Row>
          
                <Col className="order-xl-1" xl="8">
                <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                                {this.state.selecthost}
                            <Col className="text-left" xs="12">
                            <Button className="float-left" color="success" href="#pablo" size="sm">
                                모임시간
                              </Button>
                            <h5 className="float-left text-muted mb-3" style={{lineHeight:"2"}}>
                                1988-09-27 17:00
                            </h5>
                            </Col>
                            <Col xs="12">
                            <Button className="float-left" color="primary" href="#pablo" size="sm">
                              모임장소
                            </Button>
                            <h5 className="float-left text-muted mb-3" style={{lineHeight:"2"}}>
                                서울시 종로구 떙떙떙떙
                            </h5>
                            </Col>
                            <Col className="text-left  mb-3" xs="12">
                            <Button className="float-left" color="danger" href="#pablo" size="sm">
                              벌 &nbsp;&nbsp;&nbsp; &nbsp; 금
                            </Button>
                            <h5 className="float-left text-muted mb-3" style={{lineHeight:"2"}}>
                                10000원
                            </h5>
                            </Col>
 
                            <Table
          className="align-items-center table "
          responsive
        >
          <thead className="thead">
            <tr>
              <th scope="col">참여자이름</th>
              <th scope="col">벌금액수</th>
              <th scope="col">상태</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/bootstrap.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Argon Design System
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
              
              
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/angular.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Angular Now UI Kit PRO
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$1,800 USD</td>
              <td>
                <Badge color="" className="badge-dot">
                  <i className="bg-success" />
                  completed
                </Badge>
              </td>
              
              
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/sketch.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Black Dashboard
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$3,150 USD</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-danger" />
                  delayed
                </Badge>
              </td>
              
              
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/react.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      React Material Dashboard
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$4,400 USD</td>
              <td>
                <Badge color="" className="badge-dot">
                  <i className="bg-info" />
                  on schedule
                </Badge>
              </td>
              
              
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/vue.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Vue Paper UI Kit PRO
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$2,200 USD</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-success" />
                  completed
                </Badge>
              </td>
              
              
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
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
                            <h3>
                                약속장소
                            </h3>
                        
                            {/* <SearchMap height="300px"></SearchMap> */}
                          
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
