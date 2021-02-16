import Vue from 'vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  
export default new VueRouter({
    routes: [
        { path: '/login', name: 'login', component: Login }
    ]
});
