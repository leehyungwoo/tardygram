import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

import './Join.css';

class Join extends Component{

  constructor(props){
    super(props);
    this.state = {
        memberid:"",
        pwd:"",
        name:"",
        birthday:"",
        email:"",
        gender:"",
        phone:"",
        profileimage:""
    }
  }

  render() {
    return (
      <div>
          <h2>join</h2>
    
          <Form onSubmit={this.login}>
              <Form.Group controlId="memberid">
                  <Form.Label>memberid</Form.Label>
                  <input type="text" name='memberid' onChange={this.ChangeHandler}></input>
              </Form.Group>
              <Form.Group controlId="pwd">
                  <Form.Label>pwd</Form.Label>
                  <input type="text" name='pwd' onChange={this.ChangeHandler}></input>
              </Form.Group>
              <Form.Group controlId="pwd">
                  <Form.Label>name</Form.Label>
                  <input type="text" name='name' onChange={this.ChangeHandler}></input>
              </Form.Group>
              <Form.Group controlId="pwd">
                  <Form.Label>birthday</Form.Label>
                  <input type="text" name='birthday' onChange={this.ChangeHandler}></input>
              </Form.Group>
              <Form.Group controlId="pwd">
                  <Form.Label>email</Form.Label>
                  <input type="text" name='email' onChange={this.ChangeHandler}></input>
              </Form.Group>
              <Form.Group controlId="pwd">
                  <Form.Label>gender</Form.Label>
                  <input type="text" name='gender' onChange={this.ChangeHandler}></input>
              </Form.Group>
              <Form.Group controlId="pwd">
                  <Form.Label>phone</Form.Label>
                  <input type="text" name='phone' onChange={this.ChangeHandler}></input>
              </Form.Group>
              <Form.Group controlId="pwd">
                  <Form.Label>money</Form.Label>
                  {/* <input type="text" name='money' onChange={this.ChangeHandler}></input> */}
              </Form.Group>
          </Form>
          <Button variant="success" onClick={this.login}>전 송</Button>
          <Button variant="warning">취 소</Button>
       
      </div>
    );
    
  }
  ChangeHandler = e =>{
     const {name,value}=e.target;
     this.setState({
        [name]:value
     })
 
  }

  
  login=e=>{
    e.preventDefault()

     
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : 'JWT fefege..'
    }

    axios.post('http://localhost:9000/member/join',
               this.state,
                {headers: headers})
        .then(res=>{
            alert('join성공')
            console.log(res)
            
        })
        .catch(e=>{
            alert('join실패')
        })
  }

}






export default Join;
