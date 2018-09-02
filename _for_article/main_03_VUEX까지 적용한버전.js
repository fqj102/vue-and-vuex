import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

//컴포넌트 임포트
import HelloWorld from './components/helloworld/HelloWorld.vue'
import HelloWorld2 from './components/helloworld_with_eventbus/HelloWorld.vue'
import HelloWorld3 from './components/helloworld_with_store/HelloWorld.vue'

//라우터 사용처리
Vue.use(VueRouter)

//VUEX 사용처리
Vue.use(Vuex)

//VUEX 스토어 생성
const store = new Vuex.Store({
    state: {
        world: '임시 세계'
    },
    mutations: {
        setWorld: function(state, data){
            state.world = data
        }
    },
    actions: {
    },
})

//url과 컴포넌트 매핑
const routes = [
    { path: '/helloWorld', component: HelloWorld },
    { path: '/helloWorld2', component: HelloWorld2 },
    { path: '/helloWorld3', component: HelloWorld3 },
]

//라우터 생성
const router = new VueRouter({
    mode: 'history',
    routes
})

//기본 뷰객체에 라우터와 스토어 등록
new Vue({
    el: "#app",
    router,
    store,
})

