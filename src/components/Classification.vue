<template>
    <div class="classification">
        <!--搜索框-->
        <section>
            <label>
              <span class="icon"></span>
              <input type="search" placeholder="请输入您想查找的图书名称进行搜索" v-on:keyup="bookSearch(val)" v-model="val"/>
            </label>
        </section>
        <section>
          <ul>
            <li v-if="searchLength">
              <span>-----------对不起，您搜索的内容不存在-----------</span>
            </li>
            <li v-for="(book,index) in bookFilter" @click="detailsBox(index)">
              <div>
                <img :src="book.img">
              </div>
              <div>
                <h3 :title="book.name">{{book.name}}</h3>
                <p>
                  <span :title="book.author">{{book.author}}</span>
                  <i></i>
                </p>
                <p>￥ {{book.price}}</p>
              </div>
            </li>
            <li class="more" @click="loadMore" v-if="moreDisplay">
              <span>加载更多</span>
              <span></span>
            </li>
          </ul>
        </section>
      <detailsPage
        :isShowDetails="showDetails"
        :book="detailsPage"
		@closeDetailsPage="closeDetailsPage"
      />
		<HeaderComp
			:returnicon="returnicon"
			:titles="titles"
			:optionicon="optionicon"
		/>
    </div>
</template>

<script>
import HeaderComp from './HeaderComp'
import detailsPage from './DetailsPage'
export default {
  name: 'Classification',
  components: {
	  HeaderComp,
    detailsPage,
  },
  data () {
    return {
      //图书详情页的控制与隐藏
      showDetails: false,
      //图书列表
      bookList: [],
      //搜索存值
      val: '',
      searchBookList: null,
      //加载更多计数器和显示
      num: 4,
      moreDisplay: true,
      //详情数据
      detailsPage: [],
		//header
		returnicon: false,
		titles: '分类',
		optionicon: false,
    }
  },

  mounted(){
    //数据调用
    this.dataloading();
    console.log(this.headDisplay)
  },

  methods: {
    /*获取数据*/
    dataloading(){
      axios.get('../../static/dataA.json')
        .then((res) => {
          this.bookList = res.data;
        })
        .catch(function () {
          console.error('数据请求错误');
        });
    },

    /*图书搜索*/
    bookSearch(val){
      const value = val.trim();
      //如果输入的内容为空，就让搜索的数组等于原数组
      if (value === "") {
        this.moreDisplay = true;
        return this.searchBookList = this.bookList;
      }
      //如果输入的内容不为空，就让原数组等于原数组
      else {
        this.moreDisplay = false;
        this.searchBookList = this.bookList.filter((item) => {
          const reg = new RegExp(value, 'gi');
          return reg.test(item.name) || reg.test(item.author)
        })
      }
    },
    /*点击页面切换*/
    detailsBox(index){
      this.detailsPage = this.bookFilter[index];
      this.showDetails = true;
    },
    hide(){
      this.detailsPage = [];
      this.showDetails = false;
    },
	  closeDetailsPage(){
    	this.showDetails = false;
	  },
    /*点击数据加载更多*/
    loadMore(){
      this.num += 4
    },
  },
  computed: {
    /*判断搜索框是否有内容*/
    bookFilter(){
      if (!this.searchBookList) {
        this.moreDisplay = true;
        return (this.bookList).slice(0, this.num)
      } else if (this.searchBookList.length) {
        this.moreDisplay = false;
        return this.searchBookList
      }
    },

    /*判断搜索内容是否存在*/
    searchLength(){
      if (this.bookFilter) {
        return false
      } else {
        return true
      }
    },

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" >
  @import "../styles/classification.less";
</style>
