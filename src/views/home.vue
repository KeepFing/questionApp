<template>
	<div>

		<van-tabbar v-model="active">
			<van-tabbar-item @click="go(item.url)" :icon="item.icon" v-for="(item,index) in tabberList" :key="index">
				{{item.name}}
			</van-tabbar-item>
		</van-tabbar>

		<router-view>
		</router-view>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				tabberList: [{
					name: '首页',
					icon: 'wap-home',
					url:'/'
				}, {
					name: '消息',
					icon: 'chat',
					url:'/messageList'
				}, {
					name: '我的',
					icon: 'contact',
					url:'/userCenter'
				}]
			}
		},
		mounted(){
			if (!localStorage.getItem('userId')) {
				this.$router.push({path:'/login'})
			}
		},
		methods:{
			go(url){
				this.$router.push({path:url})
			}
		}
	}
</script>

<style scoped="scoped">

</style>