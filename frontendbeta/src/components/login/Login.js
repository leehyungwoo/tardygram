import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

import './Login.css';

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
        memberid:"",
        pwd:"",
    }
  }

  render() {
    return (
      <div id="wrap">
          <h2>login</h2>
    
          <Form onSubmit={this.login}>
              <Form.Group controlId="memberid">
                  <Form.Label>memberid</Form.Label>
                  <input type="text" name='memberid' onChange={this.ChangeHandler}></input>
              </Form.Group>
              <Form.Group controlId="pwd">
                  <Form.Label>pwd</Form.Label>
                  <input type="text" name='pwd' onChange={this.ChangeHandler}></input>
              </Form.Group>
          </Form>
          <Button variant="success" class="link" onClick={this.login}>전 송</Button>
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

    axios.post('http://localhost:9000/member/select',
               JSON.stringify(this.state),
                {headers: headers})
        .then(res=>{
          const result = res.data;
          if(result.status==="sucess"){
            localStorage.setItem("loginId",res.data.dataid);
            alert("로그인성공 라우터이동");
             this.props.history.push("/")
          }else{
            alert(result.msg)
          }
          
       
        })
        .catch(e=>{
            alert('login에러')
        })
  }

}






export default Login;
