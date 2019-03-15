
var Action={
    //登录存储信息
    Add(tet){
        return{
            type:"ADD_TOO",
            text:tet
        }
    },
    //换歌
    Huange(tet){
        return{
            type:"HUANGE",
            text:tet
        }
    },
//搜索
     Sousuo(tet){
        return{
            type:"SOUSUO",
            text:tet
        }
    },
// YONGHU gedan 

    Usergedan(tet){
        return{
            type:"USERGEDAN",
            text:tet
        }
    },
    // 用户歌单名
    UsergedanEF(tet){
        return{
            type:"USEsssRGEDAN",
            text:tet
        }
    },
    // 本地播放列表
    BendiBFLB(tet){
        return{
            type:"BENDIBFLB",
            text:tet
        }
    },
    // 歌单播放列表
    GEdanlih(tet){
        return{
            type:"GEDANLIEBISOS",
            text:tet
        }
    },
//评论
    addItem(msg){
        return{
            type:'ADD',
            text:msg
        }
    },
    Del(tet){
        return{
            type:"DEL_TOO",
            text:tet
        }
        
    },
    Longin(tet){
        return{
            type:"LOGIN",
            text:tet
        }
        
    }
}


export default Action