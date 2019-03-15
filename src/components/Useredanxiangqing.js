
import React, { Component } from 'react';
import $ from 'jquery';
import { Modal, Button, WingBlank, WhiteSpace, Toast,Drawer, List, NavBar, Icon } from 'antd-mobile';
import '../css/searchgequ.css';
import '../css/gedanxiangqing.css';
import Store from "../redux/Store";
import Action from "../redux/Action";
// const prompt = Modal.prompt;
class Useredanxiangqing extends Component {
    constructor(props){
        super(props)
        this.state={
            list:{},
            geqy:Store.getState().bendibflb,
            list1:[],
            display1:"none",
            display:"block",
            heidt:"none",
            addheidt:"none",
            gequxinxi:"",
            gedanname:Store.getState().login,
            usergedanEF:Store.getState().huange,  //用户歌单名
        }
    }
    // 打开歌曲详情
    tag(i,e){
        // console.log(i)
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
    componentWillMount(){
        // console.log(Store.getState().login,"aa")
        // var _this=this;
        // $.ajax({
        //     type:"get",
        //     url:" http://47.93.223.124/cool_cat/menusong/songlist.do",
        //     data:{menuId:Store.getState().login},
        //     dataType:"json",
        //     success:function(data){
        //         // console.log(data)
        //         Store.dispatch(Action.GEdanlih(data.info))
        //     //    _this.setState({
        //     //        geqy:
                
        //     //    })
        //     }
        // })
        
        
    }
    render(){
        console.log(Store.getState().bendibflb)
        console.log(this.state.geqy)
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
                    </div>
                </header>
                <div id="gequsousuo">
                    {/* <div>
                        {
                            this.state.geqy.map(function(item,i){
                                return(
                                    <li onClick={_this.heid.bind(_this,item.music)} key={i} >
                                        <div className="muliee " >
                                            <div className="xinxi">
                                                <p className="localgename">
                                                    <span>{item.singerName}</span>
                                                </p>
                                            </div>
                                            <p className="localmore" onClick={_this.tag.bind(_this,item)}>......</p>
                                        </div>
                                    </li>
                                )
                            })
                        } 
                        
                    </div> */}
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
                            <li >
                                <i className="iconfont">&#xe67f;</i> 删除
                            </li>
                            
                        </ul>
                    </div>
              </div>
            </div>
        )
    }

}
export default Useredanxiangqing;