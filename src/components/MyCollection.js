import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'
import { Button, WhiteSpace,  NavBar, Icon,WingBlank } from 'antd-mobile';
import '../css/mycollection.css';
import MyCollectionSingle from './MyCollectionSingle';
import MyCollectionSheet from './MyCollectionSheet';
class MyCollection extends Component {
    single(){
        this.props.history.push("/mymollectionsingle")
    }
    sheet(){
        this.props.history.push("/mymollectionsheet")
    }
    render(){
        return(
            <div id="mycollection">
                  <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {  this.props.history.push("/shouye/home")  }}
                >我的收藏</NavBar>

                <Router>
                    <div>
                    <div className="mycollection-herd">

                        <NavLink to="/mymollectionsingle">单曲</NavLink>
                        <NavLink to="/mymollectionsheet">歌单</NavLink>
                        {/* <p onClick={this.single.bind(this)}>单曲</p>
                        <p onClick={this.sheet.bind(this)}>歌单</p> */}
                    </div>
                
                    <div>
                         <Route path="/mymollectionsingle" component={MyCollectionSingle}></Route>
                         <Route path="/mymollectionsheet" component={MyCollectionSheet}></Route>
                         <Redirect to="/mymollectionsheet"/>
                    </div>
                    </div>
                 </Router>
            </div>
        )
    }

}
export default MyCollection;