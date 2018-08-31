import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login.vue'
import register from '@/components/register.vue'


import home from '@/views/home.vue'

//首页
import index from '@/views/index/index.vue'
import classList from '@/views/index/classList.vue'
import question from '@/views/index/question.vue'

//选车
import messageList from '@/views/messageCenter/messageList.vue'

//我的
import userCenter from '@/views/mine/userCenter.vue'
import dataCount from '@/views/mine/dataCount.vue'

Vue.use(Router)

export default new Router({
	mode:'history',
  	routes: [
    {
      path: '/',
      component: home,
      children:[{
      	path:'/',
      	component: index,
      	name:'index'
      },{
      	path:'/messageList',
      	component: messageList,
      	name:'messageList'
      },{
      	path:'/userCenter',
      	component: userCenter,
      	name:'userCenter'
      },{
      	path:'/classList',
      	component: classList,
      	name:'classList'
      },{
      	path:'/question',
      	component: question,
      	name:'question'
      },{
      	path:'/dataCount',
      	component: dataCount,
      	name:'dataCount'
      }]
    },{
      	path:'/login',
      	component: login,
      	name:'login'
      },{
      	path:'/register',
      	component: register,
      	name:'register'
      }
  ]
})
