import React, { Component } from 'react';
import $ from "jquery";
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import "../css/Register.css"
class Zhuce extends Component {
    constructor(props){
        super(props)
        this.state={
            tishi:""
        }
    }
    login(){
      
        if(this.refs.pohom.value.length==0 || this.refs.yzm.value.length==0 || this.refs.mima1.value.length==0 || this.refs.mima2.value.length==0){
            this.setState({tishi:"信息未填写完整"})
        }else{
            
            if(this.refs.yzm.value != this.state.tishi){
                this.setState({tishi:"验证码错误"})
            }else{
                if(this.refs.mima1.value != this.refs.mima2.value){
                    this.setState({tishi:"两次密码错误"})
                }else{
                    var _this=this;
                    $.ajax({
                        type:"post",
                        url:"  http://47.93.223.124/cool_cat/resiger.do",
                        data:{phone:_this.refs.pohom.value,password:_this.refs.mima1.value},
                        dataType:"json",
                        success:function(data){
                        
                        if(data.code=="1"){
                            _this.setState({tishi:data.info})
                        }else{
                            _this.props.history.push("/loginis")
                        }
                    
                        }
                    })

                }
            }
        }
     

    }
    yzm(){
      
       this.setState({tishi:Math.floor((Math.random()*(9999-1000+1))+1000)})
    }
  render() {
    
    return (
        <div id= "zhuce">
            <div className="top" style={{position:"relative"}}>
                <span onClick={() => {  this.props.history.goBack()  }} className="zoo iconfont icon-xiangzuo"></span>
                账户注册
                
            </div>
           
            <div className="rushu"> 
                手机号<input type="text" placeholder="手机号/账户名" ref="pohom"/>
            </div>
            <div className="rushu">
                验证码<input type="text"  placeholder="请输入密码" ref="yzm"/>
            </div>
            <div className="rushu">
                密码<input type="password"  placeholder="请输入密码" ref="mima1"/>
            </div>
            <div className="rushu">
                确认密码<input type="password"  placeholder="请输入密码" ref="mima2"/>
            </div>
            <p>{this.state.tishi}</p>
            <div className="login"> 
                 <Button type="primary"  className="ath" onClick={this.yzm.bind(this)}>获取验证码</Button><WhiteSpace />
                 <Button type="primary"  className="ath" onClick={this.login.bind(this)}>注册</Button><WhiteSpace />
            </div>
      
      </div>
    );
  }
}

export default Zhuce;