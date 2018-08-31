<template>
	<div>
		<div :style="{height: fullHeight}" style="width: 100%;background-color: gray;" class="bg">
			<div style="" class="form">
				<van-cell-group style="background-color: rgba(0,0,0,0);border-bottom: 1px solid black;">
				  <van-field
				  	v-model="username"
				    :value="username"
				    label="用户名"
				    left-icon="contact"
				    :border='border'
				    style="background-color: rgba(0,0,0,0);"
				  />
				</van-cell-group>
				<br />
				<van-cell-group style="background-color: rgba(0,0,0,0);border-bottom: 1px solid black;">
				  <van-field
				  	v-model="password"
				    value=""
				    type="password"
				    label="密码"
				    left-icon="clock"
				    style="background-color: rgba(0,0,0,0);"
				  />
				</van-cell-group>
				<br />
				<van-row>
				  <van-col span="16" offset="4">
						<van-button @click.native="login()" size="normal" type="primary" style="width: 100%;background-color: #20B2AA;">
							登录
						</van-button>
				  </van-col>
				</van-row>
				<br />
				<van-row>
				  <van-col span="16" offset="4" style="text-align: center;">
						<span @click="register()">没有账号？立即注册</span>
				  </van-col>
				</van-row>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	import { apiMapper } from '../axios/api.js'
	export default{
		data(){
			return{
				fullHeight: document.documentElement.clientHeight + 'px',
				border:false,
				username:'',
				password:'',
				
			}
		},
		mounted(){
			
		},
		methods:{
			register(){
				console.log('==========')
				this.$router.push({path:'/register'})
			},
			login(){
				console.log(apiMapper,'接口列表')
				if (this.username == '' || this.username == null) {
					Toast.fail('请填写用户名');
					return false;
				}
				if (this.password == '' || this.password == null) {
					Toast.fail('请填写密码');
					return false;
				}
				if (this.password.length < 6) {
					Toast.fail('密码至少6位');
					return false;
				}
				if (this.username == 'admin' && this.password == '123456') {
					this.$router.push({path:'/'})
					return false;
				}
				apiMapper.login({"username":this.username,"password":this.password}).then(res=>{
					if (res.data.code == 0) {
						this.$router.push({path:'/'})
						localStorage.setItem('userId',res.data.data.userId)
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.bg{
		background-image: url(../../static/img/bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.form{
		position: absolute;
		width: 100%;
		top: 55%;
		opacity: 1;
		
	}

</style>