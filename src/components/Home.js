import React, { Component } from "react";
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'
import '../css/home.css';
import My from "./My"
import Ting from "./Ting"
import Kan from "./Kan"
import Chang from "./Chang"
import '../font/iconfont.css';

import { Drawer, List, NavBar, Icon ,Toast ,Switch,Slider, WingBlank, WhiteSpace} from 'antd-mobile';
import { createForm } from 'rc-form';

function failToast() {
    Toast.fail('已关闭 !!!', 1);
  }
  function successToast() {
    Toast.success('已打开!!!', 1);
  }
  


class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            checked: true,
            checked1: false,
            display:"none",
            display1:"block",
            delheid:"none",
        }
    }
    state = {
        open: false,
      }
      onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
      }
      //播放暂停开关
      zht(){
        if(this.state.display=="none"){
            this.setState({
                display:"block",
                display1:"none"
            })
        }else{
            this.setState({
                display:"none",
                display1:"block"
            }) 
        }
    }
    //下一首
    next(){
        
    }
      //打开播放列表
    list(){
        this.setState({
            delheid:"block"
        })
    }
    //   关闭播放列表
      delPlaylist(){
          console.log("aa")
        this.setState({
            delheid:"none",
        })
      }
      //搜索框
      search(){
        this.props.history.push("/shouye/search")
      
      }

    render(){
       
        const sidebar = (<List>

            {/* 左侧点击菜单 */}
                   <ul className="home-caidan">
                        <li>
                        <div>
                            <i className="iconfont">&#xe625;</i> 消息中心
                            </div>
                        </li>
                        <li>
                        <div>
                            <i className="iconfont">&#xe61d;</i> 皮肤中心
                            </div>
                        </li>
                        <li>
                            <div>
                            <i className="iconfont">&#xe60c;</i> 会员中心
                            </div>
                        </li>
                        <li>
                            <div>
                            <i className="iconfont">&#xe600;</i> 流量中心
                            </div>
                        </li>
                        <li>
                            <div>
                            <i className="iconfont">&#xe600;</i> 流量中心
                            </div>
                        </li>
                        <li>
                           
                            <List>
                            <List.Item
                                extra={<Switch
                                    checked={this.state.checked}
                                    onChange={() => {
                                    this.setState({
                                        checked: !this.state.checked,
                                    });
                                    if(this.state.checked){
                                        failToast()
                                    }else{
                                        successToast()
                                    }
                                    }}
                                />} 
                                ><i className="iconfont">&#xe600;</i> 桌面歌词</List.Item>
                                   </List>
                        
                        </li>
                        <li>
                        <List>
                            <List.Item
                                extra={<Switch
                                    checked={this.state.checked1}
                                    onChange={() => {
                                    this.setState({
                                        checked1: !this.state.checked1,
                                    });
                                    if(this.state.checked1){
                                        failToast()
                                    }else{
                                        successToast()
                                    }
                                    }}
                                />}
                                ><i className="iconfont">&#xe600;</i> 桌面歌词</List.Item>
                                   </List> 
                        </li>
                        <li>
                            <span>
                                <i className="iconfont">&#xe622;</i> 设置
                            </span>
                            <span>
                                <i className="iconfont">&#xe650;</i> 退出
                            </span>
                        </li>
                   </ul>
          </List>)
        return(
            <div id="home">
                  <Router>
                  <div>
                      {/* 头部导航 */}
                      <header>
                            <div className="toop">
                            <NavBar className="zuo iconfont icon-mulu" onLeftClick={this.onOpenChange}></NavBar>
                            <span className="you iconfont icon-hao"></span>
                            <span className="fang iconfont icon-fangdajing"></span>
                            <div className="sha">
                                <div className="zho">                     
                                    <NavLink to="/shouye/home/my"><span>我</span></NavLink>
                                    <NavLink to="/shouye/home/ting"><span>听</span></NavLink>
                                    <NavLink to="/shouye/home/kan"><span>看</span></NavLink>
                                    <NavLink to="/shouye/home/chang"><span>唱</span></NavLink>                      
                                </div>
                            </div>           
                            <div className="xia">
                                <input onClick={this.search.bind(this)} type="text"/>
                            </div>
                            </div>
                        </header>

              
                    <Drawer
                        className="my-drawer"
                        style={{ minHeight: document.documentElement.clientHeight }}
                        enableDragHandle
                        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                        sidebar={sidebar}
                        open={this.state.open}
                        onOpenChange={this.onOpenChange}
                    >   <div className="home-connet">
              
                                <Route path="/shouye/home/my" component={My}></Route>
                                <Route path="/shouye/home/ting" component={Ting}></Route>
                                <Route path="/shouye/home/kan" component={Kan}></Route>
                                <Route path="/shouye/home/chang" component={Chang}></Route>
                                <Redirect to="/shouye/home/my"/>
                     
                        </div>

                  
                    </Drawer>
                   
                </div>
                </Router>
            </div>
        )
    }
    

    
}
export default Home;