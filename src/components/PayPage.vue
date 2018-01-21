<template>
	<div class="pay-page" v-if="shopHide">

		<GoodsInfoVerify/>
		<PayWays/>
	</div>
</template>

<script>
	import GoodsInfoVerify from './GoodsInfoVerify'
	import PayWays from './PayWays'
	export default {
		name: "PayPage",
		props: ['shopHide','judgeBack'],
		components:{
			// 商品信息确认组件引用
			GoodsInfoVerify,
			// 支付方式组件引用
			PayWays
		},
		data(){
			return {
				//header
				returnicon: true,
				titles: '分类',
				optionicon: false
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.pay-page{
	width: 100%;
	margin: 0 0 0 0;
	z-index: 10;
	overflow-y:auto;
	overflow-x: hidden;
	height: calc(~"100% - 50px");
	position: fixed;
	left: 0;
	top: 52px;
	bottom: 0;
	background: #fff;
}

</style>
