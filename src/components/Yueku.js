import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import '../css/yueku.css';
import '../font/iconfont.css';
import AA from '../img/jin.jpg';
import BB from '../img/quan.jpg';
import CC from '../img/tiao.jpg';
import DD from '../img/sha.jpg';
import EE from '../img/bei.jpg';
import FF from '../img/chang.jpg';
import GG from '../img/san.jpg';
import HH from '../img/sum.jpg';


class Yueku extends React.Component{
    constructor(props){
        super(props)
        this.state={
            display1:"none",
            display2:"block",
            display3:"none"
        }
    }
    hui(){
        this.props.history.goBack()
    }

    ku(){
      if(this.state.display2=="none"){
          this.setState({
            display1:"none",
            display2:"block"
          })
      }  
    }
    ge(){
        if(this.state.display1=="none"){
            this.setState({
              display1:"block",
              display2:"none"              
            })
        }  
    }

    hua(){
        if(this.state.display3=="none"){
            this.setState({
                display3:"block"
            })
        }
        if(this.state.display3=="block"){
            this.setState({
                display3:"none"
            })
        }
    }
    render(){
        return(
            <div>
                <div className="top">
                    <span onClick={this.hui.bind(this)} className="zoo iconfont icon-xiangzuo"></span>
                    乐库
                    <span className="yoo iconfont icon-fangdajing"></span>
                </div>
                <div className="zhoo">
                    <div className="woo">
                        <span onClick={this.ku.bind(this)} className="nii">酷狗号</span>
                        <span className="nii">推荐</span>
                        <span className="nii">排行</span>
                        <span onClick={this.ge.bind(this)} className="nii">歌手</span>
                        <span className="nii">分类</span>
                    </div>


                    <div className="soo" style={{display:this.state.display1}}>


                        <div style={{display:this.state.display3}} className="gud">
                            <div className="shhs">
                                <span>华语男歌手</span>
                                <span>华语女歌手</span>
                                <span>华语组合</span>
                                <span>欧美男歌手</span>
                                <span>欧美女歌手</span>
                                <span>欧美组合</span>
                                <span>韩国男歌手</span>
                                <span>韩国女歌手</span>
                                <span>韩国组合</span>
                                <span>日本男歌手</span>
                                <span>日本女歌手</span>
                                <span>日本组合</span>
                                <em>其他歌手</em>
                                <em>入驻音乐人</em>
                            </div>
                            <div className="xiix">

                            </div>
                        </div>


                        <div onClick={this.hua.bind(this)} className="shh">
                            <span className="xiu iconfont icon-geshou"></span>
                            <span className="">&nbsp;&nbsp;歌手分类&nbsp;&nbsp;</span>
                            <span className="iconfont icon-shouqi-copy"></span>
                        </div>

                        <h2 className="mee">我的歌手<span>&gt;</span></h2>
                        <h2 className="biao">排行榜<span>飙升&nbsp;&nbsp;<em>|&nbsp;&nbsp;热门</em></span></h2>

                        <div className="zhu">
                            <span className="one">1</span>
                            <span className="two"></span>
                            <span className="thr">十二<p>热度:9320，粉丝:9790</p></span>
                            <span className="fou">关注</span>
                        </div>                        
                    </div>


                    <div className="haa"  style={{display:this.state.display2}}>
                        <div className="gee">
                            精品专辑                   
                        </div>
                        <div className="shu">
                            <div className="chuan">
                                <dl>
                                    <dt><img src={AA}/></dt>
                                    <dd>传人</dd>
                                </dl>
                                <dl>
                                    <dt><img src={BB}/></dt>
                                    <dd>歌手第三季</dd>
                                </dl>
                                <dl>
                                    <dt><img src={CC}/></dt>
                                    <dd>欲望反光</dd>
                                </dl>
                                <dl>
                                    <dt><img src={DD}/></dt>
                                    <dd>阳台上</dd>
                                </dl>
                                <dl>
                                    <dt><img src={EE}/></dt>
                                    <dd>单身</dd>
                                </dl>
                                <dl>
                                    <dt><img src={FF}/></dt>
                                    <dd>天高</dd>
                                </dl>
                                <dl>
                                    <dt><img src={GG}/></dt>
                                    <dd>长夜梦我</dd>
                                </dl>
                                <dl>
                                    <dt><img src={HH}/></dt>
                                    <dd>飞烟</dd>
                                </dl>
                            </div>
                        </div>

                        <div className="quu">
                            <span className='chu iconfont icon-faxian'><p>专区</p></span>
                            <span className='chu iconfont icon-mv'><p>MV</p></span>
                            <span className='chu iconfont icon-gedan'><p>演出</p></span>
                            <span className='chu iconfont icon-xing-copy'><p>节目</p></span>
                        </div>
                        <h2 className="dii">
                            新歌速递
                        </h2>
                        <div className="jia">
                            <dl>
                                <dt><img src={FF}/></dt>
                                <dd>新歌首发</dd>
                            </dl>
                            <dl>
                                <dt><img src={GG}/></dt>
                                <dd>新碟上架</dd>
                            </dl>
                            <dl>
                                <dt><img src={HH}/></dt>
                                <dd>唱片店</dd>
                            </dl>
                        </div>
                        <h2 className="dii">
                            热门歌单
                        </h2>
                        <div className="jia">
                            <dl>
                                <dt><img src={AA}/></dt>
                                <dd>传人</dd>
                            </dl>
                            <dl>
                                <dt><img src={BB}/></dt>
                                <dd>传人</dd>
                            </dl>
                            <dl>
                                <dt><img src={CC}/></dt>
                                <dd>传人</dd>
                            </dl>
                            <dl>
                                <dt><img src={FF}/></dt>
                                <dd>新歌首发</dd>
                            </dl>
                            <dl>
                                <dt><img src={GG}/></dt>
                                <dd>新碟上架</dd>
                            </dl>
                            <dl>
                                <dt><img src={HH}/></dt>
                                <dd>唱片店</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="jiao">women</div>
            </div>
        ) 
    }
}

export default Yueku;