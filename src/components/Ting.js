import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
// import 'antd/dist/antd.css';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
import '../css/ting.css';
import '../font/iconfont.css';
import AA from '../img/jin.jpg';
import BB from '../img/quan.jpg';
import CC from '../img/tiao.jpg';
import DD from '../img/sha.jpg';
import EE from '../img/bei.jpg';
import FF from '../img/chang.jpg';
import GG from '../img/san.jpg';
import HH from '../img/sum.jpg';
class Ting extends Component {
    constructor(props){
        super(props)
        this.state={
            display:"block",
          img:[AA,BB,CC],
            // data: ['1', '2', '3'],
            //      imgHeight: 176,
        }
    }
    // componentDidMount() {
    //     // simulate img loading
    //     setTimeout(() => {
    //       this.setState({
    //         data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //       });
    //     }, 100);
    //   }
    tap(){ 
        //this.go(-1)
        this.props.history.push('/shouye/search')
    }
    tiao(){
        // window.location.href='/yueku'
        this.props.history.push('/shouye/yueku')
    }
    dan(){
        // window.location.href='/gedan'
        this.props.history.push('/shouye/gedan')
        
    }
    dian(){
        // window.location.href='/dian'
    }
    shouqi(){
        if(this.state.display=="block"){
            this.setState({
                display:"none"
            })
        }else{
            this.setState({
                display:"block"
            })
        }
    }
    render(){
        return(
         
               <div className="out">                
                <section>
                    <div className="lunbo">
                        {/* <Carousel autoplay>
                            <div><img src={AA}/></div>
                            <div><img src={BB}/></div>
                            <div><img src={CC}/></div>
                            <div><img src={DD}/></div>
                            <div><img src={EE}/></div>
                            <div><img src={FF}/></div>
                            <div><img src={GG}/></div>
                            <div><img src={HH}/></div>
                        </Carousel>,mountNode */}
                          <WingBlank>
                        <Carousel
                            autoplay={false}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                            >
                            {this.state.img.map(val => (
                                <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                 <img src={val}/>
                                </a>
                            ))}
                            </Carousel>
                            </WingBlank>



                    </div>
                    <div className="yue">
                        <dl onClick={this.tiao.bind(this)}>     
                            <dt className="mid"><span className='shou iconfont icon-yinleku'></span></dt>
                            <dd>乐库</dd>
                        </dl>
                        <dl onClick={this.dan.bind(this)}>
                            <dt className="mid"><span className='shou iconfont icon-gedan'></span></dt>
                            <dd>歌单</dd>
                        </dl>
                        <dl onClick={this.dian.bind(this)}>
                            <dt className="mid"><span className='shou iconfont icon-diantai'></span></dt>
                            <dd>电台</dd>
                        </dl>
                        <dl>
                            <dt className="mid"><span className='shou iconfont icon-cainixihuan'></span></dt>
                            <dd>猜你喜欢</dd>
                        </dl>
                        <dl>
                            <dt className="mid"><span className='shou iconfont icon-meirituijian'></span></dt>
                            <dd>每日推荐</dd>
                        </dl>
                        <dl onTouchEnd={this.shouqi.bind(this)}>
                            <dt className="mid"><span className='shou iconfont icon-shouqi'></span></dt>
                            <dd>收起</dd>
                        </dl>
                    </div>
                    <div className="yin" style={{display:this.state.display}}>
                        <div className="cang">
                            <dl>
                                <dt className="qun"><span className="pian iconfont icon-kuqun"></span></dt>
                                <dd>酷群</dd>
                            </dl>
                            <dl>
                                <dt className="qun"><span className="pian iconfont icon-songbook_store"></span></dt>
                                <dd>唱片店</dd>
                            </dl>
                            <dl>
                                <dt className="qun"><span className="pian iconfont icon-paihangbang"></span></dt>
                                <dd>排行榜</dd>
                            </dl>
                            <dl>
                                <dt className="qun"><span className="pian iconfont icon-mv"></span></dt>
                                <dd>MV</dd>
                            </dl>
                            <dl>
                                <dt className="qun"><span className="pian iconfont icon-ouyupressed"></span></dt>
                                <dd>偶遇</dd>
                            </dl>
                            <dl>
                                <dt className="qun"><span className="pian iconfont icon-leimupinleifenleileibie"></span></dt>
                                <dd>分类</dd>
                            </dl>
                            <dl>
                                <dt className="qun"><span className="pian iconfont icon-geshou"></span></dt>
                                <dd>歌手</dd>
                            </dl>
                            <dl>
                                <dt className="qun"><span className="pian iconfont icon-jiaoyou"></span></dt>
                                <dd>音乐交友</dd>
                            </dl>
                            <dl>
                                <dt className="qun"><span className="pian iconfont icon-icon-test"></span></dt>
                                <dd>儿童社区</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="ne">
                        <ul>
                            <li>新歌</li>
                            <li>直播</li>
                            <li>歌单</li>
                            <li>资讯</li>
                            <li>视频</li>
                        </ul>   
                        <div className="pou">
                            <span className="hua"></span>
                            <span className="mis">偶尔会想他<br/><i>庄心妍-从心出发</i></span>
                            <span className="dia">.&nbsp;.&nbsp;.<br/><i>2小时</i></span>
                        </div>                     
                    </div>
                    
                </section>
               
            </div>
         
        )
    }

}
export default Ting;