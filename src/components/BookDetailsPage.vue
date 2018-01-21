<template>
	<div class="mask-details" v-if="isDetails">
		<div class="book-details-page">
			<div class="delete-icon" @click="$emit('hiddenPage')">
				<i class="font-icon">&#xe61f;</i>
			</div>
			<div class="content">
				<div class="top-part">
					<img :src="bookDetailsInfo.img" alt="">
					<div class="bookInfo">
						<p>
							<span>作者</span>
							<span>{{bookDetailsInfo.author}}</span>
						</p>
						<p>
							<span>页数</span>
							<span>{{bookDetailsInfo.page}}</span>
						</p>
						<p>
							<span>书号</span>
							<span>{{bookDetailsInfo.ISBN}}</span>
						</p>
						<p>
							<span>出版日期</span>
							<span>{{bookDetailsInfo.day}}</span>
						</p>
						<span id="details-item" @click="$emit('toDetailsPage')">
							<span>详情</span>
							<i class="font-icon">&#xe616;</i>
						</span>
					</div>
				</div>
				<div class="middle-content">
					<p class="book-name">{{bookDetailsInfo.name}}</p>
					<p class="book-describe">{{bookDetailsInfo.describe}}</p>
				</div>
			</div>
			<div class="price-num">
				<p class="book-price">￥:{{(bookDetailsInfo.price * bookCount).toFixed(2)}}</p>
				<p class="book-num">
					<span @click="$emit('subtractOneBook')">-</span>
					<span>{{bookCount}}本</span>
					<span @click="$emit('addOneBook')">+</span>
				</p>
			</div>
			<div class="shop-btn">
				<button type="button" class="btn btn-primary" @click="$emit('addToCart',bookDetailsInfo)">加入购物车</button>
				<router-link :to="{name:'shoppingcart'}" tag="span"><button type="button" class="btn btn-success pull-right" @click="$emit('addToCart',bookDetailsInfo)">立即购买</button></router-link>

			</div>
		</div>
	</div>
</template>
<!--<button type="button" class="btn btn-success pull-right" @click="$emit('addToCart',bookDetailsInfo)">立即购买</button>-->
<script>
	export default {
		name: "BookDetailsPage",
		props: ['bookDetailsInfo','isDetails','bookCount'],
		data(){
			return {
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import '../styles/book-details-page';
</style>
