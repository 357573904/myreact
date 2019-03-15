import React from "react";
import Action from "./Action";
import Store from "./Store";

class Redux extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:Store.getState().list, //取状态数据
            login:Store.getState().login,//取状态数据
        }
        this.change=this.change.bind(this)
    }

    tag(){
        Store.dispatch(Action.Add(this.refs.ipt.value))  //发送要更新的数据
        this.refs.ipt.value=""
    }
    change(){
        this.setState({
            list:Store.getState().list,
            login:Store.getState().login,
        })
    }
    componentDidMount(){
        Store.subscribe(this.change)
    }
    del(i){
        Store.dispatch(Action.Del(i))
    }
    loginn(){
        var _this=this;	
    
        Store.dispatch( (dispatch)=>{
           
                setTimeout(function(){
                    dispatch(Action.Longin(_this.refs.login.value))
                    _this.refs.login.value=""  /// 清除掉出入框内容不能放到setTimeout外面，不然取到的为空
                },2000)
            })
            // Store.dispatch(Action.Longin( this.refs.login.value))
        
    }
    render(){
        
        return(
            <div>
                <h2>Redux---------{this.state.login}</h2>
                <input type="text" ref="ipt"/>
                <button onClick={this.tag.bind(this)}> 提交</button>
                {
                  
                    this.state.list.map((time,i)=>{
                        return(
                            <div key={i}>{time}----------<button onClick={this.del.bind(this,i)}>删除</button></div>
                        )
                    })
                }
                <hr/>
                <input type="text" ref="login"/>
                <button onClick={this.loginn.bind(this)}>登录</button>

            </div>
        )
    }
}
export default Redux;