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
        toggleGroup:{
            default:null,

            type:cc.ToggleGroup
        }

    },

    // use this for initialization
    onLoad: function () {

        cc.log("toggle",this.toggleGroup);
        // this.toggleGroup.toggle2.on("click",function(){});
    },


    onToggle:
    function(event,custumEventData){
        cc.log(event);
        cc.log(custumEventData);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
