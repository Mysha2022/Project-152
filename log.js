AFRAME.registerComponent('log',{
    schema:{
        message:{type:'string', default:'hello car!! vroom vroom!'}
    },

    init: function(){
        console.log(this.data.message)
    }

})