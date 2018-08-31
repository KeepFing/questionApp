<template>
	<div>
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" fixed />
		<van-tabs v-model="active" swipeable style="margin-top: 60px;">
			<van-tab v-for="(item,index) in subClass" :key="index" :title="item.name">
				<div class="classList" v-if="item.value == 0">
					<van-cell-group v-for="(item,index) in baseClass" :key="index">
					  	<van-cell :title="item.point_name" is-link @click.native="question(item.point_id)" />
					</van-cell-group>
				</div>
				<div class="classList" v-else-if="item.value == 1">
					<van-cell-group v-for="(item,index) in advanceClass" :key="index">
					  	<van-cell :title="item.point_name" is-link @click.native="question(item.point_id)" />
					</van-cell-group>
				</div>
				<div class="classList" v-else>
					<van-cell-group v-for="(item,index) in allClass" :key="index">
					  	<van-cell :title="item.point_name" is-link @click.native="question(item.point_id)" />
					</van-cell-group>
				</div>
			</van-tab>
		</van-tabs>
		
	</div>
</template>

<script>
	import { apiMapper } from '../../axios/api.js';
	import { Toast } from 'vant';
	export default{
		data(){
			return{
				active:0,
				title:'',
				subjectId:'',
				subClass:[{name:'基础',value:0},{name:'进阶',value:1},{name:'综合',value:2}],
				baseClass:[],
				advanceClass:[],
				allClass:[]
			}
		},
		mounted(){
			this.title = this.$route.query.name
			this.subjectId = this.$route.query.id
			this.onLoad()
		},
		methods:{
			onLoad(){
				apiMapper.getPoints({subjectId:this.subjectId}).then(res=>{
					this.baseClass = []
					this.advanceClass = []
					this.allClass = []
					if (res.data.data.length != 0) {
						for (let v of res.data.data) {
							if (v.type == 0) {
								this.baseClass.push(v)
							}else if (v.type == 1) {
								this.advanceClass.push(v)
							}else{
								this.allClass.push(v)
							}
						}
					}else{
						Toast('暂无相关数据~~~');
					}
				})
			},
			onClickLeft(){
				this.$router.go(-1)
			},
			question(id){
				console.log(id)
				this.$router.push({path:'/question',query:{id:id,title:this.title}})
			}
		}
	}
</script>

<style>
</style>