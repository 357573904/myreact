import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'
import './App.css';
import Longin from "./components/Longin"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* <NavLink to="/login">首页</NavLink> */}
        
          
            <Route path="/login" component={Longin} ></Route>
            
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
