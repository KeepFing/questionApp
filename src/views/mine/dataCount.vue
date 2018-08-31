<template>
	<div>
		<van-nav-bar title="数据统计" left-arrow @click-left="onClickLeft" fixed />
		<van-tabs @change="change($event)" style="margin-top: 60px;">
		  <van-tab v-for="(item,index) in subjectList" :key="index" :title="item.name">
		  	<p style="margin: 15px 10px;">{{item.name}}数据统计</p>
		  </van-tab>
		</van-tabs>
		<div id="chart"></div>
	</div>
</template>

<script>
	const echarts = require('echarts');
	export default{
		data(){
			return{
				subjectList:[
					{name:'总览',value:'0'},
					{name:'HTML',value:'1'},{name:'CSS',value:'2'},{name:'JavaScript',value:'3'},
					{name:'PHP',value:'4'},{name:'NodeJS',value:'5'},{name:'Vue.JS',value:'6'},
					{name:'Python',value:'7'},{name:'Java',value:'8'}]
}
},
mounted() {
		this.payChart(0)
	},
	methods: {
		onClickLeft(){
			this.$router.go(-1)
		},
		change(e){
			this.payChart(e)
		},
		payChart(value) {
			var myChart = echarts.init(document.getElementById('chart'));
			var option = {
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					data: ['HTML', 'CSS', 'JavaScript', 'PHP', 'NodeJS' , 'Vue.JS', 'Python', 'Java']
				},
				series: [{
					name: '语言科目',
					type: 'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '22',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
							value: 335,
							name: 'HTML'
						},
						{
							value: 310,
							name: 'CSS'
						},
						{
							value: 234,
							name: 'JavaScript'
						},
						{
							value: 135,
							name: 'PHP'
						},
						{
							value: 1548,
							name: 'NodeJS'
						},
						{
							value: 234,
							name: 'Vue.JS'
						},
						{
							value: 135,
							name: 'Python'
						},
						{
							value: 1548,
							name: 'Java'
						}
					]
				}]
			};
			var option1 = {
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					data: ['正确', '错误']
				},
				series: [{
					name: '',
					type: 'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '22',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
							value: 140,
							name: '正确'
						},
						{
							value: 53,
							name: '错误'
						}
					]
				}]
			};
			if (value == 0) {
				myChart.setOption(option);
			}else{
				myChart.setOption(option1);
			}
		}
	}
}</script>

<style scoped="scoped">
	#chart{
		width: 80%;
		min-height: 200px;
		margin: 0px 10%;
	}
</style>