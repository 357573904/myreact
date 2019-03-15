

var Huange = ((state={},action)=>{
    switch (action.type) {
        case "HUANGE"://换歌  
            let arr={};
            arr = action.text
            return arr;
        
        default:
          return state;
    }

})
export default Huange;