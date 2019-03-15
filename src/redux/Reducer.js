import  {combineReducers} from "redux";
import  Addtoo from "./Addtoo";
import  Login from "./Login";
import  Sousuo from "./Sousuo";
import  Usergedan from "./Usergedan";
import  Huange from "./Huange";
import  Bendibflb from "./Bendibflb";
import  Todolist from "./Pinglun";
import  BENDI from "./BENSI";
var Reducer = combineReducers({
   list:Addtoo,//登录信息  
   login:Login, // 查看用户歌单详情
   huange:Huange, //换歌  用户歌单名
   sousuo:Sousuo ,//搜索歌曲
   usergedan:Usergedan ,// 用户歌单名
   bendibflb:Bendibflb,// 本地播放列表  歌单播放列表
   pinglun:Todolist,
   bendi:BENDI,//本地播放列表
}

)

export default Reducer