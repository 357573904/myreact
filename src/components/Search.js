import React, { Component } from 'react';
import $ from "jquery";
import Searchgequ from "./Searchgequ";
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import { Button, WhiteSpace, SearchBar, NavBar, Icon,WingBlank } from 'antd-mobile';
import '../css/search.css';



//状态管理

import Action from "../redux/Action";
import Store from "../redux/Store";
class Search extends Component {
    constructor(porps){
        super(porps)
        this.state={
            display:"block",
            value: '',
            aaa:"zhangas",
            jilu:[],
           
        }
    }
   
    btn(){
      
        
        window.location.href="/localmusic"
    }
    suosuo(e){

        // console.log(e)
        this.props.history.push("/shouye/search/searchgequ")
        Store.dispatch(Action.Sousuo(e))

    }
    // 输入框为文本改变
    onChange= (value) => {
        this.setState({ value });
      };
    //  按下回车见出发
      bbbb=(value) => {
      
        Store.dispatch(Action.Sousuo(value))
       
          var _this=this;
         //存入localStorage
         if(this.state.jilu.indexOf(value) ==-1 && value.length!=0 ){
            var arr = this.state.jilu
            arr.push(value)
            this.setState({jilu:arr})
            localStorage.setItem("lishijilu",JSON.stringify(this.state.jilu))
            
        }
        
         this.props.history.push("/shouye/search/searchgequ")

        
        }
        // 清空历史记录
        dellsjl(){
            localStorage.removeItem('lishijilu')
            this.setState({
                jilu:[],
            })
        }
 ////即将进入dom   把localStorage里面的数据取出来

        componentWillMount(){
            var jilu = JSON.parse(localStorage.getItem("lishijilu"))
            if(jilu!=null){
                this.state.jilu=JSON.parse(localStorage.getItem("lishijilu"))
               
            }
        }

    render(){
        var _this=this;
        return(
            <div id="search">
               <div id= "register">
               <div className="top" style={{position:"relative"}}>
                    <span onClick={() => {  this.props.history.goBack()  }} className="zoo iconfont icon-xiangzuo"></span>
                    搜索
                    {/* <span className="yoo iconfont icon-fangdajing"></span> */}
                </div>
                   

                    <SearchBar   onSubmit={this.bbbb}   onChange={this.onChange}  placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
                     
                   
                     <Route path="/shouye/search/searchgequ" component={Searchgequ}></Route>
                  
                    {/* 历史搜素记录 */}
                    <ul style={{display:this.state.display}}>
                        {
                            
                            this.state.jilu.map(function(item,i){
                                // console.log(item)
                                return (
                                     <li key={i} onTouchEnd={_this.suosuo.bind(_this,item)}>
                                         <i className="iconfont">&#xe60e;</i>
                                         {item}
                                     </li>
                                )
                            })
                        }
                        <li onClick={this.dellsjl.bind(this)}>清空历史记录</li>
                    </ul>
                    {/* 搜索 */}
                    <ul>

                    </ul>
             </div>
            </div>
        )
    }

}
export default Search;