import Vue from 'vue'
import Vuex from 'vuex'

// 모든모듈 modules로 임포트
import * as modules from './modules'

//VUEX 사용처리
Vue.use(Vuex)

//VUEX 스토어 생성
const store = new Vuex.Store({
    state: {
        commonTitle: '임시 실험실',
    },
    mutations: { //실제 화면등에 적용시키는 부분
        setMainTitle: function(state, data){
            state.testData = data
        }
    },
    actions: {//서버와 통신후 값을 받는부분
        getMainTitle: function(context) {

            let serverReturnedTitle = '여기는 kww 실험실 입니다.'

            context.commit('setTitle', serverReturnedTitle)
        }
    },
    modules: modules.default
})

//스토어 배포
export default store
