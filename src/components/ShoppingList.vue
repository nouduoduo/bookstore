<template>
	<ul>
		<li v-for="(bookslist,index) in objdatashopping">
			<div class="dots" v-if="dotsShow">
				<input name="bookCkd" v-model="bookslist.selection" type="checkbox" v-if="electsShow" @change="$emit('electSplices',index,bookslist.selection)">

			</div>

			<div class="img-show" :class="{edting: !edits}">
				<img :src=bookslist.img>
			</div>
			<div class="content-details">
				<h3>{{bookslist.name

					}}</h3>
				<p>{{bookslist.author}}</p>
				<p class="price">￥ {{bookslist.price}}</p>
			</div>
			<div class="regulation" v-if="edits">
				<span @click="bookslist.num  <= 1 ? bookslist.num=1 : bookslist.num -= 1 ">-</span>
				<span>{{bookslist.num}}</span>
				<span @click="bookslist.num += 1">+</span>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'personal',
		props:['dotsShow','electsShow','electsHide','edits','objdatashopping'],
		data () {
			return {
				msg: '首页',
				checkedBook: []
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
