require('./bootstrap');
import router from './routes'
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import User from './store'
import Product from './storeproduct'
import App from './App.vue'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
Vue.use(VueRouter);
const store=new Vuex.Store({
    modules:{
        User,
         Product
    }, plugins: [createPersistedState()]
});
router.beforeEach((to, from, next) => {  
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.state.User.token) {
        next()
      } else {
        next("/Login")
      }
    } else {
        next()
    }
  })
const app=new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App)
})

