<template>
	<div class="indexReco">
		<div v-for="book in newBookList" :key="book.id">
			<h3>{{book.topTitle}}</h3>
			<ul>
				<li v-for="(bookInfo,index) in book.bookList" :key="bookInfo.id" @click="$emit('enterPage',bookInfo)">
					<img :src="bookInfo.img" alt="">
					<p class="book-name">{{bookInfo.name}}</p>
					<p class="book-price">￥：{{bookInfo.price}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "indexReco",
		props: ['newBookList'],
		data(){
			return {
			}
		},
		methods: {
			enterDetailsPage(idx) {
				alert(idx);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import "../styles/index-reco";
</style>
