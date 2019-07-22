import React, {Component} from 'react';
import axios from 'axios'
import './Search.css';
import image_1 from '../../images/image_1.jpg'
import image_3 from '../../images/image_3.jpg'

class Search extends Component {

 constructor(props){
   super(props)
   this.state={
      mList:[]
   }
 }


 componentDidMount(){
   console.log("search 디드마운트 실행")
   const headers = {
     'Content-Type': 'application/json',
   }

   axios.get(`http://localhost:9000/meeting/selectall`,  {headers:headers})
     .then(res=>{
       console.log(res.data.mList)

       res.data.mList.map((item,index)=>{
         return this.setState({
           mList:[...this.state.mList, item]
          })       
       })

     })
     .catch(res=>{
       alert("통신실패")
     })
 }



 render(){
   return(
    <div>
    <section className="ftco-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12 heading-section ftco-animate">
                            <h2 className="mb-4"><span>전체 모임방</span></h2>
                        </div>
                    </div>


                    <div className="row">
                    {this.state.mList.map((contact,i)=>{
                      return (
                        <div className="col-md-3 col-md-3 ftco-animate">
                            <div className="blog-entry">
                                <div className="img img-big img-big-2 d-flex align-items-end" style={{backgroundImage: `url(${image_1})`}}>
                                    <div className="overlay" />
                                    <div className="text">
                                        <span className="subheading">Title</span>
                                        <h2 className="colorwhite">{contact.meetingtitle}</h2>
                                        <h4 className="colorwhite">{contact.meetingdate}</h4>
                                        <p className="mb-0"><button className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></button></p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        );
                      })}                       
                    </div>

                    
                </div>

            </div>
          

        </div>
    </section>
</div>
 
   );
 }
}

export default Search;