import React,{Component,createRef} from 'react';

import './Host.css';
import axios from 'axios'

class Host extends Component {
  
  state={
    inputVal:'',
    pageIndex:0,
    query:['category','meetingtitle','meetingdate','meetingdetail','meetingphoto','meetingcharge','meetingplace'],
    category:'',
    hostid:localStorage.getItem('loginId'),
    meetingtitle:'',
    meeting:'',
    meetingdate:'',
    meetingdetail:'',
    meetingplace:'',
    meetingphoto:'',
    meetingcharge:''
  }
  mydiv = createRef();


  test=(e)=>{
    e.preventDefault();
 
    this.setState({
      pageIndex:this.state.pageIndex+1,
      [this.state.query[this.state.pageIndex]]:this.mydiv.value,
      inputVal:""
    })
    this.mydiv.value="";
    if(this.state.pageIndex==this.state.query.length-1){
      this.axiosRequest();
    }
  }

  axiosRequest=()=>{
    const headers = {
      'Content-Type': 'application/json',
  }

  axios.post('http://localhost:9000/meeting/create',
             this.state,
              {headers: headers})
            .then(res=>{
                alert('방만들기 성공')
                this.props.history.push("/")
            })
      .catch(e=>{
          alert('방만들기 실패')
      })
}
   
formFunc=()=>{
  if(this.state.pageIndex <= 5 ){
    return <input type="text" className="form-control" 
    placeholder={this.state.query[this.state.pageIndex]} 
    value={this.inputVal} 
    ref={ref => { this.mydiv = ref }}
    />
  }else{
    return <div>여기는지도</div>
  }
}



  render(){
  console.log(100/this.state.query.length)
  return ( <div id="wrap">
            <div className="container">
              <h2>Basic Progress Bar</h2>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={(100/this.state.query.length)*this.state.pageIndex} aria-valuemin="0" aria-valuemax="100" style={{
                  background:"#fd5f00",
                  width:(100/this.state.query.length)*this.state.pageIndex+"%"}}>
                  <span className="sr-only">{(100/this.state.query.length)*this.state.pageIndex} Complete</span>
                </div>
              </div>
            </div>

          <section className="ftco-subscribe ftco-section bg-light">
            <div className="overlay">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-8 text-wrap text-center heading-section ftco-animate">
                    <h2 className="mb-4"><span>{this.state.query[this.state.pageIndex]}</span></h2>
                    {/* <h2 className="mb-4"><span>What will your group's me be?</span></h2> */}
                    <p></p>
                    <div className="row d-flex justify-content-center mt-4 mb-4">
                      <div className="col-md-8">
                        <form   className="subscribe-form" onSubmit={this.test}>
                          <div className="form-group d-flex">
                            

                            {this.formFunc()}



                            <button type="button"className="submit px-3" onClick={this.test}>next</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
       
      </div>
  );
}
}

export default Host;
