import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import HelloWorld from './components/helloworld/HelloWorld.vue'

//요거 조사할것
Vue.use(VueRouter)
Vue.use(Vuex)

let store = new Vuex.Store({
    state : {
    },
    mutations : {
    },
    actions : {
    },
    // modules : modules.default
})

const routes = [
    { path: '/', component: HelloWorld }
]

const router = new VueRouter({ routes })

//라우터는 App의 부모가 가지고 있어야 router-view를 파싱할 수 있다.
new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: '<App/>'
})

