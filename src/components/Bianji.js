import React from 'react';
import $ from 'jquery';
import '../css/bianji.css';
import '../font/iconfont.css';
import AA from '../img/jin.jpg';
import BB from '../img/quan.jpg';
import CC from '../img/tiao.jpg';
import DD from '../img/sha.jpg';
import EE from '../img/bei.jpg';
import FF from '../img/chang.jpg';
import GG from '../img/san.jpg';
import HH from '../img/sum.jpg';


class Bianji extends React.Component{
    constructor(props){
        super(props)
    }
    hui(){
        this.props.history.goBack()//回退上一层历史记录
    }
    huo(){
        $.ajax({
            type:'get',
            url:'http://47.93.223.124/cool_cat/menu/addmenu.do',
            dataType:'json',
            data:{uid:'1',name:'ta'},
            success:function(data){
                console.log(data)
            }
        })
    }
    com(){
        window.location.href='/comm'
    }
    render(){
        return(
            <div>
                <div className="top">
                    <span onClick={this.hui.bind(this)} className="zoo iconfont icon-xiangzuo"></span>
                    编辑资料
                    <span className="yoo iconfont icon-fangdajing"></span>
                </div>
                <div className="zhoo">
                    <div onClick={this.com.bind(this)} className="ong">
                        <p>资料完善度：<span>70%</span></p>
                    </div>
                    <div className="ang">
                        <span>头像</span>
                        <span className="buhui"></span>
                    </div>
                    
                    <div className="ist">昵称&nbsp;&nbsp;:<input type="text"/></div>
                    <div className="ist">性别&nbsp;&nbsp;:<input type="text"/></div>
                    <div className="ist">地址&nbsp;&nbsp;:<input type="text"/></div>
                    <div className="ist">出生日期&nbsp;&nbsp;:<input type="text"/></div>
                    
                    <h3 className="hhhh">个性签名</h3>
                    <p className="inn"><textarea name="textareal" row="4"></textarea></p>


                    <button onClick={this.huo.bind(this)} className="btn">保存</button>
                </div>
                <div className="jiao">women</div>
            </div>
        )
    }
}

export default Bianji;