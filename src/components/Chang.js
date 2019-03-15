import React, { Component } from 'react';
import '../css/sing.css';
import '../font/iconfont.css';
class Chang extends Component {
    render(){
        return(
            <div className="out">
                
            <section>
                <div className="new">               
                    <dl>
                        <dt><span className="ziti iconfont icon-faxian"></span></dt>
                        <dd>发现</dd>
                    </dl>
                    <dl>
                        <dt><span className="ziti iconfont icon-haoshengyin"></span></dt>
                        <dd>我要唱</dd>
                    </dl>
                    <dl>
                        <dt><span className="ziti iconfont icon-wd"></span></dt>
                        <dd>我的</dd>
                    </dl>
                </div>
                <div className="kuai">
                    <span>擂台赛</span>
                    <span>在线K房</span>
                    <span>K歌直播</span>
                    <span>短视频</span>
                </div>
                <div className="tiao">
                    <span className="tou">头条</span>
                    <span className="zai">装了这个APP，不用再去KTV&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                    <span className="you1 iconfont icon-youxiang"></span>
                </div>
                <div className="guan">
                    <span>关注</span>
                    <span>热门</span>
                    <span>附近</span>
                </div>
                <div className="gao">
                    投稿作品
                </div>
                <div className="keke">
                    <span className="quan"></span>
                    <span className="thh">可可trhxn</span>
                    <span className="sheng">.&nbsp;.&nbsp;.</span>
                </div>
                <p className="ppp">我刚刚唱了一首《你走吧》，求点赞求礼物~</p>
                <div className="zou">
                    <span className="nv"></span>
                    <span className="sss">你走吧，sss<br/>
                    117人听过</span>
                    <span className="ye">我也唱</span>
                </div>
                <div className="wu">
                    <span className="iconfont icon-shoucang">39</span>
                    <span className="iconfont icon-liwu">112</span>
                    <span className="iconfont icon-cainixihuan">123</span>
                    <span className="iconfont icon-xiazai"></span>
                </div>
            </section>
    
        </div>
        )
    }

}
export default Chang;