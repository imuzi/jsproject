// var packet = require( "Lpackage" )
var msgcode = require( 'Msgcode' )
var ErrorCode = require( "errorcode" )
var BaseConfig = require("BaseConfig")

// var onLogin = function( pack ){
//     var result = pack.result;
//     if ( result == 0 ) {
//         var obj = {id:pack.id, name:pack.name, gold:pack.gold, gm:pack.gmlevel}
//         var player = require('Player')
//         var pPlayer = new player();
//         pPlayer.login(obj)
//     }else if( result == ErrorCode.ACCOUNT_SEAL ){
//         var timestamp3 = pack.id;
//         var newDate = new Date();
//         newDate.setTime(timestamp3 * 1000);
//         var msg = msgcode[ result ] + " " + newDate.toLocaleString() + msgcode.END_COLOR +msgcode.END_SIZE;
//         cc.ll.notice.addMsg ( 2, msg, null);
//     }else{
//         cc.ll.msgbox.addMsg(result);
//     }
//     cc.ll.loading.removeLoading();
// }





var RecvCbs = {
    C2S_HostRequest:2,//负载均衡
    S2C_UpdateRespond:3 ,//强制更新
    

	S2C_HostSucc:function( msg ){


     } ,//负载均衡返回成功
	S2C_HostFailed:function( msg ){
        

     } ,//负载均衡返回失败
	C2S_Login:6 ,//用户名密码登录
	S2C_LoginSucc:7 ,//登录成功
	S2C_LoginFailed:8 ,//登录失败
	C2S_Regist:9 ,//注册
	S2C_RegistSucc:10 ,//注册成功，服务器自动登录此帐户，无需再发送登录消息
	S2C_RegistFailed:11 ,//注册失败
	C2S_BindUser:12 ,//绑定游客帐户
	S2C_BindUserSucc:13 ,//绑定游客帐户成功
	S2C_BindUserFailed:14 ,//绑定游客帐户失败
	C2S_GameTypeList:15 ,//获取游戏类型列表,
	S2C_GameTypeListRespond:16 ,//返回游戏类型列表
	C2S_GameRoomList:17 ,//获取游戏房间列表,
	S2C_GameRoomListRespond:18 ,//返回游戏房间列表
	S2C_RollMessage:19 ,//跑马灯公告
	MAX_LobbyMsg:9999 ,//大厅服务器使用9999之前的ID特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！
	GameServerMsg:10000 ,//游戏服务器通信使用10000以后的ID,特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！
	C2S_EnterRoom:10001 ,//进入房间
	S2C_EnterRoomSucc:10002 ,//进入房间成功
	S2C_EnterRoomFailed:10003 ,//进入房间失败
	C2S_ExitRoom:10004 ,//退出房间
	S2C_ExitRoomSucc:10005 ,//退出房间成功
	C2S_EnterDesk:10006 ,//进入桌子
	S2C_EnterDeskSucc:10007 ,//进入桌子成功
	S2C_EnterDeskFailed:10008 ,//进入桌子失败
	C2S_ExitDesk:10009 ,//退出桌子
	S2C_ExitDeskSucc:10010 ,//退出桌子成功
	S2C_ExitDeskFailed:10011 ,//退出桌子失败
	S2C_UserGameInfo:10012 ,//用户信息，自己的信息和其他玩家的信息
	GameDDZMsg:11000 ,//DDZ游戏通信使用11000以后的ID,特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！
	GameBJLMsg:12000 ,//百家乐游戏通信使用12000以后的ID,特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！
	GameZJHMsg:13000 ,//金花游戏通信使用13000以后的ID,特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！
	GameLHPMsg:14000 ,//翻番乐游戏通信使用14000以后的ID,特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！
	GameBBNNMsg:15000 ,//百变牛牛游戏通信使用15000以后的ID,特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！
	GameSRNNMsg:16000 ,//四人牛牛游戏通信使用16000以后的ID,特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！
	GameLKPYMsg:17000 ,//李奎捕鱼游戏通信使用17000以后的ID,特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！
	GameDZPKMsg:18000 ,//德州游戏通信使用18000以后的ID,特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！特别注意分割线！
}

var ExtraRecvCbArrays = {}

var TempExtraRecvCbArrays = new Array();

var msgdispatch = cc.Class({
    // extends: cc.Component,
    name : "msgDispatch",
    statics:{ 

        dispatch : function(pbName, msg){
            this.unzipExtraRecvCb();
            var doOne = function(func){
             
                if (func !== null 
                    && typeof func == "function" ) { 
                    func(msg);
                };
            };


            var bindRecvCb = RecvCbs[pbName];
            var _func = function(msg){
                doOne(bindRecvCb);

                var extraRecvCbs = ExtraRecvCbArrays[pbName];
                 if (extraRecvCbs != null && extraRecvCbs.length > 0) {
                    doOne(extraRecvCbs.shift());
                 }; 
                
            };

            _func(msg); 
        },


        //添加常监听 
        addRecvCb:
        function(pbName,cb)
        {
            RecvCbs[pbName] = cb;
        },

        //移除监听
        removeRecvCb:
        function(pbName)
        {
            RecvCbs[pbName] = null;
        },

        // 收到消息后才添加 
        // 添加临时消息回调 用完自删
        addExtraRecvCb:
        function(extrafuncMap){
            var object = extrafuncMap;
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    var element = object[key];
              
                    var extraRecvCbs = ExtraRecvCbArrays[key];
                    if (extraRecvCbs == null){
                        extraRecvCbs = new Array();
                    }
                   
                    if(typeof element == "function"){
                        extraRecvCbs.push(element);
                    }; 
                    
                    ExtraRecvCbArrays[key] = extraRecvCbs;
                }
            }
        },



        

        saveExtraRecvCb:
        function(data){
            TempExtraRecvCbArrays.push(data);
        },

        unzipExtraRecvCb:
        function()
        {
            TempExtraRecvCbArrays.forEach(function(element) {
                this.addExtraRecvCb(element);
            }, this);

            TempExtraRecvCbArrays = new Array();
        }




    },
})
module.exports = msgdispatch;