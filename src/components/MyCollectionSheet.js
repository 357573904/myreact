import React, { Component } from 'react';
import $ from "jquery";

import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'

import { Modal, Button, WingBlank, WhiteSpace, Toast, Accordion, List } from 'antd-mobile';
import '../css/mycollectionsheet.css';

import Store from "../redux/Store";
import Action from "../redux/Action";
const prompt = Modal.prompt;
class MyCollectionSheet extends Component {
   constructor(props){
       super(props)
       this.state={
           guanbi:"none"
       }
   }
    onChange = (key) => {
        console.log(key);
      }
      geng(){
        this.setState({
            guanbi:'block'
        })
      }
      tag(){
            $.ajax({
                type:"get",
                url:"https://api.bzqll.com/music/kugou/songList?key=579621905&id=578823",
                dataType:"json",
                success:function(data){
                    console.log(data)
                }
            })
      }
      delgeda(){
         
        this.setState({
            guanbi:'none'
        })
      }
      render() {
        return (
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
              <Accordion.Panel header="自建歌单">
                <List className="my-list" onClick={this.tag.bind(this)}>
                  <List.Item>
                      <p className="gedanimg"></p>
                      <div className="gedanname">
                          <p >我喜欢</p>
                          <span  >的损失大</span>
                      </div>
                      <div onClick={this.geng.bind(this)}>....</div>
                  </List.Item>
                  <List.Item>content 2</List.Item>
                  <List.Item>content 3</List.Item>
                </List>
              </Accordion.Panel>
              <Accordion.Panel header="收藏歌单" className="pad">this is panel content2 or other</Accordion.Panel>
              
            </Accordion>
            <Button onClick={() => prompt('', '新建歌单', [
      { text: '取消' },
      // { text: '确认', onPress: value => console.log(`输入的内容:${value}`) },
      { text: '确认', onPress: (value) => { 
        var id = Store.getState().list.id
        console.log(Store.getState().list.id)
        var _this=this;
        $.ajax({
            type:"get",
            url:"http://47.93.223.124/cool_cat/menu/addmenu.do",
            data:{uid:id,name:value},
            dataType:"json",
            success:function(data){
                console.log(data,value)
                if(data.code=="0"){
                    
                }
            }
        })
        }}
    ], 'default', '100')}
    >新建歌单</Button>

            {/* 弹出编辑 */}
            <div className="gebfduo" style={{display:this.state.guanbi}}>
                <p>gedanname  
                    <span className="iconfont" onClick={this.delgeda.bind(this)}>&#xe661;</span>
                </p>
                <ul >
                    <li>
                        <p className="iconfont">&#xe627;</p>
                        <div>分享</div>
                    </li>
                    <li>
                        <p className="iconfont">&#xe627;</p>
                        <div>下载</div>
                    </li>
                    <li>
                        <p className="iconfont">&#xe627;</p>
                        <div >删除</div>
                    </li>
                    
                </ul>
            </div>
          </div>
        );
      }

}
export default MyCollectionSheet;