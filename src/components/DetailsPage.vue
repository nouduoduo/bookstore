<template>
<transition name="slide-fade">
  <div class="details fa fa-angle-left" v-if="isShowDetails">
    <section>
      <div>
        <img :src="book.img">
      </div>
      <div>
        <p>
          <span>作者</span>
          <span :title="book.author">{{book.author}}</span>
        </p>
        <p>
          <span>页数</span>
          <span>{{book.page}}</span>
        </p>
        <p>
          <span>书号</span>
          <span>{{book.ISBN}}</span>
        </p>
        <p>
          <span>出版日期</span>
          <span>{{book.day}}</span>
        </p>
        <p>
          <span>售价</span>
          <span>￥{{book.price}}</span>
        </p>
      </div>
      <div>
        <h3>{{book.name}}</h3>
      </div>
      <div>
	  <button type="button" @click="addToCart(book)">加入购物车</button>
		  <router-link :to="{name:'shoppingcart'}" tag="li" >
			  <button class="a" type="button" @click="addToCart(book)">立即购买</button>
		  </router-link>
      </div>
    </section>

    <!--内容概要-->
    <section>
      <div class="abstract">
        <div>
          <span>内容摘要</span>
          <div>
            <p>{{book.describe}}</p>
          </div>
        </div>
      </div>
      <div class="abstract">
        <div>
          <span>内容摘要</span>
          <div>
            <p> {{book.describe}}</p>
          </div>
        </div>
      </div>
      <div class="abstract">
        <div>
          <span>作者简介</span>
          <div>
            <p>       Nicholas C. Zakas自2000年以来一直致力于Web应用程序，重点关注前端开发，并以写作和讲述前沿*实践而闻名。他曾经是雅虎主页的核心前端工程师，在雅虎的五年中不断磨练经验；他也是多本书的作者，其中包括JavaScript面向对象精要（No Starch Press，2014）和JavaScript高级程序设计（Wrox，2012）。
              刘振涛，腾讯前端工程师；infoQ 网站资深译者，负责重点连载专栏《深入浅出ES6》；长期关注Web开发领域新生，尤其是 Ecma* 6；爱好摄影、网球，重度信息癖（Infomania）患者。
            </p>
          </div>
        </div>
      </div>
    </section>
	  <HeaderComp
		  :returnicon="returnicon"
		  :titles="titles"
		  :optionicon="optionicon"
		  @hidePage="closePage"
	  />
  </div>
</transition>
</template>

<script>
	import HeaderComp from './HeaderComp'
export default {
  name: 'DetailsPage',
  props:['isShowDetails','book'],
	components:{HeaderComp},
  data () {
    return {
	 objData:[],
		show:true,
		//header
		returnicon: true,
		titles: '图书详情',
		optionicon: false,
    }
  },
	methods:{
      /*将购车数据存入本地*/
		addToCart(book){
			book.num = 1;
			this.objData.push(book);
			const locaShop = JSON.stringify(this.objData);
			localStorage.setItem('locaShop',locaShop);
		},
		closePage(){
			this.$emit('closeDetailsPage');
			this.$emit('closeDelPage');
		}
	},
	mounted(){
  	this.closePage();
	}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" >
  @import "../styles/DetailsPage.less";
</style>
