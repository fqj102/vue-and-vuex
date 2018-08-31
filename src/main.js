import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import HelloWorld from './components/helloworld/HelloWorld.vue'
// import HelloWorld2 from './components/helloworld/HelloWorld2.vue'
import HelloWorld from './components/helloworld/HelloWorld.vue'
const Test = { template: '<span>test</span>' }

//요거 조사할것
Vue.use(VueRouter)
Vue.use(Vuex)

let store = new Vuex.Store({
    state : {
        testData: '임시 데이터'
    },
    mutations : {
        setData: function(state, data){
            state.testData = data
        }
    },
    actions : {
    },
    // modules : modules.default
})

const routes = [
    { path: '/test', name: "test", component: HelloWorld },
    // { path: '/test', component: HelloWorld2 }
]

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/test',
            name: 'test',
            component: Test
        },
    ]
})

//라우터는 App의 부모가 가지고 있어야 router-view를 파싱할 수 있다.
new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: '<App/>'
})

