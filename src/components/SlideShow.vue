<template>
    <div class="slide-show">
		<div class="swiper-container" id="slide-img">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="../assets/slide-01.png" alt="">
				</div>
				<div class="swiper-slide">
					<img src="../assets/slide-02.png" alt="">
				</div>
				<div class="swiper-slide">
					<img src="../assets/slide-03.png" alt="">
				</div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>
		<div class="swiper-container" id="slide-text">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<i class="font-icon">&#xe640;</i>
					双12全场图书低至1折，更有隐藏神秘惊喜
				</div>
				<div class="swiper-slide">
					<i class="font-icon">&#xe640;</i>
					好书提前屯，等你来抢购！
				</div>
				<div class="swiper-slide">
					<i class="font-icon">&#xe640;</i>
					“鱼叔”最新短片小说集，最新上市，不可错过！
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	import Swiper from 'swiper'

	export default {
		name: "SlideShow",
		methods:{
			runSwiper(){
				var swiperImg = new Swiper('#slide-img', {
					spaceBetween: 0,
					centeredSlides: true,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false,
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					}
				});
				var swiperText = new Swiper('#slide-text', {
					direction : 'vertical',
					spaceBetween: 0,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false,
					}
				});
			}
		},
		mounted(){
			this.runSwiper();
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import "../styles/slide-show";
</style>
