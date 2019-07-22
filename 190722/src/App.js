import React,{Component} from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
// import Nav from './common/nav/Nav'
import Footer from './common/footer/Footer'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Foods from './components/foods/Foods'
import Lifestyle from './components/lifestyle/Lifestyle'
// import Single from './components/single/Single'
// import Test from './components/test/Test'
import Kakaopay from './components/kakaopay/Kakaopay'

import Host from './components/host/Host'
import Search from './components/search/Search'
import Mypage from './components/mypage/Mypage'
import Login from './components/login/Login'
import Join from './components/join/Join'

import './App.css';

class App extends Component {
constructor(props){
  super(props)
  console.log('hi')
}
componentDidMount() {
 
 
}
render(){

  return (
    <div className="App">
      <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
              <Link className="navbar-brand link" to="/">TardyGram<span>.</span></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu" /> Menu
              </button>
              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                 <li className="nav-item"><Link className="nav-link" to="/about">about</Link></li>
                   {/*
                  <li className="nav-item"><Link className="nav-link" to="/contact">contact</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/foods">foods</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/lifestyle">lifestyle</Link></li> */}
                  <li className="nav-item"><Link className="nav-link" to="/host">Host</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/search">Search</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/mypage">Mypage</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/join">Join</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/kakaopay">Kakaopay</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/host" component={Host} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/login" component={Login}   />
          <Route exact path="/join" component={Join} />
          <Route exact path="/kakaopay" component={Kakaopay} />



          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/foods" component={Foods} />
          <Route exact path="/lifestyle" component={Lifestyle} />
           <Footer></Footer>
      </Router>
      
    </div>
  );
}
}

export default App;
