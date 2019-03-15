var Login = ((state="",action)=>{
    switch (action.type) {
        case "SOUSUO":
            let arr="";
            arr = action.text
            return arr;
    
        default:
          return state;
    }

})
export default Login;