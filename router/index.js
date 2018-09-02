import Vue from 'vue'
import Router from 'vue-router'

//컴포넌트 임포트
import HelloWorld from '../src/components/helloworld/HelloWorld.vue'
import HelloWorld2 from '../src/components/helloworld_with_eventbus/HelloWorld.vue'
import HelloWorld3 from '../src/components/helloworld_with_store/HelloWorld.vue'
import ProductMain from '../src/components/check_itemlist_with_store/ProductMain.vue'

//라우터 사용처리
Vue.use(Router)

//url과 컴포넌트 매핑 name은 router.pust() 메서드 사용시 필요하다.
const routes = [
    {
        path: '/helloworld',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/helloworld2',
        name: 'HelloWorld2',
        component: HelloWorld2
    },
    {
        path: '/helloworld3',
        name: 'HelloWorld3',
        component: HelloWorld3
    },
    {
        path: '/products',
        name: 'ProductMain',
        component: ProductMain
    }
]

//라우터 생성
const router = new Router({
    mode: 'history',
    routes
})

//라우터 배포
export default router
