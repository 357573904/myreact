import React, { Component } from 'react';
import $ from 'jquery';
import "./Longin.css"
// import "../css/inconfont.css".
// import "../css/inconfont.css"
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';



class Longin extends Component {
    login(){
        console.log("aa")
        this.props.history.push('/loginis')
    }
    register(){
        console.log("bb")
        this.props.history.push('/zhuce')
    }
    tui(){
      this.props.history.push('/home')
    }
  render() {
    
    return (
        <div id= "login">
            <div className="tui" onClick={this.tui.bind(this)}>x</div>
            {/* <i class="iconfont icon-bendiyinle"></i> */}
            <div className="abtn"> 
                 <Button type="primary"  className="ath" onClick={this.login.bind(this)}>登录</Button><WhiteSpace />
                 <Button type="warning" className="ath" onClick={this.register.bind(this)}>注册</Button><WhiteSpace />
            </div>
      </div>
    );
  }
}

export default Longin;