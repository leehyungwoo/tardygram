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
import axios from "axios";
import useValidatedForm from 'react-valida-hook'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
const initialState = {
  firstName: '',
  lastName: '',
  email: ''
}

const validations = [
  {
    name: 'uid',
    type: 'required',
    stateMap: 'firstName'
  },
  {
    name: 'upwd',
    type: 'required',
    stateMap: 'upwd'
  },
  {
    name: 'uname',
    type: 'required',
    stateMap: 'uname'
  },
  {
    name: 'ubirthday',
    type: 'required',
    stateMap: 'ubirthday'
  },
  {
    name: 'ugender',
    type: 'required',
    stateMap: 'ugender'
  },
  {
    name: 'uphone',
    type: 'required',
    stateMap: 'uphone'
  },
  {
    name: 'uemail',
    type: 'isEmail',
    stateMap: 'uemail'
  }
]
class Register extends React.Component {
  
  submitHandler=()=>{
    var data ={
        memberid: document.getElementById("uid").value,
        pwd: document.getElementById("upwd").value,
        name: document.getElementById("uname").value,
        birthday: document.getElementById("ubirthday").value,
        gender: document.getElementById("ugender").value,
        phone: document.getElementById("uphone").value,
        email: document.getElementById("uemail").value
    }
    const headers = {
      'Content-Type': 'application/json',
      }
    axios.post("/member/join",data,{headers})
    .then(res=>{
      alert('회원가입 성공')
      this.props.history.push("/")
    }).catch(e=>{
       alert('회원가입 실패')
    })



  }


  UserForm= () => {
    const [formData, validation, validateForm, getData] = useValidatedForm(initialState, validations)
    const submit = (event) => {
      event.preventDefault()
      const valid = validateForm()
      console.log(getData())
    }
    return (
      <form className='validated-form' noValidate={true} onSubmit={submit}>
        <div className={ validation.errors.firstName.length > 0 ? 'validated-form__control error': 'validated-form__control' }>
          <label htmlFor='first-name'>First name</label>
          <input name='first-name' id='first-name' { ...formData.firstName.input } />
          <div className='validated-form__errors'>
            { validation.errors.firstName.join(', ')}
          </div>
        </div>
        <div className={ validation.errors.lastName.length > 0 ? 'validated-form__control error': 'validated-form__control' }>
          <label htmlFor='last-name'>Last name</label>
          <input name='last-name' id='last-name' { ...formData.lastName.input } />
          <div className='validated-form__errors'>
            { validation.errors.lastName.join(', ')}
          </div>
        </div>
        <div className={ validation.errors.email.length > 0 ? 'validated-form__control error': 'validated-form__control' }>
          <label htmlFor='email'>Email</label>
          <input name='email' id='email' { ...formData.email.input } />
          <div className='validated-form__errors'>
            { validation.errors.email.join(', ')}
          </div>
        </div>
        <div className='validated-form__actions'>
          <input disabled={!validation.valid} className='btn' type="submit" value="Submit" />
        </div>
      </form>
    )
  }

  render() {
    const [formData, validation, validateForm, getData] = useValidatedForm(initialState, validations)
    const submit = (event) => {
      event.preventDefault()
      const valid = validateForm()
      console.log(getData())
    }
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader> */}
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <Form role="form">
                
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Id" type="text" id="uid"/>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Pwd" type="password" id="upwd"/>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="name" id="uname" />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Birthday" type="text" id="ubirthday"/>
                  </InputGroup>
                  <span>* 앞6자리</span>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Gender" type="text" id="ugender"/>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Phone" type="number" id="uphone"/>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className={validation.errors.email.length > 0 ? 'validated-form__control error': 'validated-form__control'}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" id="uemail"/>
                  </InputGroup>
                </FormGroup>



                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={this.submitHandler}>
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
