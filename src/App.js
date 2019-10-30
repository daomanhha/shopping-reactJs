import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainIndex from './components/Main_index';
import MainCart from './components/Main_cart';

class App extends Component {
  componentDidMount () {
    let script = document.createElement("script");
    script.src = "./js/myJs1.js";
    script.async = true;
    document.body.appendChild(script);
}
componentWillUnmount(){
    let script = document.querySelector("script[src='./js/myJs1.js']")
    if(script){
        script.remove();
    }
}
  render(){
  return (
  <Router >
    <div className="App">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="App">
        <Header />
        <Switch>
          <Route path="/" exact component={()=> <MainIndex/>}/>
          <Route path="/cart" component={()=><MainCart/>}/>
        </Switch>
        <Footer />
      </div>
    </div>
  </Router>
        
    );
    }
  }

  export default App;
