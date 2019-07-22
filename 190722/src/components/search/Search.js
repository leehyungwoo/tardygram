import React, {Component} from 'react';
import axios from 'axios'
import './Search.css';

class Search extends Component {

 constructor(props){
   super(props)
   this.state={

   }
 }


 componentDidMount(){
   console.log("search 디드마운트 실행")
   const headers = {
     'Content-Type': 'application/json',
   }

   axios.get(`http://localhost:9000/meeting/selectall`,  {headers:headers})
     .then(res=>{
       alert("통신성공")
     })
     .catch(res=>{
       alert("통신실패")
     })
 }



 render(){
   return(
     <div>
       <div class="btn-group">
         <button type="button" class="btn btn-danger">Action</button>
         <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <span class="sr-only">Toggle Dropdown</span>
         </button>
         <div class="dropdown-menu">
           <a class="dropdown-item" href="#">Action</a>
           <a class="dropdown-item" href="#">Another action</a>
           <a class="dropdown-item" href="#">Something else here</a>
           <div class="dropdown-divider"></div>
           <a class="dropdown-item" href="#">Separated link</a>
         </div>
       </div>
     </div>
   );
 }
}

export default Search;