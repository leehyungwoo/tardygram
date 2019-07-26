import React, {Component} from 'react'

import {
    Card,
    Container,
    Row,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";

class roomDetail extends Component{
    
    constructor(props){ 
        super(props)
        console.log(props.match.params.id)
   
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
                  
                   {this.props.match.params.id}
              </Card>
            </div>
          </Row>
        </Container>
      </>
        )
    }
}

export default roomDetail