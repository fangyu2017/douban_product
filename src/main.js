// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import VueRouter from 'vue-router'
import InTeacher from './components/inTeacher'
import MovieDetail from './components/movieDetail'
Vue.config.productionTip = false
Vue.prototype.$axios=Axios
Vue.use(VueRouter)
/* eslint-disable no-new */
const router=new VueRouter({
  mode:'history',
  routes:[
    {path:'/',name:'InTeacherLink',component:InTeacher},
    {path:'/movieDetail/:id',name:'MovieDetailLink',component:MovieDetail}
  ]
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
