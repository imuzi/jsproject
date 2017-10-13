
/**
npm install -g protobufjs 安装pbjs

pbjs -t static-module -w commonjs -o proto.js *.proto

修改proto.js 
 
var $protobuf = require('protobuf');
var $protobuf = protobuf; 
 */ 

var pbMsgTypeEnums = {
    hall:"enumMessageType",
    ddz:"ddzMessageType",
}

var ByteBuffer = require("bytebuffer");


var msgNameToMsgIdEnum = 
function(msgName){
    return msgName+"ID";
}

var msgIdEnumToMsgName = 
function(msgIdEnum){
    return msgIdEnum.substr(0,msgIdEnum.length-2);
}


/**TODO
 * 协议枚举名和结构名关系
 * login 业务名字
 * 
 * 客户端发送结构体名 C2S_login_Request
 * 客户端发送消息ID枚举名字  C2S_login_RequestID
 * 服务端结构体名  S2C_login_Response 
 * 服务端ID枚举名字  S2C_login_ResponseID 
 * 
 * 服务端状态成功结构体名  S2C_login_Succ 
 * 服务端状态成功ID枚举名字  S2C_login_SuccID 
 * 
 * 服务端状态成功结构体名  S2C_login_Fail 
 * 服务端状态成功ID枚举名字  S2C_login_FailID 
 
 * 
 */
 
 
module.exports = cc.Class({
    // extends: cc.Component,
    name : "pbUtils",
    statics:{ 
        proto:null,

        init:
        function(){
            this.proto = require("proto");  
        },

        

        readBuffer:
        function(content){
            cc.log("gsdgsdgsdgsdggdgsdhsdhdj");
            var buffer = new ByteBuffer();
            buffer.append( content )
            buffer.flip(); 
          
            var id = buffer.readUint32();  
            var name = this.getPbName(id);
            var pbName = msgIdEnumToMsgName(name);  
            var pbcontent = this.unpackMsg(pbName,buffer);

            cc.log("parseMsg,id,name,pbName",id,name,pbName)   
            
            return [pbName,pbcontent];
        },

        writeBuffer:
        function(name,data){ 
            var msgIdEnum = msgNameToMsgIdEnum(name); 
            var msgId = this.getPbId(msgIdEnum);

            cc.log("sendMsg_>msgId",msgId,"cPbName",name);
            var pbData = this.packMsg(name,data); 
            var ret = new ByteBuffer();
            ret.writeUint32(msgId);      
            ret.append(pbData);
            // ret.reverse();
            ret.flip();  
            var buffer = ret.toBuffer(); 
            return buffer;
        },
  

        packMsg:
        function(name,data)
        {
            var clas = this.proto[name];
            var msg = clas.create(data); 
            return clas.encode(msg).finish();
        },
        unpackMsg:
        function(name,data)
        {
            var data =  new Uint8Array(data.toBuffer());
            var clas = this.proto[name];
            return clas.decode(data);
        }, 



        getMsgNameById:
        function(id,enumTypeName){ 
            var enumOfMsg = this.proto[enumTypeName];
    
            for (var key in enumOfMsg) {
                if (enumOfMsg.hasOwnProperty(key)) {
                    var element = enumOfMsg[key];
                    // cc.log("___xxx",element,key);
                    
                    if (element == id) {
                        return key;
                    }
                }
            }
            cc.log("id",id,"找不到对应msgname");
            return 0;
        },

        getMsgIdByName:
        function(name,enumTypeName){
            var enumOfMsg = this.proto[enumTypeName];
            return enumOfMsg[name]; 
        },

        getPbName:
        function(id){
            for (var key in pbMsgTypeEnums) {
                if (pbMsgTypeEnums.hasOwnProperty(key)) {
                    var element = pbMsgTypeEnums[key];
                    var name = this.getMsgNameById(id,element);
                    cc.log("getPbName",element,name,id);
                    if (name != 0) {
                        return name ;
                    }
                }
            }
            cc.log("id",id,"所有都找不到对应msgname");
            
            return 0;
        },
        getPbId:
        function(name){
            for (var key in pbMsgTypeEnums) {
                if (pbMsgTypeEnums.hasOwnProperty(key)) {
                    var element = pbMsgTypeEnums[key];
                    var id = this.getMsgIdByName(name,element);
                    cc.log("getPbId",element,id);
                    if (id != null) {
                        return id ;
                    }
                }
            }
        },

      
      
         // initPb : function (cb) {
            
        //     if (typeof protobuf === 'undefined')
        //     {
        //         throw(new Error("protobuf is undefined"));
        //     }
        //     //proto 文件路径
        //     var protoPath ="resources/pb.proto";
        //     var self = this;
        //     //加载protos 文件
        //     protobuf.load(cc.url.raw(protoPath), function(err,data){
        //         self.proto = data; 
        //         cc.log("protobuff init success!");
        //         if(typeof cb == "function"){
        //             cb();
        //         }
        //     });
        // },
        // createProtoBuf:function(msg,data){
        //     var msg_class = this.proto.lookupType(msg);
        //     var message = msg_class.create(data);
        //     var body = msg_class.encode(message).finish();
        //     return body;
        // },
        // parseProtoBuf:function(msg,data){
        //     var msg_class = this.proto.lookupType(msg);
        //     var body = msg_class.decode(data);
        //     return body;
        // },
        
        


    },
});