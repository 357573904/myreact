import React, { Component } from 'react';
import $ from 'jquery';
import { Button, WhiteSpace, SearchBar, NavBar, Icon,WingBlank } from 'antd-mobile';
import '../css/yinyuebofang.css';

import Store from "../redux/Store";
import Action from "../redux/Action";
class Yinyuebofang extends Component {
    constructor(props){
        super(props)
        this.state={
            list:{},
            minun:Store.getState().huange
        }
        this.change=this.change.bind(this)
    }
        change(){
            this.setState({
                huange:Store.getState().minun,
            })
        }
    componentWillMount(){
        
        Store.subscribe(this.change)
    }
    pinglun(){
        this.props.history.push("/shouye/comm")
    }
    render(){
        var _this=this;
        return(
            <div id="yinyuebofang" >
              <img src={this.state.minun.pic} className="ybeijing"/>
                <NavBar
                        className="heihg"
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => {  this.props.history.goBack()  }}
                        rightContent={[
                          
                            <Icon key="1" type="ellipsis" />,
                          ]}
                        >
                    {this.state.minun.name} 
                     
                    </NavBar>
                    <div className="gesi">
                      s

                    </div>
                  <div className="dibu">
                  <div className="gcaozuo">
                        <div>
                            <p className="iconfont">&#xe625;</p>
                            
                        </div>
                        <div>
                            <p className="iconfont">&#xe608;</p>
                       
                        </div>
                        <div onTouchEnd={this.pinglun.bind(this)}>
                            <p className="iconfont">&#xe627;</p>
                            
                        </div>
                        <div>
                            <p className="iconfont">&#xe67f;</p>
                         
                        </div>
                        <div>
                            <p className="iconfont">&#xe626;</p>
                         
                        </div>
                    </div>
                    <div className="audio">
                        <i  className="iconfont"> &#xe7f8;</i>
                         <audio controls="controls" src={this.state.minun.url}/> 
                         <i  className="iconfont"> &#xe650;</i>
                    </div>
                  </div>

                  

            </div>
        )
    }

}
export default Yinyuebofang;