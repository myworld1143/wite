var alert_component ={
    template:'<button @click="on_click">点击</button>',
            methods:{
                on_click:function(){
                    alert('hello');
                }
    }
};
new Vue({
    el:'#app1',
    components:{
        alert:alert_component
    }      
})
new Vue({
    el:'#app2'
})