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
import {CardDeck,Card,Col} from 'react-bootstrap';

// reactstrap components

import {
  Badge,
  // Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,

  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import {Link } from "react-router-dom";

class Tables extends React.Component {
  constructor(props){
    super(props)
    this.state={
       mList:[]
    }
    console.log(props)
  }

  componentDidMount(){
    console.log("search 디드마운트 실행")
    const headers = {
      'Content-Type': 'application/json',
    }
 
    axios.get(`/room/selectall`,  {headers:headers})
      .then(res=>{
        console.log(res.data.mList)
        res.data.mList.map((item,index)=>{  
          return this.setState({
            mList:[...this.state.mList, item]
           })       
        })
      })
      .catch(res=>{
        alert("통신실패")
      })
  
    }

    imageTag=()=>{
      if(this.state.profileimage){
        return ( 
          <img className="rounded-circle" src={this.state.profileimage} style={{minWidth:"140px",maxHeight:"220px"}} ></img>
       )
      }
    }
  render() {

    return (
      <>
        <Header />
       
        <Container className="mt--7" fluid>
                <CardDeck>
        
                {this.state.mList.map((contact,index)=>{
                       return(
                      <Col className="mb-3" xs="12" sm="6" lg="4" key={index}>
                       <Card >
                         <Card.Img variant="top" src={contact.roomphoto} />
                         <Card.Body>
                           <Card.Title>{contact.roomtitle}</Card.Title>
                           <Card.Text>
                           {contact.roomdetail}
                           </Card.Text>
                         </Card.Body>
                         <Card.Footer>
                         <Button
                            color="primary"
                            style={{padding:0}}
                            onClick={e => e.preventDefault()}
                          >
                            <Link to={"/admin/roomdetail/"+contact.roomno} style={{color:"#fff",
                          padding: "0.625rem 1.25rem",  display:"inline-block"
                          }}>
                           방 참여
                           </Link>
                          </Button>
                         </Card.Footer>
                       </Card>
                       </Col>
                     )
                })}
                </CardDeck>




                {/* <Row className="justify-content-sm-center">
                {this.state.mList.map((contact,index)=>{
                  console.log(contact)
               return( 
                <Col xs="12" sm="6" lg="4" xl="3" className=" mb-3" key={index}>
                      <Card>
                        <CardImg
                          alt="..."
                          src={contact.roomphoto}
                          // src={"/image/room/abc.jpeg"}
                          top
                        />
                        <CardBody>
                          <CardTitle>{contact.roomtitle}</CardTitle>
                          <CardText>
                          {contact.roomdetail}
                          </CardText>           
                          <Button
                            color="primary"
                            style={{padding:0}}
                            onClick={e => e.preventDefault()}
                          >
                            <Link to={"/admin/roomdetail/"+contact.roomno} style={{color:"#fff",
                          padding: "0.625rem 1.25rem",  display:"inline-block"
                          }}>
                           방 참여
                           </Link>
                          </Button>
                        
                        </CardBody>
                      </Card>
                      </Col>  
                  )
                })}
                </Row> */}


          {/* <Row>
            
            <div className="col">
    
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Card tables</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">meetinrTitle</th>
                      <th scope="col">roomDetail</th>
                      <th scope="col">roomDate</th>
                      <th scope="col">roomPlace</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.mList.map((contact,index)=>{
                      return (  
                    <tr key={contact.roomno}>
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
                              <Link to={"/admin/roomdetail/"+contact.roomno}>{contact.roomtitle}</Link>
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
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip742438047"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip941738690"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-2-800x800.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip941738690"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip804044742"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-3-800x800.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip804044742"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip996637554"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-4-800x800.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip996637554"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
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
                    )
                })}
                  </tbody>
                </Table>
                 <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter> 
              </Card>
            </div>
          </Row> */}
        
        </Container>
      </>
    );
  }
}

export default Tables;
