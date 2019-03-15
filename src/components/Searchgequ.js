import React, { Component } from 'react';
import $ from "jquery";
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'
import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';
import '../css/searchgequ.css';


import Store from "../redux/Store";
import Action from "../redux/Action";
// import "../css/localsinger.css"
const prompt = Modal.prompt;
class Searchgequ extends Component {
    constructor(props){
        super(props)
        this.state={
            display1:"none",
            display:"block",
            heidt:"none",
            addheidt:"none",
            list:[],
            gequxinxi:"",
            suosou:Store.getState().suosou,
            usergedan:Store.getState().usergedan,
            shuliang:"0"
        }
        this.change=this.change.bind(this)
    }

    change(){
        this.setState({
            suosou:Store.getState().sousuo,
        })
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
   
    // 点击播放及歌曲列表切换
    heid(w){
        console.log(w)
        // Store.dispatch(Action.BendiBFLB(w))
        Store.dispatch(Action.Huange(w))
    }
   
    componentWillMount(){
        Store.subscribe(this.change)
        console.log("bb")
        // console.log(this.state.suosou)
      //yiwen
        var _this=this;
        $.ajax({
            type:"get",
            url:"https://api.bzqll.com/music/kugou/search",
            data:{key:579621905,s:Store.getState().sousuo,limit:20,offset:0,type:"song"},
            dataType:"json",
            success:function(data){
               _this.setState({
                   list:data.data
               })
            }
        })
    }
     //组件是否更新
    //  shouldComponentUpdate(){
    //     return true
    //     //  console.log(this.state.suosou,Store.getState().sousuo)
    //     //  console.log(this.state.suosou != Store.getState().sousuo)
    //     //  if(this.state.suosou ==undefined){
           
    //     //  }else{
    //     //     return this.state.suosou != Store.getState().sousuo;
    //     // }
    //  }
        
      //组件即将更新
      componentWillUpdate(){
        //   console.log(_this.state.suosou)
        // console.log("aa")
        var _this=this;
        $.ajax({
            type:"get",
            url:"https://api.bzqll.com/music/kugou/search",
            data:{key:579621905,s:Store.getState().sousuo,limit:20,offset:0,type:"song"},
            dataType:"json",
            success:function(data){
               _this.setState({
                   list:data.data
               })
            }
        })
      }
    //添加歌曲到歌单
    addtianji(w){
        var i = this.state.shuliang++
        if(i>3){
            this.setState({
                shuliang:"0"
            })
        }
        console.log(w,i)
        console.log(this.state.gequxinxi)
        var _this=this;

        $.ajax({
            type:"get",
            url:"http://47.93.223.124/cool_cat/menusong/addmenusong.do",
            data:{menuId:15,songId:i},
            dataType:"json",
            success:function(data){
                
            }
        })



        $.ajax({
            type:"get",
            url:"http://47.93.223.124/cool_cat/menusong/addmenusong.do",
            data:{menuId:w,songId:i},
            dataType:"json",
            success:function(data){
                
            }
        })
    }
 
     // 新建歌单
     newaddgd(){
        this.setState({
            addheidt:"none",
        })
        prompt("",'新建歌单', [
            { text: '取消' },
            { text: '确认', onPress: (value) =>{
                var id = Store.getState().list.id
                console.log(Store.getState().list.id)
                var _this=this;
                $.ajax({
                    type:"get",
                    url:"http://47.93.223.124/cool_cat/menu/addmenu.do",
                    data:{uid:id,name:value},
                    dataType:"json",
                    success:function(data){
                        console.log(data,value)
                        if(data.code=="0"){
                            
                        }
                    }
                })
            }},
          ], 'default', '')
    }
   
    render(){
        var _this=this
        // console.log(this.state.list)
        // console.log(Store.getState().usergedan) 
        return(
            <div id="gequsousuo">
              
            <ul>
                {
                    this.state.list.map(function(item,i){
                        return(
                            <li onClick={_this.heid.bind(_this,item)} key={i} >
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
                <p>朋友的酒</p>
                <ul>
                    <li>
                         <i className="iconfont">&#xe67f;</i> 下一首
                    </li>
                    <li>
                         <i className="iconfont">&#xe67f;</i>  升级音质
                    </li>
                    <li onClick={this.Addgedan.bind(this,this.state.gequxinxi.id)}>
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
                <ul style={{overflow:"auto",height: "85%"}}>
                    <li  onClick={this.newaddgd.bind(this)}>
                        <i className="iconfont" >&#xe603;</i> 新建歌单 
                    </li>

                    {
                        this.state.usergedan.map(function(item,i){
                            return (
                                <li onTouchEnd={_this.addtianji.bind(_this,item.id)} key={i}>
                                    {item.name}
                                 </li>

                            )
                        })
                    }
                    {/* <li onTouchEnd={this.addtianji.bind(this)}>
                        我喜欢 
                    </li>
                    <li>
                       默认收藏 
                    </li> */}
                </ul>
            </div>


            </div>
        )
    }

}
export default Searchgequ;