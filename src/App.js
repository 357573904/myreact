import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'
import './App.css';
import Longin from "./components/Longin"
import Longinis from "./components/Longinis"
import Zhuce from "./components/Zhuce"
// import Home from "./components/Home"
// import LocalMusic from "./components/LocalMusic"
// import Search from "./components/Search"
import Yinyuebofang from "./components/Yinyuebofang"
import Shouye from "./components/Shouye"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/login" component={Longin} ></Route>
              <Route path="/yinyuebofang" component={Yinyuebofang} ></Route>
              <Route path="/loginis" component={Longinis} ></Route>
              <Route path="/zhuce" component={Zhuce} ></Route>
              <Route path="/shouye" component={Shouye} ></Route>

              {/* <Route path="/search" component={Search} ></Route>
              <Route path="/home" component={Home} ></Route>
              <Route path="/mycollection" component={MyCollection} ></Route>
              <Route path="/localmusic" component={LocalMusic} ></Route> */}
              <Redirect to="/shouye"/>
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
