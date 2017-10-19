// cc.Class({
//     extends: cc.Component,

//     properties: {
//         // foo: {
//         //    default: null,      // The default value will be used only when the component attaching
//         //                           to a node for the first time
//         //    url: cc.Texture2D,  // optional, default is typeof default
//         //    serializable: true, // optional, default is true
//         //    visible: true,      // optional, default is true
//         //    displayName: 'Foo', // optional
//         //    readonly: false,    // optional, default is false
//         // },
//         // ...
//     },

//     // use this for initialization
//     onLoad: function () {

//     },

//     // called every frame, uncomment this function to activate update callback
//     // update: function (dt) {

//     // },
// });

function loadPrefab(path,cb){
    cc.loader.loadRes(path, function (err, prefab) {
        cc.log("prefab/"+path);

        var node = cc.instantiate(prefab);
        // cc.log("node",node);
        // node.on('click', function (event) {
        //     cc.log("u clicked"+element);
        //  })
        // scontent.addChild(node,element);
        cb(node);
    });
}

function getRunningS(){
    return cc.director.getScene();
}

function replaceS(name){
    cc.director.preloadScene(name, function () {
        cc.log("Next scene preloaded",name);

        cc.director.loadScene(name);
    });
}


function isNull(value){
    return typeof value == "undefined";
} 
function localVal(key,value){ 
    if (isNull(value)) { 
        var val = cc.sys.localStorage.getItem(key);
        cc.log("get value from local ",key,val);
        return val;
    } else {
        cc.log("store value to local ",key,value);
        cc.sys.localStorage.setItem(key,value);
    }  
}
