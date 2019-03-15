

var Login = ((state="",action)=>{
    switch (action.type) {
        case "USERGEDAN":// 查看用户歌单详情
            let arr="";
            arr = action.text
            return arr;
        // case "USERGEDAN":   
        //     let arr1 = [...state];
        //     arr1.splice(action.text,1)
        //     return arr1
        default:
          return state;
    }

})
export default Login;