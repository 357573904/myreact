import React, { Component } from 'react';
import $ from "jquery";
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'

import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';

import "../css/localsinger.css"

import Store from "../redux/Store";
import Action from "../redux/Action";
const prompt = Modal.prompt;
class MyCollectionSingle extends Component {
    constructor(props){
        super(props)
        this.state={
            display1:"none",
            display:"block",
            heidt:"none",
            addheidt:"none",
        }
    }
    // 打开歌曲详情
    tag(e){
        e.stopPropagation();  
        e.nativeEvent.stopImmediatePropagation();  
      this.setState({
        heidt:"block"
    })
    }
    // 关闭歌曲详情
    Relevant(){
        this.setState({
            heidt:"none"
        })

    }
    // 添加歌单
    Addgedan(){
        this.setState({
            heidt:"none",
            addheidt:"block",
        })
    }
    addRelevant(){
        this.setState({
            addheidt:"none",
        })
    }
    // 新建歌单
    newaddgd(){
        this.setState({
            addheidt:"none",
        })
        prompt("",'新建歌单', [
            { text: '取消' },
            { text: '确认', onPress: value => console.log(`输入的内容:${value}`) },
          ], 'default', '')
    }
    // 点击播放及歌曲列表切换
    heid(){
        Store.dispatch(Action.Huange("sss"))
        if(this.state.display=="block"){
            this.setState({
                display1:"block",
                display:"none"
            })
        }else{
            this.setState({
                display1:"none",
                display:"block"
            })
        }
    }
    componentWillMount(){
        $.ajax({
            type:"get",
            url:"https://api.bzqll.com/music/kugou/songList?key=579621905&id=578823",
            dataType:"json",
            success:function(data){
                console.log(data)
            }
        })
    }
    render(){
        return(
            <div id="mycollection">
            
              
            <ul>
                <li onClick={this.heid.bind(this)}>
                    <div className="muliee " style={{display:this.state.display}}>
                        <p className="tupian">
                        </p>
                        <div className="xinxi">
                        
                            <p className="localgename">
                                <span>朋友的酒</span>
                            </p>
                            <p className="localsinger">
                                <span>张辉</span>
                            </p>
                        </div>
                        <p className="localmore" onClick={this.tag.bind(this)}>......</p>
                     </div>

                     <div   className="muliee1" style={{display:this.state.display1}}>
                            <p></p>
                            <div>
                                <p className="localgename1">
                                <span>张辉</span>- <span>朋友的酒</span>
                                </p>
                                <p className="localsinger1">
                                <span>
                                    <i className="iconfont">&#xe67f;</i>   {/* 收藏 */}
                                    <i className="iconfont">&#xe60e;</i>  {/* 分享 */}
                                    <i className="iconfont">&#xe627;</i>  {/* 下载 */}
                                    <i className="iconfont">&#xe600;</i>  {/* 评论 */}
                                </span>
                                <span className="more iconfont" onClick={this.tag.bind(this)}>&#xe600;</span>
                                </p>
                            </div>
                     </div>
                </li>
            </ul>
            {/* 歌曲详情 */}
            <div className="MulieeRelevant" style={{display:this.state.heidt}}> 
                <span className="iconfont" onClick={this.Relevant.bind(this)} >&#xe661;</span>
                <p>朋友的酒</p>
                <ul>
                    <li>
                         <i className="iconfont">&#xe67f;</i> 下一首
                    </li>
                    <li>
                         <i className="iconfont">&#xe67f;</i>  升级音质
                    </li>
                    <li onClick={this.Addgedan.bind(this)}>
                         <i className="iconfont">&#xe67f;</i> 添加歌单
                    </li>

                    <li>
                         <i className="iconfont">&#xe67f;</i> 分享
                    </li>
                    <li>
                         <i className="iconfont">&#xe67f;</i> 歌曲信息
                    </li>
                    <li>
                         <i className="iconfont">&#xe67f;</i>  升级音质
                    </li>
                    <li>
                         <i className="iconfont">&#xe67f;</i> 评论
                    </li>
                    <li>
                         <i className="iconfont">&#xe67f;</i> 翻唱
                    </li>
                    <li>
                         <i className="iconfont">&#xe67f;</i> 删除
                    </li>
                </ul>
            </div>
            {/* 添加歌曲歌单 onClick={this.newaddgd.bind(this)}*/}
            <div className="addged" style={{display:this.state.addheidt}}>
                <span className="iconfont"   onClick={this.addRelevant.bind(this)}>&#xe661;</span>
                <p>添加到歌单</p>
                <ul>
                    <li  onClick={this.newaddgd.bind(this)}>
                        <i className="iconfont" >&#xe603;</i> 新建歌单 
                    </li>
                    <li >
                        我喜欢 
                    </li>
                    <li>
                       默认收藏 
                    </li>
                </ul>
            </div>


            </div>
        )
    }

}
export default MyCollectionSingle;