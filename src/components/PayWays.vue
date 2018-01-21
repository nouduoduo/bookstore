<template>
	<div class="pay-ways">
		<h3>选择支付方式</h3>
		<div class="list-group">
			<a href="#" class="list-group-item">
				<img src="../assets/we-chat.png" alt="">
				微信支付
				<i class="font-icon pull-right">&#xe64b;</i>
			</a>
			<a href="#" class="list-group-item">
				<img src="../assets/Alipay.png" alt="">
				支付宝
				<i class="font-icon pull-right">&#xe64b;</i>
			</a>
			<a href="#" class="list-group-item">
				<img src="../assets/bank-cark.png" alt="">
				银行卡
				<i class="font-icon pull-right">&#xe64b;</i>
			</a>
			<a href="#" class="list-group-item">
				<img src="../assets/credit-card.png" alt="">
				信用卡
				<i class="font-icon pull-right">&#xe64b;</i>
			</a>
			<a href="#" class="list-group-item">
				<img src="../assets/visa.png" alt="">
				VISA
				<i class="font-icon pull-right">&#xe64b;</i>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PayWays",
		props: [],
		data(){
			return {
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import "../styles/pay-ways";
</style>
