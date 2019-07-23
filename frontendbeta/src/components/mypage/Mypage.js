import React,{Component} from 'react';
import axios from 'axios'
import author from '../../images/author.jpg'
import Upload from '../../components/upload/Upload' 
import profileimage from '../../images/blog-1.jpg'
 
 
  
import bg_4 from '../../images/bg_4.jpg'
 

import './Mypage.css';

class Mypage extends Component {

 constructor(props){
   super(props)
   this.state={
     birthday:'',
     email:'',
     gender:'',
     memberid:'',
     money:'',
     name:'',
     profileimage:'',
     phone:'',
     hostProgressEx:[],
     MemberProgressEx:[] 
   }
   
 }

componentDidMount(){
 console.log("라이프사이클 로직실행")
  const headers = {
     'Content-Type': 'application/json',
 }

 let id ="moonho";
 axios.get(`http://localhost:9000/member/mypage/${id}`,  {headers:headers})
     .then(res =>{
         //alert('통신성공  url:')
      console.log(res.data)

      let uInfo =res.data.uInfo

      this.setState({
        birthday:uInfo.birthday,
        email:uInfo.email,
        gender:uInfo.gender,
        memberid:uInfo.memberid,
        money:uInfo.money,
        name:uInfo.name,
        profileimage:uInfo.profileimage,
        phone:uInfo.phone
      }) 

      res.data.hostProgressEx.map((item,index)=>{
          return this.setState({
            hostProgressEx:[...this.state.hostProgressEx,item] 
          })
      })

      res.data.MemberProgressEx.map((item,index)=>{
        this.setState({
          MemberProgressEx:[...this.state.MemberProgressEx,item] 
        })
      })


     })
     .catch(res =>{
         alert('통신 실패')
     })
 
}


Kakaopay = e =>{
  e.preventDefault()
  //this.setState({submitted: true})
  alert("카카오페이 버튼클릭");
  let chargeinput = "<input type='text' value='충전금액'/>"
  document.getElementById("charge").after(chargeinput)
  /* const headers = {
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
      }) */
}






 render(){
     return (
      <div id="wrap">
      <section className="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${bg_4})`}}>
         <div className="overlay" />
         <div className="container">
           <div className="row no-gutters slider-text align-items-end justify-content-center">
             <div className="col-md-9 ftco-animate pb-5 text-center">
               <h1 className="mb-3 bread">Mypage</h1>
               <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>About us <i className="ion-ios-arrow-forward" /></span></p>
             </div>
           </div>
         </div>
       </section>
       <section className="ftco-counter ftco-section ftco-no-pt ftco-no-pb img" id="section-counter">
         <div className="container">
           <div className="row d-flex">
             <div className="col-md-4 d-flex">
                <div className="sidebar-wrap">
                  <div className="sidebar-box p-4 about text-center ftco-animate">
                    <h2 className="heading mb-4">About Me</h2>
                    <img src={author} className="img-fluid" alt="Colorlib Template" />
                    <div className="text pt-4">
                      <p>
                      <strong>name : {this.state.name}</strong><br/> email :{this.state.email}<br/> gender : {this.state.gender}<br/> phone : {this.state.phone}<br/> birthday : {this.state.birthday}<br/> tardycash : {this.state.money}<br/>
                      <button type="button" className="btn btn-outline-warning" onClick={this.Kakaopay} id="charge">충전하기</button>
                      </p>
                      **이미지업로드**
                       <Upload></Upload>
                    </div>
                  </div>
              
                </div>
       

             </div>
             <div className="col-md-8 pl-md-5 py-5">
               <div className="row justify-content-start pb-3">
                 <div className="col-md-12 heading-section ftco-animate">
                   <h2 className="mb-4"><span>About Stories</span></h2>
                   <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                   <div className="block-18 text-center py-5 bg-light mb-4">
                     <div className="text">
                       <strong className="number" data-number={10}>0</strong>
                       <span>Years of Experienced</span>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                   <div className="block-18 text-center py-5 bg-light mb-4">
                     <div className="text">
                       <strong className="number" data-number={200}>0</strong>
                       <span>Foods</span>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                   <div className="block-18 text-center py-5 bg-light mb-4">
                     <div className="text">
                       <strong className="number" data-number={300}>0</strong>
                       <span>Lifestyle</span>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                   <div className="block-18 text-center py-5 bg-light mb-4">
                     <div className="text">
                       <strong className="number" data-number={40}>0</strong>
                       <span>Happy Customers</span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       
       <section className="ftco-section">
          <div className="container">
          <h2 className="mb-4"><span>내가 진행중인 모임</span></h2>
          <div className="row">
          
          {this.state.hostProgressEx.map((contact,i)=>{
          return (
          <div key={i} className="col-sm-4 " > 
            <img src={profileimage} style={{width:"70%",height:"300px"}}></img> <br/>       
            {contact.meetingphoto}<br/>
            date:{contact.meetingdate}<br/>
            <h5><button>Title &amp; {contact.meetingtitle}</button></h5>
            <p className="mb-0"><a href="#" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
          </div>
          );
          })}
          </div>
          </div>
        </section>
        

      
          <div className="container">
          <h2 className="mb-4"><span>내가 참가한 모임</span></h2>
          <div className="row">
          
          {this.state.MemberProgressEx.map((contact,i)=>{
          return (
          <div key={i} className="col-sm-4 " > 
            <img src={profileimage} style={{width:"70%",height:"300px"}}></img> <br/>       
            {contact.meetingphoto}<br/>
            date:{contact.meetingdate}<br/>
            <h5><button>Title &amp; {contact.meetingtitle}</button></h5>
            <p className="mb-0"><a href="#" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
          </div>
          );
          })}
          </div>
          </div>
    



   </div>
     );
 }


}


export default Mypage;