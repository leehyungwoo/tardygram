import React, {Component} from 'react';
import ImageUploader from 'react-images-upload';
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
      this.onDrop = this.onDrop.bind(this);
  }


    // onChangeHandler=event=>{
    //   console.log("실행!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    //   this.setState({
    //     file : URL.createObjectURL (event[event.length-1])
    //   })

    //   const data = new FormData()
    //   data.append('file', event[event.length-1])

    //   const headers ={
    //     "Content-Type":'multipart/form-data'
    //   }

    //   let id = localStorage.getItem("loginId")
    //   axios.post(`http://localhost:9000/room/upload/${id}`, data ,{ headers
    //     })
    //     .then(res => {
    //       console.log('res: ' + res)
    //       console.log('res.data : ' + res.data)
    //       this.setState({
    //         roomphoto : res.data
    //       })
    //       this.props.emit(res.data);
    //     }).catch(err =>{
    //       console.log(err)
    //     })
      
    // }


    onDrop = (pictureFiles, pictureBase64) => {
      // picutreFiles에 boundery 정보가 return 되고,
      // pictureBase64 에 base64 정보가 return 된다. 기본 array로 return
   
      this.setState({
          files: this.state.files.concat(pictureFiles)
      });
      // 여기에 ajax를 넣을 수 있다.
      console.log("files는 : " + this.state.files)
     };

    
    render(){
        return (
          // <>       
          //   <ImageUploader className="form-control-alternative"  type="file"name="file" onChange={this.onDrop}/>                     
          // </>
   
          <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }} withPreview={true} />
  
        );

  }

}

export default RoomUpload;