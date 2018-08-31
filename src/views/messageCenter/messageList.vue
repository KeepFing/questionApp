<template>
	<div>
		<van-nav-bar title="系统消息" fixed />
		<div class="msgList" v-for="(item,index) in 10">
			<div class="msgItem">
				<van-row>
				  <van-col span="11" offset="1">
				  	<p style="text-align: left;">系统发来消息</p>
				  </van-col>
				  <van-col span="11">
				  	<p style="text-align: right;margin-right: 5px;">2018-08-20</p>
				  </van-col>
				</van-row>
				<hr />
				<van-row>
				  <van-col span="22" offset="1" style="text-indent: 2em;">
				  	<span>目前五六点项目指派给开发人员为激活状态的bug未评审的只有1个bug了，所有今天17：30的bug评审取消，请大家知晓，谢谢。</span>
				  </van-col>
				</van-row>
			</div>
		</div>
		<div style="width: 100%;height: 60px;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped">
	.container {
		padding: 0 0.5rem;
	}
	.msgList{
		width: 90%;
		margin: 60px 5%;
	}
	.msgItem{
		width: 100%;
		height: auto;
		border: 1px solid gainsboro;
		border-radius: 5px;
		box-shadow: 0 3px 0 gray;
		padding: 5px 0%;
	}
	p{
		font-size: 12px;
		color: grey;
		margin: 0px;
	}
</style>