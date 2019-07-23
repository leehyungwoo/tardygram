import React, {Component, createRef} from "react";
import axios from 'axios'

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
    Progress
  } from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";
import SearchMap from './SearchMap'
class CreateHost extends Component {
    state={
        inputVal:'',
        pageIndex:0,
        query:['category','meetingtitle','meetingdate','meetingdetail','meetingphoto','meetingcharge','meetingplace'],
        category:'',
        hostid:localStorage.getItem('loginId'),
        meetingtitle:'',
        meeting:'',
        meetingdate:'',
        meetingdetail:'',
        meetingplace:'',
        meetingphoto:'',
        meetingcharge:''
      }
      mydiv = createRef();

      test=(e)=>{
        e.preventDefault();
     
        this.setState({
          pageIndex:this.state.pageIndex+1,
          [this.state.query[this.state.pageIndex]]:this.mydiv.value,
          inputVal:""
        })
        this.mydiv.value="";
        if(this.state.pageIndex==this.state.query.length-1){
          this.axiosRequest();
        }
      }
    
      formFunc=()=>{
        if(this.state.pageIndex <= 5 ){
          return <input type="text" className="form-control" 
          placeholder={this.state.query[this.state.pageIndex]} 
          value={this.inputVal} 
          ref={ref => { this.mydiv = ref }}
          />
        }else{
          return <div>
            <SearchMap></SearchMap>
          </div>
        }
      }

      axiosRequest=()=>{
        const headers = {
          'Content-Type': 'application/json',
      }
    
      axios.post('http://localhost:9000/meeting/create',
                 this.state,
                  {headers: headers})
                .then(res=>{
                    alert('방만들기 성공')
                    this.props.history.push("/")
                })
          .catch(e=>{
              alert('방만들기 실패')
          })
    }
        render() {
        return (
            <>
            <Col lg="8" md="12">

            <div>
                <div class="progress-wrapper">
                <div class="progress-info">
                    <div class="progress-label">
                    <span>Task completed</span>
                    </div>
                    <div class="progress-percentage">
                    <span>60%</span>
                    </div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-primary" role="progressbar"  aria-valuenow={(100/this.state.query.length)*this.state.pageIndex} aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div>
                </div>
                </div>
            </div>
            <form   className="subscribe-form" onSubmit={this.test}>
                <div className="form-group d-flex">
                    {this.formFunc()}
                    <button type="button" className="btn btn-success" onClick={this.test}>Success</button>
                </div>
            </form>

            </Col>

            </>
        )
    }
}

export default CreateHost;
