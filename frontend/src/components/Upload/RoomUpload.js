import React, {Component} from 'react';
import ImageUploader from 'react-images-upload';
// import {
//   Button
// } from "reactstrap";
import axios from "axios"
import {FormGroup} from "reactstrap";
import './css/RoomUpload.css'

class RoomUpload extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //       pictures: [],
    //       file:null,
    //       roomImage:''
    //     };
    //   }
    constructor(props) {
      super(props);
      this.state = { pictures: [] };
      console.log("프룹스",props)
      // this.onDrop = this.onDrop.bind(this);
  }
  componentDidMount(){

  }
  onChangeHandler=event=>{
    console.log("실행")
    // this.setState({
    //   file : URL.createObjectURL (event[event.length-1])
    // })
    const data = new FormData()
    console.log(event)
    data.append('file', event[event.length-1])
    console.log(data)
    
 
    const headers ={
      "Content-Type":'multipart/form-data'
    }
   
    let roomno = this.props.keyparams 
    axios.post(`/room/upload/${roomno}`, data ,{headers})
 
      .then(res => {
        console.log("여기",res)

        this.props.emit();
      }).catch(err =>{
        console.log(err)
      })
    
  }


    
    render(){
      
        return (
          <>
       
            <ImageUploader className="form-control-alternative"  type="file"name="file" onChange={this.onChangeHandler}/>   
          
           </>
        );
        

  }

}

export default RoomUpload;