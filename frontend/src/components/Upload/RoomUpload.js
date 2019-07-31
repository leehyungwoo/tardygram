import React, {Component} from 'react';
import {
  Button
} from "reactstrap";
import axios from "axios"
import {FormGroup} from "reactstrap";

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
      // this.onDrop = this.onDrop.bind(this);
  }

  onChangeHandler=event=>{
    console.log("실행")
    // this.setState({
    //   file : URL.createObjectURL (event[event.length-1])
    // })
    const data = new FormData()
    data.append('file', event[event.length-1])

    const headers ={
      "Content-Type":'multipart/form-data'
    }
    var id = localStorage.getItem("loginId")
    axios.post(`/member/upload/${id}`, data ,{ headers})
      .then(res => {
        console.log(res)
        this.props.emit(res.data);
      }).catch(err =>{
        console.log(err)
      })
    
  }


    
    render(){
        return (
          <>
       
   
          <input 
          type="file" 
          id="uploadInput" 
          style={{width:"1px", height:"1px",visibility:"hidden", oveflow:"hidden"}} 
          withPreview={true} 
          onChange={this.onChangeHandler}
          />
          <Button
          color="info"
          onClick={e => {document.getElementById("uploadInput").click()}}
        > 
           Room Image Upload
           </Button>
           </>
        );


  }

}

export default RoomUpload;