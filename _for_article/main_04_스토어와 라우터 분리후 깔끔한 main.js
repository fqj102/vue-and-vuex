import Vue from 'vue'
import router from '../router'
import store from '../vuex/store'

//분리후 매우매우 깔끔해진 main.js
new Vue({
    el: "#app",
    router,
    store,
})

