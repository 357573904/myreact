var BENDI=((state=[],action)=>{
	switch (action.type){
		
        case "BENDIBFLB":  //本地播放列表
            let arr1=[...state];
            arr1 = action.text
            return arr1;
		default:
			return state;
	}
})

export default BENDI;