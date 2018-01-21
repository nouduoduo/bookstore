<template>
	<footer>
		<nav>
			<ul>
				<router-link :to="{name:'home'}" tag="li" exact >
					<p class="fa fa-home"></p>
				</router-link>
				<router-link :to="{name:'classification'}" tag="li" >
					<p class="fa fa-sitemap"></p>
				</router-link>
				<router-link :to="{name:'shoppingcart'}" tag="li">
					<p class="fa fa-shopping-cart"></p>
				</router-link>
				<router-link :to="{name:'personal'}" tag="li">
					<p class="fa fa-user"></p>
				</router-link>
			</ul>
		</nav>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		props:[''],
		data () {
			return {

			}
		}
	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" >
	@import "../styles/footer-comp.less";
</style>
