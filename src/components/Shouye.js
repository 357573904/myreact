import React, { Component } from "react";
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch,} from 'react-router-dom'
import '../css/home.css';
import My from "./My"

import Home from "./Home"
import LocalMusic from "./LocalMusic"
import Search from "./Search"
import MyCollection from "./MyCollection"
import Gedan from "./Gedan"
import Yueku from "./Yueku"
import Gedanxiangqing from "./Gedanxiangqing"
import Useredanxiangqing from "./Useredanxiangqing"
import Bianji from "./Bianji"
import Comm from "./Comm"
import { Drawer, List, NavBar, Icon ,Toast ,Slider, WingBlank, WhiteSpace} from 'antd-mobile';
import { createForm } from 'rc-form';
////状态管理
import Action from "../redux/Action";
import Store from "../redux/Store";

function failToast() {
    Toast.fail('已关闭 !!!', 1);
  }
  function successToast() {
    Toast.success('已打开!!!', 1);
  }
  


class Shouye extends Component{
    constructor(props){
        super(props)
        this.state={
            checked: true,
            checked1: false,
            display:"none",
            display1:"block",
            delheid:"none",
            huange:Store.getState().huange,
            bendigequliebiao:Store.getState().bendibflb,
        }
        this.change=this.change.bind(this)
    }

    change(){
        this.setState({
            huange:Store.getState().huange,
        })
    }
    state = {
        open: false,
      }
      onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
      }
      //播放暂停开关
      zht(e){
        e.stopPropagation();  
        e.nativeEvent.stopImmediatePropagation();  
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
    next(e){
        e.stopPropagation();  
        e.nativeEvent.stopImmediatePropagation();  
        
    }
      //打开播放列表
    list(e){
        e.stopPropagation();  
        e.nativeEvent.stopImmediatePropagation();  
        this.setState({
            delheid:"block"
        })
    }
    //   关闭播放列表
      delPlaylist(e){
        e.stopPropagation();  
        e.nativeEvent.stopImmediatePropagation();  
          console.log("aa")
        this.setState({
            delheid:"none",
        })
      }
      //搜索框
      search(){
        this.props.history.push("/search")
      
      }
      //点击下方播放快
      bodfad(){
        this.props.history.push("/yinyuebofang")
      }
      //列表换歌
      huange(){
          console.log("ss")
          Store.dispatch(Action.Huange("sss"))
      }
      //进入dom阶段
      componentDidMount(){
        Store.subscribe(this.change)
    }
    render(){
       var _this=this
        console.log(Store.getState().bendi)
        return(
            <div id="home">
                  <Router>
                  <div>
                      {/* 头部导航 */}
                      
                        <Switch>
                            <Route path="/shouye/search" component={Search} ></Route>
                            <Route path="/shouye/home" component={Home} ></Route>
                            <Route path="/shouye/mycollection" component={MyCollection} ></Route>
                            <Route path="/shouye/localmusic" component={LocalMusic} ></Route>
                            <Route path="/shouye/gedan" component={Gedan} ></Route>
                            <Route path="/shouye/gedanxiangqing" component={Gedanxiangqing} ></Route>
                            <Route path="/shouye/useredanxiangqing" component={Useredanxiangqing} ></Route>

                            <Route path="/shouye/bianji" component={Bianji} ></Route>
                            <Route path="/shouye/comm" component={Comm} ></Route>

                            <Route path="/shouye/yueku" component={Yueku} ></Route>
                            <Redirect to="/shouye/home"/>
                      </Switch>
                        <div className="bofang" onTouchEnd={this.bodfad.bind(this)}>
                            {/* <p className="geqtq">
                            </p> */}
                            <div className="bojindu">
                                {/* 播放器进度条 */}
                               
                                     <audio controls="controls"   src={this.state.huange.url} className="bofangqi"/>  
                                     <p className="home-bo"> 
                                           
                                          
                                            
                                     </p>
                                     </div>
                                    {/* 底部歌曲播放 */}
                                    <div className="gequxx">
                                        <p className="gequxx1">
                                            <span className="gerem">{this.state.huange.name}--</span><span className="gemi">{this.state.huange.singer}</span>
                                        </p>
                                        <p className="gequxx2">
                                            <i className="iconfont" onTouchEnd={this.next.bind(this)}>&#xe626;</i> {/*  下一曲   */}
                                            <i className="iconfont" onTouchEnd={this.list.bind(this)}>&#xe626;</i> {/*  列表  */}
                                        </p>
                                    </div>
                                {/* </WingBlank> */}
                            
                    </div>
                    {/* 播放列表 */}
                    <div className="Playlist" style={{display:this.state.delheid}}>
                        <div className="Playlist-heard">
                            <span>
                                <i className="iconfont">&#xe625;</i>随即播放
                            </span>
                            <span>
                                <i className="iconfont">&#xe67f;</i>
                                <i className="iconfont" onClick={this.delPlaylist.bind(this)}>&#xe661;</i>{/*  删除  */}
                            </span>
                         </div>
                        <ul>


                            {/* {
                                this.state.bendigequliebiao.map(function(item,i){
                                    return(
                                        // <li onTouchEnd={_this.huange.bind(this)}>
                                        //     <span>1</span>
                                        //     <span>烂的多瑙河</span>
                                        //     <span>
                                        //         <i className="iconfont">&#xe661;</i>
                                        //     </span>
                                        // </li>
                                    )


                                })
                            } */}
                            <li onTouchEnd={this.huange.bind(this)}>
                                <span>1</span>
                                <span>烂的多瑙河</span>
                                <span>
                                    <i className="iconfont">&#xe661;</i>
                                </span>
                            </li>
                           
                        </ul>
                  

                        </div>
                  </div>
                </Router>
            </div>
        )
    }
    

    
}
export default Shouye;