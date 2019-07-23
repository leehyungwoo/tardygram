import React, {Component} from 'react';
import ImageUploader from 'react-images-upload';
import axios from "axios"
import {FormGroup} from "reactstrap";
class Upload extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          pictures: [],
          file:null 
        };
        // this.onDrop = this.onDrop.bind(this);
      }

    // onDrop(pictureFiles, pictureDataURLs) {
    // this.setState({
    //         pictures: this.state.pictures.concat(pictureFiles),
    //     });
    //     console.log("어떤파일 : " + this.state.pictures)
    //     //여기 axios
    // }
    onChangeHandler=event=>{
      this.setState({
        file : URL.createObjectURL (event[0])
      })
      console.log(event[0])

      const data = new FormData()
      data.append('file', event[0])

      const headers ={
        "Content-Type":'multipart/form-data'
      }

      let id = "jmh1753"
      axios.post(`http://localhost:9000/member/upload/${id}`, data ,{ headers
        })
        .then(res => {
          console.log(res.statusText)
        }).catch(err =>{
          console.log(err)
        })
    }

    render(){
        return (
          <div className="App">
         
                 <FormGroup>
                            <ImageUploader className="form-control-alternative"  type="file"name="file" onChange={this.onChangeHandler}/>
                            <img src={this.state.file}/>
                  </FormGroup>
                              
          </div>
        );

  }

}

export default Upload;