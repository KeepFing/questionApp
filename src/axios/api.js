import axios from 'axios';
export const apiMapper = {
	/*
	 登录接口
	 params:{username,password}
	 * */
	login:(params)=>{
		return axios({
			method:'post',
			url:'http://192.168.41.19:3000/api/user/login',
			data:{
				"username":params.username,
				"password":params.password
			}
		}).then(res=>res)
	},
	/*
	 注册接口
	 params:{username,password....}
	 * */
	register:(params) => {
		return axios.post('http://192.168.41.19:3000/api/user/register',params).then(res=>res)
	},
	/*
	 获取科目种类
	 null
	 * */
	getSubjects:() => {
		return axios.get('http://192.168.41.19:3000/api/subject/getSubjects').then(res=>res)
	},
	
	/*
	 获取科目下的知识点接口
	 params:{subjectId}
	 * */
	getPoints:(params) => {
		return axios.post('http://192.168.41.19:3000/api/subject/getPoints',params).then(res=>res)
	},
	/*
	 获取题目列表接口
	 params:{subjectId}
	 * */
	getQuestion:(params) => {
		return axios.post('http://192.168.41.19:3000/api/subject/getQuestion',params).then(res=>res)
	}
}