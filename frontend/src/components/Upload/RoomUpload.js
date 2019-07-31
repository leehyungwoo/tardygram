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
      console.log("프룹스",props)
      // this.onDrop = this.onDrop.bind(this);
  }

  onChangeHandler=event=>{
    console.log("실행")
    // this.setState({
    //   file : URL.createObjectURL (event[event.length-1])
    // })
    const data = new FormData()
    data.append('file', event[event.length-1])
    console.log(data)
    
  
   
    console.log('나는 프롭스다 : ' + this.props.keyparams)
    let roomno = this.props.keyparams
    axios.post(`/room/upload/${roomno}`, data )
      .then(res => {
        console.log(res)

        this.props.emit();
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