<template>
	<div>
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" fixed :right-text="count" />
		<div>
			<div class="content" style="margin-top: 60px;">
				<div style="margin: 15px;" v-model="questionItem.question_title">
					<span>(单选题)</span>{{questionItem.question_title}}
				</div>
				<van-radio-group v-model="radio" :disabled="disabled">
				  <van-cell-group>
				    <van-cell :title="item.title" v-for="(item,index) in questionItem.anwserList" :key="index">
				      <van-radio :name="item.value" @click.native="echo(item.value)" />
				    </van-cell>
				  </van-cell-group>
				</van-radio-group>
			</div>
			<hr />
			<div v-show="anwser">
				<div class="istrue true" v-if="success">
					<van-icon name="checked" color="green" />正确
				</div>
				<div class="istrue false" v-else>
					<van-icon name="clear" color="red" />错误
				</div>
				<div class="resovel">
					<h4>解析</h4>
					<p v-model="questionItem.anwser">正确答案：{{questionItem.anwser}}</p>
					<p v-model="questionItem.resovel">{{questionItem.resovel}}</p>
				</div>
				<van-row>
				  <van-col span="8" offset="8">
						<van-button size="small" type="primary" plain @click.native="nextQuestion()">下一题</van-button>
				  </van-col>
				</van-row>
			</div>
		</div>
		<div style="width: 100%;height: 60px;"></div>
	</div>
</template>

<script>
	import { apiMapper } from '../../axios/api.js';
	import { Toast } from 'vant';
	export default{
		data(){
			return{
				radio:'',
				title:'',
				pointId:'',
				anwser:false,
				success:true,
				disabled:false,
				questionItem:'',
				index:0,
				count:'',
				anwserList:[]
			}
		},
		mounted(){
			this.title = this.$route.query.title
			this.pointId = this.$route.query.id
			console.log(this.title)
			this.onload()
		},
		methods:{
			onload(){
				apiMapper.getQuestion({pointId:this.pointId}).then(res=>{
					for (let v of res.data.data) {
						try{
							v.anwserList = eval('('+v.anwser_item+')')
						}catch(e){
							//TODO handle the exception
							console.log(v)
						}
					}
					this.questionList = res.data.data
					this.questionItem = this.questionList[this.index]
					console.log(this.questionList)
					this.count = '1/'+ this.questionList.length
				})
			},
			onClickLeft(){
				this.$router.go(-1)
			},
			echo(e){
				console.log(this.radio,'v-model的数据')
				this.disabled = true
				let correct = '';
				if (e == this.questionItem.anwser) {
					this.anwser = true
					this.success = true
					correct = 1
				}else{
					this.anwser = true
					this.success = false
					correct = 0
				}
				var obj = {};
				obj = {
					userId:localStorage.getItem('userId'),
					questionId:this.questionList[this.index].question_id,
					userAnwser:e,
					correct:correct,
					subjectId:localStorage.getItem('subjectId')
				}
				apiMapper.saveUserQuestion(obj).then(res=>{
					console.log(res)
				})
			},
			nextQuestion(){
				if (this.index == this.questionList.length-1 || this.index > this.questionList.length-1) {
					Toast('没有更多了')
				}else{
					console.log(this.radio,'v-model的数据')
					this.anwser = false
					this.disabled = false
					this.index += 1
					this.questionItem = this.questionList[this.index]
					this.radio = ''
					this.count = this.index+1+'/'+ this.questionList.length
				}
			}
		}
	}
</script>

<style scoped="scoped">
	span{
		color: green;
	}
	.true{
		color: green;
	}
	.false{
		color: red;
	}
	.resovel{
		text-indent: 2em;
	}
	
</style>