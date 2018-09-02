/**
 * HelloWorld VUEX sotre 모듈
 * @author WonwooKang
 */

export default {
    namespaced: true,
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
}
