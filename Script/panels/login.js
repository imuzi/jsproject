 

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

        // label: {
        //     default: null,
        //     type: cc.Label
        // },
        scrollview:{    
                default: null,
                type: cc.ScrollView
        }

        // // defaults, set visually when attaching this script to the Canvas
        // text: 'ijsut wsanna fuck !~, stay with u foever my love !',
        // text2: "relayfucky",
    },

    // use this for initialization
    onLoad: function () {
        cc.log( this.scrollview);
        cc.log( this.scrollview.content);
        var scrview = this.scrollview;
        var scontent = scrview.content;
        scontent.removeAllChildren();
        var children = scontent.children;
        children.forEach(function(element) {
            cc.log(element);
            if (element.name=="by") {
                element.destroy();
            }
            
            
        }, this);

        var gameBtns = ["by","ddz","dz","nn","zjh"];

        gameBtns.forEach(function(element) {
            cc.loader.loadRes("prefab/"+element, function (err, prefab) {
                cc.log("prefab/"+element);
    
                var node = cc.instantiate(prefab);
                cc.log("node",node);
                node.on('click', function (event) {
                    cc.log("u clicked"+element);
                 })
                scontent.addChild(node,element);
            });
        }, this);

        scrview.scrollToLeft();

        
        // scontent:("hall_game_10001300");
       
        // this.scrollview.view.content.addChild();
    },

    gameClick:function(event, customEventData){
        cc.log(event,"event");
        cc.log(customEventData,"cunstumEvetnData");

        cc.director.preloadScene("helloworld", function () {
            cc.log("Next scene preloaded");

            cc.director.loadScene("helloworld");
        });
         
        
        
    },
  


    settingClick:
    function(event, customEventData){
        cc.loader.loadRes("prefab/login", function (err, prefab) {
            cc.log("prefab/login");

            var node = cc.instantiate(prefab);
            cc.director.getScene().addChild(node, 999);
        });
        cc.log(event,"event");
        cc.log(customEventData,"cunstumEvetnData");
       
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
