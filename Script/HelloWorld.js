 var ALIYUN_TEST = false;
 var LOCAL_DEV = false ;
 var webAdr = LOCAL_DEV ? "http://192.168.8.188:5000" : "http://www.yuexingy.top";//--"http://39.108.107.146" "http://192.168.8.188:5000"-- 
 var downloadUrl = LOCAL_DEV ? "http://192.168.8.188" : "http://www.kncdb.com"; //--"http://39.108.84.48"  
 
 if( ALIYUN_TEST) {
     webAdr =   "http://118.31.37.55:5000" ; 
     downloadUrl =  "http://118.31.37.55:5100/"  ;
 }

var  CHECK_UPD_URL = webAdr+"/AutoUpdate.aspx"
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'ijsut wsanna fuck !~, stay with u foever my love !',
        text2: "relayfucky",
    },

    // use this for initialization
    // onLoad: function () {
    //     this.label.string = this.text;
    // },

    // called every frame
    update: function (dt) {
        // console.log("sgsdgsdgds",dt);
    },

    onLoad: function () {

     
        this.label.string = this.text2;
        cc.log("text2=  ",this.text2);
        cc.game.addPersistRootNode(this.node);

        var etc = require("etc");
        var net = require("lwebsocket");
        var http = require("httpUtils");
        net.init();
       
         

        var self = this;




        // net.initPb(function(){
            
            var okfunc = function(){
                
                net.sendMsg({ 
                    C2S_HostRequest : {szPackId:'111'},
                    S2C_HostSucc:function(msg){
                        cc.log("msg",msg.szIPAddr);
                        var ip = msg.szIPAddr;
                        var port = msg.nPort; 
                    },
                    S2C_HostFailed:function(msg){
                        cc.log("msg",msg.errInfo);
                        net.reConnect( etc.ip, etc.port,function(){
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
                            
                        });
                    },
                    S2C_UpdateRespond:function(msg){
                        cc.log("nNewVersion",msg.nNewVersion);
                    },
                });
 
                            
              

                // var testData1 = net.packMsg("C2S_HostRequest",{szPackId:'111'}); 
                // var ret = new ByteBuffer();
                 
                // ret.writeUint32(2);   
                   
                   
                // ret.append(testData1);
                // // ret.reverse();
                // ret.flip();  
                // var buffer = ret.toBuffer();   
                
                // net.sendMsg(buffer,function(buffer){
                  
                //     var id = buffer.readUint32();
                  
         
                //     console.log("response text msg: " + len+"/"+id+"||"+buffer);
            
                //     var pbbuffer =  new Uint8Array(buffer.toBuffer());
 
                //     var testData2 = net.unpackMsg("S2C_HostSucc",pbbuffer);
                //     // var testData2 = self.unpackMsg("TestAck",pbbuffer);
    
                //     console.log("testData2.text unpack " + testData2.szIPAddr); 
                // });
            } 
            var errorfunc = function(){
                cc.log("error text=  "); 
            }

            this.label.fontSize = 100;
            net.connect( etc.ip, etc.port, okfunc, errorfunc );

            var data = {
                ID:"psdgdsg",
                IMEI:"124vb225b",
                PROMOTION_ID:4,
                IS_SHARE:0,
                FIRST_LAUNCH:0
            }; 

            http.getWithValues(CHECK_UPD_URL,data,function(data) {
                // cc.log("httpGetWithValues_data",data);
                var data = JSON.parse(data);
                cc.log("json",data.OPEN_UPD,data.APPSTORE_MODE)
            });
            http.get(CHECK_UPD_URL,function(data){
                // cc.log("httpGet_data",data);
                var data = JSON.parse(data);
                cc.log("json",data.OPEN_UPD,data.APPSTORE_MODE)
            });
            
        // });
        // this.testWs();
       
    },


 
});
