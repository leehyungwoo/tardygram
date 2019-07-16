import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import about from '../../images/about.jpg'
import author from '../../images/author.jpg'
import bg_1 from '../../images/bg_1.jpg'
import bg_2 from '../../images/bg_2.jpg'
import bg_3 from '../../images/bg_3.jpg'
import bg_4 from '../../images/bg_4.jpg'
import bg_5 from '../../images/bg_5.jpg'
import blog_1 from '../../images/blog-1.jpg'
import blog_2 from '../../images/blog-2.jpg'
import blog_3 from '../../images/blog-3.jpg'
import blog_4 from '../../images/blog-4.jpg'
import blog_5 from '../../images/blog-5.jpg'
import blog_6 from '../../images/blog-6.jpg'
import blog_7 from '../../images/blog-7.jpg'
import blog_8 from '../../images/blog-8.jpg'
import blog_9 from '../../images/blog-9.jpg'
import category_1 from '../../images/category-1.jpg'
import category_2 from '../../images/category-2.jpg'
import image_1 from '../../images/image_1.jpg'
import image_2 from '../../images/image_2.jpg'
import image_3 from '../../images/image_3.jpg'
import image_4 from '../../images/image_4.jpg'
import image_5 from '../../images/image_5.jpg'
import image_6 from '../../images/image_6.jpg'
import loc from '../../images/loc.png'
import person_1 from '../../images/person_1.jpg'
import person_2 from '../../images/person_2.jpg'
import person_3 from '../../images/person_3.jpg'
import person_4 from '../../images/person_4.jpg'
import './Login.css';

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      memberid : '',
      pwd : ''
    }
  }

  render() {
    return (
      <div>
          <h2>Login</h2>
          <form onSubmit="{this.login}">
          <Form>
              <Form.Group controlId="memberid">
                  <Form.Label>MEMBER ID</Form.Label>
                  <input type="text" name='memberid' onChange={this.idChange}></input>
              </Form.Group>
              <Form.Group controlId="pwd">
                  <Form.Label>PWD</Form.Label>
                  <input type="text" name='memberid' onChange={this.pwdChange}></input>
              </Form.Group>
          </Form>
          <Button variant="success" onClick={this.login}>전 송</Button>
          <Button variant="warning">취 소</Button>
          </form>    
      </div>
    );
    
  }
  idChange = e =>{
    this.setState({memberid: e.target.value})
  }

  pwdChange = e => {
      this.setState({pwd : e.target.value})
  }


  login=e=>{
    e.preventDefault()
    this.setState({submitted: true})
    const { memberid, pwd } = this.state

    console.log(`memberid is ${memberid}`)
    console.log(`pwd is ${pwd}`)
    
    let data = {
      memberid : this.state.memberid,
      pwd : this.state.pwd
    }
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : 'JWT fefege..'
    }
    alert('로그인 버튼 클릭 !! id:' + data.memberid + ', pwd: ' + data.pwd)
    axios.post('http://localhost:9000/member/getmember',
                JSON.stringify(data),
                {headers: headers})
        .then(res=>{
            alert('login성공')
        })
        .catch(e=>{
            alert('login실패')
        })
  }

}






export default Login;
