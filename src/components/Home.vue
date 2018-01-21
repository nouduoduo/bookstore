<template>
 <div class="main">
	 	<HeaderComp
			:returnicon="returnicon"
			:titles="titles"
	 		:optionicon="optionicon"
		/>
		<SlideShow
			:slide-img="slideImgs"
		/>
		<IndexReco
			:new-book-list="recoBook"
			@enterPage="enterPage"
		/>
		<BookDetailsPage
			:book-details-info="bookDetails"
			:is-details="isDetails"
			@hiddenPage="hiddenPage"
			@addOneBook="addOneBook"
			:bookCount="bookCount"
			@subtractOneBook="subtractOneBook"
			@addToCart="addToCart"
			@toDetailsPage="toDetailsPage"
		 />
	 <DetailsPage
		 :book="detailsPageObj"
		 :leftSetting="leftSetting"
		 :isShowDetails="isShowDetails"
		 @closeDelPage="closeDelPage"
	 />
	</div>
</template>

<script src="../scripts/main-container.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	div.main {
		margin: 50px 0 0 0;
		z-index: 10;
		padding: 0;
		overflow-y:auto;
		overflow-x: hidden;
		height: calc(~"100% - 100px");
	}
</style>
