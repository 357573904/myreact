
import React, { Component } from 'react';
import $ from 'jquery';
import { Modal, Button, WingBlank, WhiteSpace, Toast,Drawer, List, NavBar, Icon } from 'antd-mobile';
import '../css/searchgequ.css';
import '../css/gedanxiangqing.css';

import Store from "../redux/Store";
import Action from "../redux/Action";
const prompt = Modal.prompt;
class Gedanxiangqing extends Component {
    constructor(props){
        super(props)
        this.state={
            list:{},
            list1:[],
            display1:"none",
            display:"block",
            heidt:"none",
            addheidt:"none",
            gequxinxi:""
        }
    }
    // 打开歌曲详情
    tag(i,e){
        console.log(i)
        e.stopPropagation();  
        e.nativeEvent.stopImmediatePropagation();  
        this.setState({
            heidt:"block",
            gequxinxi:i
        })
    }
    // 关闭歌曲详情
    Relevant(){
        this.setState({
            heidt:"none"
        })

    }
    // 添加歌单
    Addgedan(i){
        console.log(i)
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
    //收藏歌单
    gedanadd(){
        console.log(Store.getState().list)
        var id = "3";
        var _this=this;
        $.ajax({
            type:"get",
            url:" http://47.93.223.124/cool_cat/menu/addmenu.do",
            data:{uid:id,name:_this.state.list.title},
            dataType:"json",
            success:function(data){
                console.log(data)
                console.log({uid:id,name:_this.state.list.title})
                if(data.code=="0"){
                    //在更新歌单
                    // $.ajax({
                    //     type:"get",
                    //     url:"http://47.93.223.124/cool_cat/menu/findmenu.do",
                    //     // data:{uid:Store.getState().list.id},
                    //     data:{uid:Store.getState().list.id},
                    //     dataType:"json",
                    //     success:function(data){
                    //         console.log(data)
                    //         Store.dispatch(Action.UsergedanEF(data.info))
                           
                    //     }
                    // })


                }

            //    _this.setState({
            //        list:data.data,
            //        list1:data.data.songs
            //    })
            }
        })
    }
    componentWillMount(){
        // console.log(this.state.display1)
        // console.log(this.props.location.query.id)
        var _this=this;
        $.ajax({
            type:"get",
            url:" https://api.bzqll.com/music/tencent/songList?key=579621905&id=1147906982",
            data:{key:579621905,id:_this.props.location.query.id},
            dataType:"json",
            success:function(data){
                console.log(data.data)
               _this.setState({
                   list:data.data,
                   list1:data.data.songs
               })
            }
        })
        
        
    }
    render(){
        console.log("aa")
        var _this=this;
        return(
            <div>
                 <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {  this.props.history.goBack()  }}
                >歌单</NavBar>
                <header className="geedanhead">
                    <div className="gedanxiinxi">
                         <img className="gedanimg" src={this.state.list.logo}/>
                         <div>
                             {this.state.list.title}
                         </div>

                    </div>
                    <div className="caozuo">
                        <div>
                            <p className="iconfont">&#xe625;</p>
                            分享
                        </div>
                        <div>
                            <p className="iconfont">&#xe608;</p>
                            评论
                        </div>
                        <div>
                            <p className="iconfont">&#xe627;</p>
                            下载
                        </div>
                        <div onTouchEnd={this.gedanadd.bind(this)}>
                            <p className="iconfont">&#xe67f;</p>
                            收藏
                        </div>
                        
                    </div>
                </header>
                <div id="gequsousuo">
              
              <ul>
                  {
                      this.state.list1.map(function(item,i){
                          return(
                              <li onClick={_this.heid.bind(_this,item.url)} key={i} >
                              <div className="muliee " >
                                
                                  <img className="tupian" src={item.pic}/>
                                  
                                  <div className="xinxi">
                                  
                                      <p className="localgename">
                                          <span>{item.name}</span>
                                      </p>
                                      <p className="localsinger">
                                          <span>{item.singer}</span>
                                      </p>
                                  </div>
                                  <p className="localmore" onClick={_this.tag.bind(_this,item)}>......</p>
                              </div>
                          </li>
                          )
                      })
                  }
                  
              </ul>
              {/* 歌曲详情 */}
              <div className="MulieeRelevant" style={{display:this.state.heidt}}> 
                  <span className="iconfont" onClick={this.Relevant.bind(this)} >&#xe661;</span>
                  <p>{this.state.gequxinxi.name}</p>
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
                           <i className="iconfont" >&#xe67f;</i> 歌曲信息
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
            </div>
        )
    }

}
export default Gedanxiangqing;