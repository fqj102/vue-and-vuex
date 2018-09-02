import Vue from 'vue'
import VueRouter from 'vue-router'

//컴포넌트 임포트
import HelloWorld from './components/helloworld/HelloWorld.vue'
import HelloWorld2 from './components/helloworld_with_parentcall/HelloWorld.vue'

//라우터 사용처리
Vue.use(VueRouter)

//url과 컴포넌트 매핑
const routes = [
    { path: '/helloWorld', component: HelloWorld },
    { path: '/helloWorld2', component: HelloWorld2 },
]

//라우터 생성
const router = new VueRouter({
    mode: 'history',
    routes
})

//기본 뷰객체에 라우터 등록
new Vue({
    el: "#app",
    router,
})

