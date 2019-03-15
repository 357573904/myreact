import React, { Component } from 'react';
import $ from "jquery";
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import '../css/mine.css';
import '../font/iconfont.css';
import Store from "../redux/Store";
import Action from "../redux/Action";
class My extends Component {
    constructor(props){
        super(props)
        this.state={
            user:Store.getState().list,
            gedan:[],
            login:"点击登录，享精准歌曲推荐"
        }
        this.change=this.change.bind(this)
    }
    change(){
        this.setState({
            user:Store.getState().sousuo,
        })
    }
    btn(){
       
          this.props.history.push("/shouye/localmusic")
       
    }
    btn1(){
        this.props.history.push("/shouye/mycollection")
       
    }
    btn2(){
        this.props.history.push("/shouye/gedan")
       
    }
    btn3(){
        
        this.props.history.push("/login")
    }

    dian(){
        this.props.history.push("/login")
    }
        //删除歌单
    delgedans(a,e){
        e.stopPropagation();  
        e.nativeEvent.stopImmediatePropagation();  
        var _this=this;
        $.ajax({
            type:"get",
            url:" http://47.93.223.124/cool_cat/menu/deletemenu.do",
            data:{name:a},
            dataType:"json",
            success:function(data){
              console.log(data)
            //   Store.dispatch(Action.GEdanlih(data.info))
            
            }
        })

    }
    //点击歌单跳转
    gedanaa(w){
        console.log(w)
        Store.dispatch(Action.Usergedan(w))
        var _this=this;
        $.ajax({
            type:"get",
            url:" http://47.93.223.124/cool_cat/menusong/songlist.do",
            data:{menuId:w},
            dataType:"json",
            success:function(data){
                // console.log(data)
                Store.dispatch(Action.GEdanlih(data.info))
            //    _this.setState({
            //        geqy:
                
            //    })
            }
        })



        this.props.history.push("/shouye/useredanxiangqing")
    }
    //编辑资料
    bainji(){   

        if(JSON.stringify(Store.getState().list) != "{}"){
            this.props.history.push("/shouye/bianji")
        }
    }

    //初始加载
    componentWillMount(){
        Store.subscribe(this.change)
        // http://47.93.223.124/cool_cat/menusong/songlist.do
        if(JSON.stringify(Store.getState().list) != "{}"){
         
            var _this=this;
            //通过用户id查找他的歌单
            $.ajax({
                type:"get",
                url:"http://47.93.223.124/cool_cat/menu/findmenu.do",
                // data:{uid:Store.getState().list.id},
                data:{uid:Store.getState().list.id},
                dataType:"json",
                success:function(data){
                    console.log(data)
                    Store.dispatch(Action.UsergedanEF(data.info))
                   _this.setState({
                       gedan:data.info,
                       login:Store.getState().list.name
                   })
                }
            })
        }
   
    }


    render(){
        // console.log("aa")
        var _this=this
        return(
            <div>
            

               <div className="out">
                
                <section>
                    <div className="dian">
                        <div className="shu" onTouchEnd={this.bainji.bind(this)}>
                            <span className="tou iconfont icon-wd"></span>
                        </div>
                        <span className="jing" onClick={this.dian.bind(this)}>{this.state.login}</span>
                        <span className="xiang iconfont icon-youxiang"></span>
                    </div>
                    <div className="ben">
                        <dl onTouchEnd={this.btn.bind(this)}>
                            <dt className="teshu iconfont icon-bendiyinle"></dt>
                            <dd>
                                <p>本地音乐</p>
                                <p>0</p>
                            </dd> 
                        </dl>
                        <dl onTouchEnd={this.btn1.bind(this)}>
                            <dt className="teshu iconfont icon-shoucang" ></dt>
                            <dd>
                                <p>我的收藏</p>
                                <p>0</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="teshu iconfont icon-xiazai"></dt>
                            <dd>
                                <p>下载</p>
                                <p>0</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="teshu iconfont icon-zuijinbofang"></dt>
                            <dd>
                                <p>最近播放</p>
                                <p>0</p>
                            </dd>
                        </dl>
                    </div>
                    <ul className="cuo">
                        <li>K歌作品<span>&gt;</span></li>
                        <li>音乐圈<span>&gt;</span></li>
                    </ul>
                    <div className="ziji">
                        <p className="dan"  >自建歌单&nbsp;&nbsp;<span className="iconfont icon-shouqi"></span>
                        <span className="hao iconfont icon-hao"></span></p>
                        {
                            this.state.gedan.map(function(item,i){
                                // }
                                return(
                                        <dl onTouchEnd={_this.gedanaa.bind(_this,item.id)} key={i}>
                                            <dt><span className="cang iconfont icon-shoucang"></span></dt>
                                            <dd>
                                                <p className="gedanhsdj">{item.name}</p>
                                                {/* <p>0首</p> */}
                                                <span className="deledanhsdj" onTouchEnd={_this.delgedans.bind(_this,item.name)}>删除</span>
                                            </dd>
                                           
                                        </dl>
                                )
                            })
                        }
                        
                    </div> 
                    {/* <div className="tui">
                        <span>孩子睡觉哄不好，海兔故事帮你忙&nbsp;&nbsp;></span>
                    </div> */}
                </section>
                </div>
            </div>
        )
    }

}
export default My;