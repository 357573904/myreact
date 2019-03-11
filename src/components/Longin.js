import React, { Component } from 'react';
import "./Longin.css"
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';



class Longin extends Component {
   
  render() {
    
    return (
        <div id= "login">
            <div className="tui">x</div>
            <div className="abtn"> 
                 <Button type="primary"  className="ath">登录</Button><WhiteSpace />
                 <Button type="warning" className="ath">注册</Button><WhiteSpace />
                 
            </div>
      </div>
    );
  }
}

export default Longin;