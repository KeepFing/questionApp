<template>
	<div>
		<van-nav-bar title="首页" fixed />
		<div class="menu" style="margin-top: 60px;">
			<van-row style="text-align: center;">
			  	<van-col span="8" class="item" @click.native="checkItem(item.subject_remark,item.subject_id)" v-for="(item,index) in subjectList" :key="index">
			  		<img :src="item.subject_img" style="width: 80%;height: 80%;" />
			  		<p>{{item.subject_name}}</p>
			  	</van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	import { apiMapper } from '../../axios/api.js'
	export default{
		data(){
			return{
				subjectList:[]
			}
		},
		mounted(){
			this.onLoad()
		},
		methods:{
			onLoad(){
				apiMapper.getSubjects().then(res=>{
					this.subjectList = res.data.data
				})
			},
			checkItem(item,id){
				this.$router.push({path:'/classList',query:{name:item,id:id}})
				localStorage.setItem('subjectId',id)
				console.log(item)
			}
		}
	}
</script>

<style scoped="scoped">
	.item{
		border-radius: 5px;
		height: auto;
	}
	.item p{
		font-family: "微软雅黑";
		font-size: 16px;
		color: lightseagreen;
	}
</style>