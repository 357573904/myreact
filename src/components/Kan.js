import React, { Component } from 'react';
import '../css/look.css';
import AA from '../img/one.jpg';
import BB from '../img/two.jpg';
import CC from '../img/three.jpg';
import DD from '../img/four.jpg'; 
import '../font/iconfont.css';
class Kan extends Component {
    render(){
        return(
            <div className="out">
                 
            <section>
                <div className="new1">                        
                    <dl>
                        <dt className="mid"><span className='shou iconfont icon-xing-copy'></span></dt>
                        <dd>新主播</dd>
                    </dl>
                    <dl>
                        <dt className="mid"><span className='shou iconfont icon-nearby'></span></dt>
                        <dd>附近</dd>
                    </dl>
                    <dl>
                        <dt className="mid"><span className='shou iconfont icon-haoshengyin'></span></dt>
                        <dd>好声音</dd>
                    </dl>
                    <dl>
                        <dt className="mid"><span className='shou iconfont icon-paihangbang'></span></dt>
                        <dd>榜单</dd>
                    </dl>
                    <dl>
                        <dt className="mid"><span className='shou iconfont icon-wd'></span></dt>
                        <dd>我的</dd>
                    </dl>
                </div>
                <div className="list">
                    <dl>
                        <dt><img src={AA}/></dt>
                        <dd>小冷不忘初心<span>3422</span></dd>
                    </dl>
                    <dl>
                        <dt><img src={BB}/></dt>
                        <dd>VR肚皮舞艾米<span>2099</span></dd>
                    </dl>
                    <dl>
                        <dt><img src={CC}/></dt>
                        <dd>JY周小白<span>4388</span></dd>
                    </dl>
                    <dl>
                        <dt><img src={DD}/></dt>
                        <dd>兮梵贼好挖<span>1234</span></dd>
                    </dl>
                    <dl>
                        <dt><img src={AA}/></dt>
                        <dd>小冷不忘初心<span>3372</span></dd>
                    </dl>
                    <dl>
                        <dt><img src={BB}/></dt>
                        <dd>VR肚皮舞艾米<span>8711</span></dd>
                    </dl>
                    <dl>
                        <dt><img src={CC}/></dt>
                        <dd>JY周小白认真唱<span>7211</span></dd>
                    </dl>
                    <dl>
                        <dt><img src={DD}/></dt>
                        <dd>兮梵贼好挖<span>3275</span></dd>
                    </dl>
                </div>
            </section>
        
        </div>
        )
    }

}
export default Kan;