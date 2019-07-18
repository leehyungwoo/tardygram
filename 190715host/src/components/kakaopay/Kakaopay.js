import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';
class Kakaopay extends Component{

    constructor(props){
        super(props);
        this.state = {
            amount : '',
            memberid : ''
          }
    }

    render(){
        return(
            <div>
                <form onSubmit="{this.kakaopay}">
                    <Form>
                        <Form.Group controlId="memberid">
                            <Form.Label>id </Form.Label>
                            <input type="text" name='memberid' onChange={this.memberid}></input>
                        </Form.Group>      
                        <Form.Group controlId="amount">
                            <Form.Label>충전할 금액 </Form.Label>
                            <input type="text" name='amount' onChange={this.totalAmountChange}></input>
                        </Form.Group>                       
                    </Form>
                    <button onClick={this.Kakaopay}>충전하기</button>
                </form>
            </div>
        );
    }

    totalAmountChange = e =>{
        this.setState({amount: e.target.value})
    }
    memberid = e =>{
        this.setState({memberid: e.target.value})
    }

    Kakaopay = e =>{
        e.preventDefault()
        this.setState({submitted: true})
        alert("카카오페이 버튼클릭");

        const headers = {
            'Content-Type': 'application/json',
            'Authorization' : 'e523b4aefc19df61c38d857920fc96a3',
            'Access-Control-Allow-Origin': '*'
        }

        let data = {
            amount : this.state.amount,
            memberid : this.state.memberid
        }

        alert(data.amount + data.memberid);
        axios.post('http://localhost:9000/kakaoPay', JSON.stringify(data), {headers:headers})
            .then(res =>{
                alert('kakaopay성공  url:'+res.data)
                window.open(res.data,true)
            })
            .catch(res =>{
                alert('kakaopay실패')
            })
    }


}

export default Kakaopay;