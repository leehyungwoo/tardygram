import React, {Component, createRef} from "react";
import axios from 'axios'
import ReactDatetime from "react-datetime";
import ImageUploader from 'react-images-upload';
import 'react-times/css/material/default.css';
import 'react-times/css/classic/default.css';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

import SearchMap from './SearchMap'

import Header from "components/Headers/Header.js";
import RoomUpload from '../../components/Upload/RoomUpload'


class CreateHost extends Component {
    state={
        calender:false,
        inputVal:'',
        pageIndex:0,
        query:['roomtitle','roomcategory','roomdate','roomdetail','roomphoto','roomcharge','roompwd','roomplace'],
        roomcategory:'',
        roomhostid:localStorage.getItem('loginId'),
        roomtitle:'',
        room:'',
        roomdate:'',
        roomdetail:'',
        roomplace:'',
        roomphoto:'',
        roomcharge:'',
        progressNum:0,
        address:'',
        roomlongitude:'',
        roomlatitude:'',
        roompwd:''
      }
      mydiv = createRef();
      email = createRef();
      handleIncrease=()=>{

          this.setState({
            progressNum : this.state.progressNum + 1
          })
          console.log(this.state.progressNum)      
      }

      imageTag=()=>{
        if(this.state.roomphoto){
          return ( 
            <img className="rounded-circle" src={this.state.roomphoto} style={{display:"block",minWidth:"300px",maxWidth:"300px",maxHeight:"200px", minHeight:"200px", margin:"0 auto"}} ></img>
         )
        }
      }
  
      reciveEmit=(type)=>{
        console.log(type)
        this.setState({
            roomphoto:type
        })
        this.imageTag();
      }


      onChangeHandler=event=>{
         var fileContainer = document.getElementsByClassName("fileContainer")[0];
         var input = fileContainer.children.file;

         if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("image_section").setAttribute("src",e.target.result)
            }
            reader.readAsDataURL(input.files[0]);
        }

        console.log(event)
        console.log("실행!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        this.setState({
            file : URL.createObjectURL (event[event.length-1])
          })
          const data = new FormData()
          data.append('file', event[event.length-1])
        
       
      }
  
      Dialog = (e) => {
        switch(e) {
            case 0:
                return (
                <div>
                        <h1>타이틀</h1>
		                <h2>Choose a name that will give people a clear idea of what the group is about. Feel free to get creative! You can edit this later if you change your mind.</h2>
                </div>
                    );
            case 1:
                return (
                    <div>
                            <h1>카테고리</h1>
                            <h2>Be specific! This will help us promote your group to the right people. You can choose up to 15 topics.</h2>
                    </div>
                        );
            case 2:
                return (
                    <div>
                            <h1>날짜</h1>
                            <h2>Set Group's timly room Date and time. </h2>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-calendar-grid-58" />
                                </InputGroupText>
                                </InputGroupAddon>
                            <ReactDatetime
                            inputProps={{
                                placeholder: "Date Picker Here"
                            }}

                            ref={ref=>{this.datepicker=ref}}
                            onChange={e=>{
                              
                              
                                    if(!this.state.calender){
                                        console.log("달력")
                                        document.getElementsByClassName("rdtTimeToggle")[0].click()
                                        this.setState({
                                            calender:!this.state.calender,
                                            roomdate:e._d
                                        })
                                    }else{
                                        console.log("시계")
                                        document.getElementsByClassName("rdtSwitch")[0].addEventListener("click",()=>{
                                            this.setState({
                                                calender:!this.state.calender,
                                                roomdate:e._d
                                            })
                                        })
                                    }

                                }
                            }
                            onBlur={e=>{
                                this.setState({
                                    roomdate:e._d
                                })
                                console.log(this.state.roomdate)
                            }}
                            timeFormat={true}
                            />
                        </InputGroup>

                        </FormGroup>


                    </div>
                
                        );
            case 3:
                return (
                    <div>
                            <h1>디테일</h1>
                            <h2>People will see this when we promote your group, but you’ll be able to add to it later, too</h2>
                    </div>
                        );    
            case 4:
                return (
                    <div>
                            <h1>사진</h1>
                            <div className="row">       
                                <div className="col-md-6">
                                <ImageUploader className="form-control-alternative"  type="file"name="file" onChange={this.onChangeHandler}/>  
                                <img id="image_section" src="#" alt="your image" />
                                </div>
                                 <div className="col-md-6 img-responsive img-thumbnail">{this.imageTag()}</div>                                
                            </div>
                    </div>
                        );         
            case 5:
                return (
                    <div>
                            <h1>벌금</h1>
                    </div>
                        ); 
            case 6:
                return (
                    <div>
                            <h1>방비번</h1>
                    </div>
                        );             
            case 7:
                return (
                    <div>
                            <h1>장소</h1>
                            <h2>Group's meet locally and in person. We’ll connect you with people who live in and around your area.</h2>
                    </div>
                        ); 
                        
        }
    };

      clickHandler=(e)=>{
       
        e.preventDefault();
        this.handleIncrease()
        
        if(this.state.pageIndex<this.state.query.length-1){
            console.log("실행")
            this.setState({
            pageIndex:this.state.pageIndex+1,
            [this.state.query[this.state.pageIndex]]:this.mydiv.value,
            inputVal:""
            })
            this.mydiv.value="";
        }else{
            console.log("지도")
            console.log(this.state.pageIndex)
            console.log(this.state.query.length-1)
            if(this.state.pageIndex==this.state.query.length-1){
                console.log("조건문실행")
                this.axiosRequest();
            }
        }
      }

   

        axiosRequest=()=>{
            const headers = {
             'Content-Type': 'application/json',
             'Access-Control-Allow-Origin':'*'
             }
             console.log(this.state)
            axios.post('http://localhost:9000/room/create',
                        this.state,
                        {headers: headers})
                        .then(res=>{
                            alert('방만들기 성공')
                            this.props.history.push("/admin/DoneHost")
                        })
                .catch(e=>{
                    alert('방만들기 실패')
                })
        }
      

        reciveEmit=(chilstate)=>{
            this.setState({
                roomplace:chilstate.address,
                roomlongitude:chilstate.roomlongitude,
                roomlatitude:chilstate.roomlatitude
            })
            console.log(this.state)
        }


        render() {
        return (
            <>
            <Header/>
            {/* Page content */}
            <Container className=" mt--7" fluid>
                {/* Table */}
                <Row>
                    <Col lg="12" md="12">
                    <Card className=" shadow">
                        <CardHeader className=" bg-transparent">
                            <div className="progress-wrapper">
                                <div className="progress-info">
                                    <div className="progress-label">
                                    <span>Make Host Progress</span>
                                    </div>
                                    <div className="progress-percentage">
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar"  aria-valuenow={(100/this.state.query.length)*this.state.pageIndex} aria-valuemin="0" aria-valuemax="100" style={{
                                    background:"#fd5f00",
                                    width:(100/this.state.query.length)*this.state.pageIndex+"%"}}/>
                                </div>
                            </div>
                        </CardHeader>
                                <CardBody>
                                {this.Dialog(this.state.progressNum)}
                                    <form className="subscribe-form" onSubmit={(e)=>{e.preventDefault()}}>
                                        {
                                            (()=>{
                                                if(this.state.pageIndex < 6 ){
                                                    return <input type="text" className="form-control" 
                                                        placeholder={this.state.query[this.state.pageIndex]} 
                                                        value={this.inputVal} 
                                                        ref={ref => { this.mydiv = ref }
                                                        }
                                                    />
                                                }else if(this.state.pageIndex == 6){
                                                    return <input type="number" className="form-control" 
                                                        placeholder={this.state.query[this.state.pageIndex]} 
                                                        value={this.inputVal} 
                                                        ref={ref => { this.mydiv = ref }
                                                        }
                                                />

                                                }else{
                                                    return <div>
                                                        <SearchMap emit={this.reciveEmit}></SearchMap>
                                                    </div>
                                                }
                                            })()
                                        }
                                        <Button type="button" className="btn btn-success" onClick={this.clickHandler}>Success</Button>
                                    </form>
                                </CardBody>
                        </Card>
                    </Col>
                </Row>  
                </Container>    
            </>
        )
    }
}

export default CreateHost;
