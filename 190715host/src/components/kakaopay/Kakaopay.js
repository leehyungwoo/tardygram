import React, {Component} from 'react';
import axios from 'axios';

class Kakaopay extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <form>
                    <button onClick={this.Kakaopay}>카카오페이버튼</button>
                </form>
            </div>
        );
    }

    Kakaopay=e=>{
        e.preventDefault()
        alert("카카오페이 버튼클릭");

        const headers = {
            'Content-Type': 'application/json',
            'Authorization' : 'e523b4aefc19df61c38d857920fc96a3',
            'Access-Control-Allow-Origin': '*'
        }

        axios.post('http://localhost:9000/kakaoPay', {headers:headers})
            .then(res =>{
                alert('kakaopay성공  url:'+res.data)
            })
            .catch(res =>{
                alert('kakaopay실패')
            })
    }


}

export default Kakaopay;