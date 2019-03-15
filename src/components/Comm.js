import React from 'react';
import $ from 'jquery';
import '../css/comm.css';
import '../font/iconfont.css';
import AA from '../img/jin.jpg';
import BB from '../img/quan.jpg';
import CC from '../img/tiao.jpg';
import DD from '../img/sha.jpg';
import EE from '../img/bei.jpg';
import FF from '../img/chang.jpg';
import GG from '../img/san.jpg';
import HH from '../img/sum.jpg';
import Action from "../redux/Action";
import Store from "../redux/Store";

class Comm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ipt:'',
            lun:'',
            num:0,
            pinglun:Store.getState().pinglun
        }
    }
    hui(){
        this.props.history.goBack()//回退上一层历史记录
    }    
    huo(){
       


        var _this=this;
        $.ajax({
            type:'get',
            url:'http://47.93.223.124/cool_cat/addComment.do',
            dataType:'json',
            data:{uid:'1',sid:'9',detail:'wo'},
            success:function(data){
                console.log(data);
                Store.dispatch(Action.addItem(_this.refs.ipt.value))
                _this.refs.ipt.value=""
                
            }
        })
    }
    render(){
        console.log(Store.getState().pinglun)
        return(
            <div>
                <div className="top">
                    <span onClick={this.hui.bind(this)} className="zoo iconfont icon-xiangzuo"></span>
                    歌曲评论{this.state.num}
                    <span className="yoo iconfont icon-fangdajing"></span>
                </div>
                <div className="zhoo">
                    <div className="ren">
                        <span>{Store.getState().huange.name}-{Store.getState().huange.singer}</span>
                    </div>                    
                    <div className="nei">
                        <p className="yong">{Store.getState().list.name}</p>
                        
                        {
                            Store.getState().pinglun.map(function(item,i){
                                console.log(item)
                                return(
                                    <p className="rong">{item}</p>

                                )
                            })
                        }
                       
                    </div>
                </div>
                <div className="jiao"><textarea  ref="ipt" className="ping"name="textareal" row="10"></textarea><span onClick={this.huo.bind(this)}>发送</span></div>
            </div>
        )
    }
}

export default Comm;