import React, {Component, createRef} from "react";
import axios from 'axios'
import ReactDatetime from "react-datetime";
// import TimePicker from './TimePicker.jsx'
import TimePickerWrapper from './TimePickerWrapper.js'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Progress,
  } from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";
import SearchMap from './SearchMap'
import DoneHost from './DoneHost'
import Header from "components/Headers/Header.js";
import RoomUpload from '../../components/Upload/RoomUpload'

class CreateHost extends Component {
    state={
        inputVal:'',
        pageIndex:0,
        query:['roomtitle','roomcategory','roomdate','roomdetail','roomphoto','password','roomcharge','roomplace'],
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
        roomlatitude:''   
      }
      mydiv = createRef();

      handleIncrease=()=>{
          this.setState({
            progressNum : this.state.progressNum + 1
          })
          console.log(this.state.progressNum)
        //   this.Dialog(this.state.progressNum)
      }


      imageTag=()=>{       
        if(this.state.roomphoto){         
          return ( 
            <img  src={this.state.roomphoto} style={{display:"block",minWidth:"300px",maxWidth:"300px",maxHeight:"200px", minHeight:"200px", margin:"0 auto"}} ></img>
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


      Dialog = (e) => {
        switch(e) {
            case 0:
                return (
                <div>
                        <h1>First, What will your group’s name be?</h1>
		                <h2>Choose a name that will give people a clear idea of what the group is about. Feel free to get creative! You can edit this later if you change your mind.</h2>
                </div>
                    );
            case 1:
                return (
                    <div>
                            <h1>Choose a few topics that describe your group's interests</h1>
                            <h2>Be specific! This will help us promote your group to the right people. You can choose up to 15 topics.</h2>
                    </div>
                        );
            case 2:
                return (
                    <div>
                            <h1>set your group’s Time</h1>
                            <h2>Set Group's timly room time. </h2>
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
                                timeFormat={false}
                                />
                            </InputGroup>
                            <TimePickerWrapper timeMode="12"/>
                            </FormGroup>
                    </div>
                
                        );
            case 3:
                return (
                    <div>
                            <h1>Now describe what your group will be about</h1>
                            <h2>People will see this when we promote your group, but you’ll be able to add to it later, too</h2>
                    </div>
                        );            
            case 4:
                return (
                    <div>
                            <h1>Upload group's profile picture</h1>
                            <h2>Group's meet locally and in person. We’ll connect you with people who live in and around your area.</h2>
                            <div class="row">       
                                <div class="col-md-6"><RoomUpload emit={this.reciveEmit}></RoomUpload></div>
                                 <div class="col-md-6 img-responsive img-thumbnail">{this.imageTag()}</div>                                
                            </div>
                            <br></br>
                            
                                       
                           
          
                    </div>
                        ); 
            case 5:
                return (
                    <div>
                            <h1>set your group password</h1>
                    </div>
                        ); 
            case 6:
                return (
                    <div>
                            <h1>Just set your group tardycash</h1>
                    </div>
                        ); 
            case 7:
                return (
                    <div>
                            <h1>Almost done! Set your group’s location</h1>
                            <h2>Group's meet locally and in person. We’ll connect you with people who live in and around your area.</h2>
                    </div>
                        ); 
             defalut:
                   break;
        }
    };

      clickHandler=(e)=>{
       
        e.preventDefault();
        this.handleIncrease()
        
        if(this.state.pageIndex<this.state.query.length-1){

            this.setState({
            pageIndex:this.state.pageIndex+1,
            [this.state.query[this.state.pageIndex]]:this.mydiv.value,
            inputVal:""
            })
            this.mydiv.value="";
        }else{

            if(this.state.pageIndex==this.state.query.length-1){
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
                roomphoto:chilstate
            })
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
                                        <Button type="button" className="btn btn-success" onClick={this.clickHandler}>Next</Button>
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
