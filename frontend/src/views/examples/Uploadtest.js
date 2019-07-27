import React, {Component, createRef} from "react";
import axios from 'axios'
import ReactDatetime from "react-datetime";
import ImageUploader from 'react-images-upload';

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




class Uploadtest extends Component{
    constructor(props){
        super(props)
        this.state ={
            title:'',
            pictureFiles:[],
            files:[]
        }
    }

    
    title=(e)=>{      
        this.setState({
            title:e.target.value
        })        
    }

    onDrop = (pictureFiles, pictureBase64) => {    
        console.log('pictureFiles',pictureFiles)
        console.log(pictureFiles)
        //const data = new FormData();
        //data.append('file', pictureFiles[pictureFiles.length-1])
        //console.log('FormData',data)
        this.setState({
            pictureFiles : pictureFiles
        })   
        
        console.log('state에 저장된 photo : ' + this.state.pictureFiles)
            
    };


       clickHandler=(e)=>{   
        const headers = {
            "Content-Type":'multipart/form-data'
            }
            const data = new FormData();
            console.log(this.state.pictureFiles[this.state.pictureFiles.length-1])



            
            data.append('file', this.state.pictureFiles[this.state.pictureFiles.length-1])
            
            axios.post(`http://localhost:9000/room/create2`,
                        data,
                        {headers})
                        .then(res=>{
                            alert('방만들기 성공')
                            this.props.history.push("/admin/DoneHost")
                        })
                .catch(e=>{
                    alert('방만들기 실패')
                })
       }



    render(){
        return(
            <>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <input type="text" onChange={this.title}></input>
                <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }} withPreview={true} onChange={this.onDrop}/>
                <Button type="button" className="btn btn-success" onClick={this.clickHandler}>Success</Button>
            </>
        )
    }
}

export default Uploadtest