<template>
	<div>
		<van-nav-bar title="个人中心" fixed />
		<div class='header'>
			<div class="warp">
				<img src="../../../static/img/user-bg.png" style="width: 100%;height: 100%;" />
				<div class='headimg'>
					<img src="../../../build/logo.png" style="width: 100%;height: 100%;" />
				</div>
				<p class='name'>{{name}}</p>
				<p class='phone' bindtap='changePhoen'>{{mobile}}</p>
			</div>
		</div>
		<br />
		<van-cell-group>
		  <van-cell title="数据统计" is-link value="" @click.native="dataCount()" />
		</van-cell-group>
		<br />
		<van-row>
		  <van-col span="8" offset="8">
				<van-button size="small" type="primary" plain style="width: 100%;" @click.native="logout()">退出登录</van-button>
		  </van-col>
		</van-row>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				name:'wangwen',
				mobile:'18780073432'
			}
		},
		mounted(){
			
		},
		methods:{
			dataCount(){
				this.$router.push({path:'/dataCount'})
			},
			logout(){
				localStorage.removeItem('userId')
				this.$router.push({path:'/login'})
			}
		}
	}
</script>

<style>
	.header{
  width: 100%;
  height: 180px;
  margin-top: 30px;
}
.warp {
    height: 100%;
    width: 100%;
    position: relative;
}
.headimg{
  width: 60px;
  height: 60px;
  position: absolute;
  top: 30%;
  left: 10%;
  border-radius: 50%;
}
.warp p {
    color: #fff;
    position: absolute;
    left: 30%;
}
.warp .name {
    top: 25%;
}
.warp .phone {
    top: 40%;
}
</style>