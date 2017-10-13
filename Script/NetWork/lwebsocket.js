var SocketState = {
    UnInit : 0,
    Linking : 1,
    Linked : 2,
    Close : 3,
}
 

var lwebsocket = cc.Class({
    // extends: cc.Component,
    name : "lwebsocket",
    statics: {
        ip : "",
        port : 0,
        reader : null,
        socket : null,
        state : SocketState.UnInit,
        msgdispatch : null,
        pbUtils:null,
        queue : null,
        working : false,
        onClose:null,


        
     

        init : function(){
            var self = this;
            if(!cc.sys.isNative){  

                this.reader = new FileReader();
                this.reader.addEventListener( "loadend", function(){
                    var data = this.result; 
                    self.readMsg(data);
                });
                this.reader.addEventListener( "onerror", function(){
                    // self.working = false;
                    self.domessage();
                });
            };

            this.queue = new Array();
            this.msgdispatch = require("msgdispatch");
            this.pbUtils = require("pbUtils"); 
            this.pbUtils.init();
 
        },

        readMsg:
        function(data)
        {
            var rvars = this.pbUtils.readBuffer(data);
            var pbName = rvars[0];
            var pbcontent = rvars[1];

            this.msgdispatch.dispatch( pbName, pbcontent );

            this.domessage();
        },

        domessage : function () { 
            if ( this.queue.length > 0 ){
                
                if(cc.sys.isNative){  
                    var data = this.queue.shift();
                    this.readMsg(data);
                }else {  
                    if( this.reader.readyState != 1 ){
                        var data = this.queue.shift();
                        this.reader.readAsArrayBuffer(data);
                    }
                }
                
                
            }
            
        },
        connect:function(ip, port, fnConnect, fnError) {
            var self = this;
            this.ip = ip;
            this.port = port;
            var ws = new WebSocket('ws://'+this.ip+':'+this.port+'');//,{"force new connection":true,"rememberUpgrade" : true,"upgrade":true});
 
            ws.onopen = function (event) {
                console.log("Send Text WS was opened.");
                self.state = SocketState.Linked;
                if( fnConnect ){
                    fnConnect()
                }
            };
            ws.onmessage = function (event) {
                console.log("response text msg: " + event.data);
                self.queue.push( event.data );
                if(self.queue.length > 0){
                    self.domessage();
                }
            };
            ws.onerror = function (event) {
                console.log("Send Text fired an error");
                self.state = SocketState.Close;
            };
            ws.onclose = function (event) {
                console.log("WebSocket instance closed.");
                self.state = SocketState.Close;

                var _onclose = self.onClose;
                if (typeof _onclose == "function") {
                    _onclose(event); 
                }
              
                if(fnError){
                    fnError()
                } 
            };
 
            this.socket = ws;
        },

   

        reConnect:
        function(ip, port, fnConnect, fnError)
        {   
            cc.log("reconnecting",ip,port)
            var self = this;
            this.close(function(event){
                self.connect(ip, port, fnConnect, fnError);
                self.onClose = null; 
            })

        },

        close:
        function(cb)
        {
            this.socket.close();
            if(cb){this.onClose = cb;}; 
        },

        send : function(buffer){
            this.socket.send(buffer); 
        },

        
        /**
         * TODO:是否可以通过发送时的cPbName来获取收到消息的消息ID枚举命名和结构体用pbName
                net.sendMsg({ 
                    C2S_Login : {
                        szUser:
                        {
                        szUserName : "etst",//用户名
                        szPassword : "4515",//密码
                        szMathineCode : "dsggsdg",//本机机器码用于锁定机器
                        nDevice:1,//操作系统：0，win32；1，android；2，ios；
                        szMobileVCode:21515,   //手机验证码
                        nPromoID:6,//推广ID
                        nClientVersion : "1.235",//客户端版本号
                        }
                    },
                    S2C_LoginSucc:function(msg){
                        cc.log("S2C_LoginSuccmsg",msg.szUser.szUserName);
                    },
                    S2C_LoginFailed:function(msg){
                        cc.log("S2C_LoginFailedmsg",msg.szUser.szUserName);
                    },
                   
                });
         */

        sendMsg:
        function(params){
            // var cPbName = params.cPbName;
            // var data = params.data;
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    var element = params[key];

                    if (typeof element == "object") {

                        var buffer = this.pbUtils.writeBuffer(key,element);
                        
                        this.msgdispatch.saveExtraRecvCb(params);
                        this.send(buffer);
                        break;
                    }
                }
            }
 

        },



        // sendMsg:
        // function(buffer,cb){

        // },

       
        
    
    },
});

module.exports = lwebsocket;