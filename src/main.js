// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

import axios from 'axios';
Vue.prototype.axios = axios;

import { Toast } from 'vant';
import { Dialog } from 'vant';
axios.interceptors.request.use(function(config) {
	// 在发送请求之前做些什么
	Toast.loading({
		duration: 0,
		mask: true,
		forbidClick: true, // 禁用背景点击
		loadingType: 'spinner',
		message: '加载中...'
	});
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
	// 对响应数据做点什么
	Toast.clear();
	if(response.status != 200) {
		Dialog.alert({
			message: '服务器错误，请重试'
		}).then(() => {
			console.log('++++++++++++++++++++')
			Dialog.close()
		});
	} else {
		if(response.data.code != 0) {
			Dialog.alert({
				message: response.data.msg
			}).then(() => {
				
			});
		}
	}
	return response;
}, function(error) {
	// 对响应错误做点什么
	Dialog.alert({
			message: '网络异常，请稍后再试'
	}).then(() => {
			Dialog.close()
		});
	Toast.clear();
	return Promise.reject(error);
});

Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})