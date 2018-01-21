<template>
	<div class="shopping">
		<HeaderComp
			:returnicon="returnicon"
			:titles="titles"
			:optionicon="optionicon"
		/>
		<h2 v-if="edits" @click="editor">编辑</h2>
		<div v-if="cancel" class="deleting">
			<h2 @click="cancels">取消</h2>
			<h2 @click="deleteSelected">删除选中</h2>
		</div>

		<section>
			<shoppingList
				:dotsShow="dotsShow"
				:electsShow="electsShow"
				:edits="edits"
				@electSplices="electSplices"
				:objdatashopping="objdatashopping"

			>
			</shoppingList>
					</section>
						<button type="button" class="btn color-green" @click="payShopping">前往支付</button>

							<!--支付组件-->
							<PayPage :shopHide="shopHide"></PayPage>
	</div>
</template>

<script>
	import shoppingList from './ShoppingList'
	import PayPage from './PayPage'
	import HeaderComp from './HeaderComp'

	export default {
		name: 'shopping',
		components:{PayPage,shoppingList,HeaderComp},
		data () {
			return {
				msg: '购物车',
				/*删除选中显示与隐藏*/
				cancel:false,
				/*编辑的显示与隐藏*/
				edits:true,
				/*选中单品的显示与隐藏*/
				dotsShow:false,
				/*选中图标显示与隐藏*/
				electsShow:false,
//				numbers: 2,
				objdatashopping:null,
				arr:[],
				arrNew:[],
				//支付页面显示器
				shopHide:false,
				//header
				returnicon: false,
				titles: '购物车',
				optionicon: false,
			}
		},
		methods:{
			/*点击编辑*/
			editor(){
				this.cancel = true;
				this.edits = false;
				this.dotsShow = true;
				this.electsShow = true;

			},
			/*点击取消*/
			cancels(){
				this.cancel = false;
				this.edits = true;
				this.dotsShow = false
			},
			/*点击选中删除*/
			deleteSelected(){
				var  conunt = this.arr.length;
				var idxs = 0;
				while (conunt){
					if(this.objdatashopping[idxs].selection ){
						this.objdatashopping.splice(idxs,1);
						conunt--
					}else {
						idxs++
					}
				}
			},
			/*点击选中单品*/
			electSplices(idx,val){
				this.arr = this.objdatashopping.filter((bookslist) =>{
					return bookslist.selection
				});
			},
			getData(){
				const objdatashop = JSON.parse(localStorage.getItem('locaShop'));
				if(objdatashop.length != 0){
					this.objdatashopping = objdatashop;
				}else {
					return;
				}
			},
			//前往支付
			payShopping(){
				this.shopHide = true;
			}
		},
		mounted(){
			this.getData();
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import "../styles/shopping.less";
</style>
