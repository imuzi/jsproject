      
var httpUtils = cc.Class({
    // extends: cc.Component,
    name : "httpUtils",
    statics:{ 

         //// waring http 之后要转移到 preload 文件夹中  因为为基本方法 走再热更新前！！！
          // var data = {
            //     ID:"psdgdsg",
            //     IMEI:"124vb225b",
            //     PROMOTION_ID:4,
            //     IS_SHARE:0,
            //     FIRST_LAUNCH:0
            // }; 

            // http.getWithValues(CHECK_UPD_URL,data,function(data) {
            //     // cc.log("getWithValues_data",data);
            //     var data = JSON.parse(data);
            //     cc.log("json",data.OPEN_UPD,data.APPSTORE_MODE)
            // });
            // http.get(CHECK_UPD_URL,function(data){
            //     // cc.log("get_data",data);
            //     var data = JSON.parse(data);
            //     cc.log("json",data.OPEN_UPD,data.APPSTORE_MODE)
            // });
            
            getWithValues:
            function(url,values,cb){
                var data = values; 
                // {
                //     ID:"psdgdsg",
                //     IMEI:"124vb225b",
                //     PROMOTION_ID:4,
                //     IS_SHARE:0,
                //     FIRST_LAUNCH:0
                // }; 
    
                var temp = new Array(); 
                for (var key in data) { 
                    if (data.hasOwnProperty(key)) {
                        var element = data[key]; 
                        var form = key+"="+element; 
                        temp.push(form);
                        // cc.log("===============",form); 
                    }
                } 
                
                var values = temp.join("&");
                cc.log("getWithValues",values);
                var url = url + "?" + values;
                
                this.get(url,cb);
            },
    
            // http 
            get: function (url, callback) {
                cc.log("start requesting url",url);
                
                var xhr = cc.loader.getXMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                        var respone = xhr.responseText;
                        callback(respone);
                    }
                };
                xhr.open("GET", url, true);
                if (cc.sys.isNative) {
                    xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
                }
        
                // note: In Internet Explorer, the timeout property may be set only after calling the open()
                // method and before calling the send() method.
                xhr.timeout = 5000;// 5 seconds for timeout
        
                xhr.send();
            },
        
            post: function (url, params, callback) {
                var xhr = cc.loader.getXMLHttpRequest();
                xhr.onreadystatechange = function () {
                    cc.log('xhr.readyState='+xhr.readyState+'  xhr.status='+xhr.status);
                    if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                        var respone = xhr.responseText;
                        callback(respone);
                    }else{
                          callback(-1);
                    }
                };
                xhr.open("POST", url, true);
                if (cc.sys.isNative) {
                    xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
                }
        
                // note: In Internet Explorer, the timeout property may be set only after calling the open()
                // method and before calling the send() method.
                xhr.timeout = 5000;// 5 seconds for timeout
        
                xhr.send(params);
            }
    
    
    },
})
module.exports = httpUtils;

