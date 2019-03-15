


import React, { Component } from 'react';
import { Modal, Button, WingBlank, WhiteSpace, Toast,NavBar, Icon } from 'antd-mobile';
import $ from 'jquery';
import "../css/localsinger.css"

import Store from "../redux/Store";
import Action from "../redux/Action";
const prompt = Modal.prompt;
class LocalMusic extends Component {
    constructor(props){
        super(props)
        this.state={
            display1:"none",
            display:"block",
            heidt:"none",
            addheidt:"none",
            geuii:[],
            list2:Store.getState().list,
            delid:"",
        }
        this.change=this.change.bind(this)
    }
    componentWillMount(){
        Store.subscribe(this.change)
        var _this=this;
        $.ajax({
            type:"get",
            url:" http://47.93.223.124/cool_cat/menusong/songlist.do",
            data:{menuId:62},
            dataType:"json",
            success:function(data){
                _this.setState({
                    geuii:data.info
                })
                Store.dispatch(Action.GEdanlih(data.info))
           
            }
        })
    }

    change(){
        this.setState({
            list2:Store.getState().list,
            // login:Store.getState().login,
        })
    }
    // 打开歌曲详情
    tag(a,e){
        console.log(a,e)
        e.stopPropagation();  
        e.nativeEvent.stopImmediatePropagation();  
      this.setState({
        heidt:"block",
        delid:a
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
    heid(url){
        
        Store.dispatch(Action.Huange(url))
       
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
    shanchu(){
        var _this=this;
        $.ajax({
            type:"get",
            url:" http://47.93.223.124/cool_cat/menusong/deletesong.do",
            data:{id:_this.state.delid},
            dataType:"json",
            success:function(data){
              console.log(data)
            //   Store.dispatch(Action.GEdanlih(data.info))
            
            }
        })
    }

  render() {
    console.log(Store.getState().bendibflb)
    var _this=this;
    return (
        <div id= "register">
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {  this.props.history.goBack()  }}
                >本地音乐</NavBar>
            <ul>
                {
                        this.state.geuii.map(function(tim,i){
                            return(
                                <li onClick={_this.heid.bind(_this,tim.songsName.music)}>
                                <div className="muliee " style={{display:_this.state.display}}>
                                    <p className="tupian">
                                    </p>
                                    <div className="xinxi">
                                    
                                        <p className="localgename">
                                            <span>{tim.songsName.songName}</span>
                                        </p>
                                        <p className="localsinger">
                                            <span>{tim.singerName.singerName}</span>
                                        </p>
                                    </div>
                                    <p className="localmore" onClick={_this.tag.bind(_this,tim.songsName.id)}>......</p>
                                 </div>
            
                                 <div   className="muliee1" style={{display:_this.state.display1}}>
                                        <p></p>
                                        <div>
                                            <p className="localgename1">
                                            <span>{tim.singerName.singerName}</span>- <span>{tim.songsName.songName}</span>
                                            </p>
                                            <p className="localsinger1">
                                            <span>
                                                <i className="iconfont">&#xe67f;</i>   {/* 收藏 */}
                                                <i className="iconfont">&#xe60e;</i>  {/* 分享 */}
                                                <i className="iconfont">&#xe627;</i>  {/* 下载 */}
                                                <i className="iconfont">&#xe600;</i>  {/* 评论 */}
                                            </span>
                                            <span className="more iconfont" onClick={_this.tag.bind(_this,tim.songsName.id)}>&#xe600;</span>
                                            </p>
                                        </div>
                                 </div>
                            </li>


                            )
                        })
                    
                }
                
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
                    <li onTouchEnd={this.shanchu.bind(this)}>
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
    );
  }
}


export default LocalMusic;