// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'        //引入路由
import vueResource from 'vue-resource'    //引入vue-resource(用于https请求)
//引入element-ui
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'        //引入axios
import Qs from 'qs'              //QS是axios库中带的，不需要我们再npm安装一个


//引入路由组件
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
import Element_test from './components/Element_test'
import Survey from './components/Survey'

//配置全局axios
Vue.prototype.axios = axios
Vue.prototype.qs = Qs             //Ps:Qs这个库是帮助我们解决坑的,建议使用...
Vue.config.productionTip = false


Vue.use(vueRouter)       //使用路由
Vue.use(vueResource)     //使用vueResource
Vue.use(ElementUI)      //使用element-ui


//配置路由
const router = new vueRouter({
	//页面跳转的路径，注意是routes
	routes:[
	{path:'/',component:Home},
	{path:'/HelloWorld',name: 'HelloWorld',component:HelloWorld},
	{path:'/Element',name: 'Element_test',component:Element_test},
  {path:'/Survey',name: 'Survey',component:Survey},
	/*路由重定向，当用户搜索不到页面时，默认跳转到指定页面*/
	{path:'*',redirect:"/"},
	],
	//删掉锚点(#号键)
	mode: 'history',
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,               //在实例化中使用路由
  components: { App },
  template: '<App/>',
  render: h => h(App)    //在实例化中使用ElementUI
})
