import React, {Component} from 'react'
import {
    Card,
    Container,
    Row,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import axios from "axios";
class roomDetail extends Component{
    
    constructor(props){ 
        super(props)
         
      
   
    }
    
 
     componentDidMount(){
       
     }
  
    render(){
        return(
    <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow border-0">
                 디테일
              </Card>
            </div>
          </Row>
        </Container>
      </>
        )
    }
}

export default roomDetail