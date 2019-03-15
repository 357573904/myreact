var Addtoo = ( (state={},action)=>{
    switch (action.type) {
        case "ADD_TOO":
                let arr={};
                arr = action.text
            return arr;
        case "DEL_TOO":
            let arr1 = [...state];
            arr1.splice(action.text,1)
            return arr1
        default:
          return state;
    }
})
export default Addtoo;