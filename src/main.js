import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

//컴포넌트
import HelloWorld from './components/helloworld/HelloWorld.vue'
import HelloWorld2 from './components/helloworld_with_eventbus/HelloWorld.vue'
import HelloWorld3 from './components/helloworld_with_store/HelloWorld.vue'

//요거 조사할것
Vue.use(VueRouter)
Vue.use(Vuex)

let store = new Vuex.Store({
    state : {
        world: '임시 세계'
    },
    mutations : {
        setWorld: function(state, data){
            state.world = data
        }
    },
    actions : {
    },
    // modules : modules.default
})

const routes = [
    { path: '/helloWorld', component: HelloWorld },
    { path: '/helloWorld2', component: HelloWorld2 },
    { path: '/helloWorld3', component: HelloWorld3 },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

//라우터는 App의 부모가 가지고 있어야 router-view를 파싱할 수 있다.
new Vue({
    el: "#app",
    router,
    store,
})

