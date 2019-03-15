import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch,} from 'react-router-dom'
import { Button, WhiteSpace,  NavBar, Icon,WingBlank } from 'antd-mobile';
import $ from "jquery";
import "../css/Register.css"

//状态管理
import Action from "../redux/Action";
import Store from "../redux/Store";
class Longinis extends Component {

  constructor(props){
    super(props)
    this.state={
      tishi:""
    }
  }
    login(){
      console.log(this.refs.zhanghu.value)
      console.log(this.refs.mima.value)
      var nme = this.refs.zhanghu.value;
      var pas = this.refs.mima.value;
      var _this=this;
        $.ajax({
            type:"post",
            url:"http://47.93.223.124/cool_cat/login.do",
            data:{phone:nme,password:pas},
            dataType:"json",
            success:function(data){
             console.log(data)
             if(data.code=="1"){
                _this.setState({
                  tishi:data.info
                })
             }else{
              Store.dispatch(Action.Add({name:data.info.phone,id:data.info.id}))
              _this.props.history.push("/shouye/home")
             }
          
            }
        })
      
    }
  render() {
    
    return (
        <div id= "register">
                <div className="top" style={{position:"relative"}}>
                    <span onClick={() => {  this.props.history.goBack()  }} className="zoo iconfont icon-xiangzuo"></span>
                    登录
                </div>
            <div className="rushu"> 
                账号<input type="text" placeholder="手机号/账户名" ref="zhanghu"/>
            </div>
            <div className="rushu">
                密码<input type="password"  placeholder="请输入密码" ref="mima" />
            </div>
            <p>{this.state.tishi}</p>
            <div className="login"> 
                 <Button type="primary"  className="ath" onClick={this.login.bind(this)}>登录</Button><WhiteSpace />
            </div>
            <div>？忘记密码</div>
      </div>
    );
  }
}

export default Longinis;