<template>
	<div>
		<div :style="{height: fullHeight}" style="width: 100%;background-color: gray;" class="bg">
			<div style="" class="form">
				<van-cell-group style="background-color: rgba(0,0,0,0);border-bottom: 1px solid black;">
				  <van-field
				  	v-model="registerInfo.username"
				    :value="registerInfo.username"
				    label="用户名"
				    left-icon="contact"
				    :border='border'
				    style="background-color: rgba(0,0,0,0);"
				  />
				</van-cell-group>
				<br />
				<van-cell-group style="background-color: rgba(0,0,0,0);border-bottom: 1px solid black;">
				  <van-field
				  	v-model="registerInfo.password"
				    value=""
				    type="password"
				    label="密码"
				    left-icon="clock"
				    style="background-color: rgba(0,0,0,0);"
				  />
				</van-cell-group>
				<br />
				<van-cell-group style="background-color: rgba(0,0,0,0);border-bottom: 1px solid black;">
				  <van-field
				  	v-model="registerInfo.repassword"
				    value=""
				    type="password"
				    label="确认密码"
				    left-icon="clock"
				    style="background-color: rgba(0,0,0,0);"
				  />
				</van-cell-group>
				<br />
				<van-cell-group style="background-color: rgba(0,0,0,0);border-bottom: 1px solid black;">
				  <van-field
				  	v-model="registerInfo.phone"
				    :value="registerInfo.phone"
				    label="手机号"
				    left-icon="phone"
				    :border='border'
				    style="background-color: rgba(0,0,0,0);"
				  />
				</van-cell-group>
				<br />
				<van-cell-group style="background-color: rgba(0,0,0,0);border-bottom: 1px solid black;">
				  <van-field
				  	v-model="registerInfo.age"
				    :value="registerInfo.age"
				    label="年龄"
				    left-icon="ecard-pay"
				    :border='border'
				    style="background-color: rgba(0,0,0,0);"
				  />
				</van-cell-group>
				<br />
				<van-cell-group style="background-color: rgba(0,0,0,0);border-bottom: 1px solid black;">
				  <van-field
				  	v-model="registerInfo.college"
				    :value="registerInfo.college"
				    label="毕业院校"
				    left-icon="exchange"
				    :border='border'
				    style="background-color: rgba(0,0,0,0);"
				  />
				</van-cell-group>
				<br />
				<van-cell-group style="background-color: rgba(0,0,0,0);border-bottom: 1px solid black;">
				  <van-field
				  	v-model="registerInfo.address"
				    :value="registerInfo.address"
				    label="地址"
				    left-icon="location"
				    :border='border'
				    style="background-color: rgba(0,0,0,0);"
				  />
				</van-cell-group>
				<br />
				<van-row>
				  <van-col span="16" offset="4">
						<van-button @click.native="register()" size="normal" type="primary" style="width: 100%;background-color: #20B2AA;">
							注册
						</van-button>
				  </van-col>
				</van-row>
				<br />
				<van-row>
				  <van-col span="16" offset="4" style="text-align: center;">
						<span @click="login()">已有账号，去登录</span>
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
				registerInfo:{
					username:'',
					password:'',
					repassword:'',
					phone:'',
					age:'',
					college:'',
					address:'',
				}
			}
		},
		mounted(){
			
		},
		methods:{
			login(){
				this.$router.push({path:'/login'})
			},
			register(){
				if (this.registerInfo.username == '' || this.registerInfo.username == null) {
					Toast.fail('请填写用户名');
					return false;
				}
				if (this.registerInfo.password == '' || this.registerInfo.password == null) {
					Toast.fail('请填写密码');
					return false;
				}
				if (this.registerInfo.password.length < 6) {
					Toast.fail('密码至少6位');
					return false;
				}
				if (this.registerInfo.repassword == '' || this.registerInfo.repassword == null) {
					Toast.fail('请填写密码');
					return false;
				}
				if (this.registerInfo.password !== this.registerInfo.repassword) {
					Toast.fail('两次密码输入不一致，请重新输入');
					return false;
				}
				var _this = this
				apiMapper.register(this.registerInfo).then(res=>{
					if (res.data.code == 0) {
						Toast.success('注册成功，请登录');
						this.$router.push({path:'/login'})
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
		top: 20%;
		opacity: 1;
		
	}

</style>