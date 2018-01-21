<template>
	<div class="goods-info-verify">
		<h3>商品确认信息</h3>
		<div class="info-verify-wrap">
			<section class="price-info flex-style">
				<h3>价格信息:</h3>
				<p>
					<span>商品总价:</span>
					<span>￥:128.60</span>
				</p>
				<p>
					<span>运送费:</span>
					<span>￥:10.00</span>
				</p>
				<p class="sub-price">
					<span>订单总价:</span>
					<span>￥:10.00</span>
				</p>
			</section>
			<section class="take-goods-info flex-style">
				<h3>订货信息:</h3>
				<p>
					<span>收货地址:</span>
					<span>四川省 成都市 高新区 锦城大道东段拉德方斯东楼10曾2号</span>
				</p>
				<p>
					<span>收货人:</span>
					<span>温柔以待</span>
				</p>
				<p>
					<span>邮编:</span>
					<span>610000</span>
				</p>
				<p>
					<span>电话:</span>
					<span>15*****1828</span>
				</p>
			</section>
			<section class="add-alter-address">
				<div class="list-group">
					<a href="#" class="list-group-item">
						修改地址
						<i class="font-icon pull-right">&#xe64b;</i>
					</a>
					<a href="#" class="list-group-item">
						新增地址
						<i class="font-icon pull-right">&#xe64b;</i>
					</a>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PayPage",
		props: [],
		data(){
			return {

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import "../styles/goods-info-verify";
</style>
