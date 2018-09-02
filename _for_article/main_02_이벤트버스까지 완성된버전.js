import Vue from 'vue'
import VueRouter from 'vue-router'

//컴포넌트
import HelloWorld from './components/helloworld/HelloWorld.vue'
import HelloWorld2 from './components/helloworld_with_eventbus/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/helloWorld', component: HelloWorld },
    { path: '/helloWorld2', component: HelloWorld2 },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

//라우터는 App의 부모가 가지고 있어야 router-view를 파싱할 수 있다.
new Vue({
    el: "#app",
    router,
})

