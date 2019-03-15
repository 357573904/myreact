import React, { Component } from 'react';
import $ from 'jquery';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch,} from 'react-router-dom'
import { Modal, Button, WingBlank, WhiteSpace, Toast,Drawer, List, NavBar, Icon } from 'antd-mobile';
import "../css/gedan.css"
// const prompt = Modal.prompt;
class Gedan extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    dianji(w){
        console.log(w)
        this.props.history.push({pathname:"/shouye/gedanxiangqing",query:{id:w}})
    }
    componentWillMount(){
        var _this=this;
        $.ajax({
            type:"get",
            url:"https://api.bzqll.com/music/tencent/hotSongList?key=579621905&categoryId=10000000&sortId=3&limit=40",
      
            dataType:"json",
            success:function(data){
                console.log(data.data)
               _this.setState({
                   list:data.data
               })
            }
        })
    }
    hui(){
        this.props.history.goBack()
    }
    render(){
       var _this=this
        return(
            <div id="gedan">
               {/* <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {  this.props.history.goBack()  }}
                >歌单</NavBar> */}

                 <div className="top">
                    <span onClick={() => {  this.props.history.goBack()  }} className="zoo iconfont icon-xiangzuo"></span>
                    歌单
                    {/* <span className="yoo iconfont icon-fangdajing"></span> */}
                </div>
                <ul className="gedanlist">
                    {
                        this.state.list.map(function(item,i){
                            return(
                                <li key={i} onTouchEnd={_this.dianji.bind(_this,item.id)}>
                                    <img src={item.pic}/>
                                    <p>{item.name}</p>
                                </li>
                            )
                        })
                   }

                </ul>

            </div>
        )
    }

}
export default Gedan;