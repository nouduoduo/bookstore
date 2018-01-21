<template>
  <transition name="slide-fade">
    <article v-show="isShowaddress" class="fa fa-angle-left">
		<HeaderComp
			:returnicon="returnicon"
			:titles="titles"
			:optionicon="optionicon"
			@hidePage="closePage"
		/>
      <form action="">
        <div>
          <label>姓名</label>
          <input type="text" placeholder="请填写您的真实姓名">
        </div>
        <div>
          <label>联系电话</label>
          <input type="text" placeholder="请填写我们联系您的电话号码">
        </div>
        <div>
          <label>邮政编码</label>
          <input type="text" placeholder="请填写您所在地区的邮政编码">
        </div>
        <div>
          <select>
            <option>四川省</option>
            <option>广州省</option>
            <option>湖南省</option>
            <option>湖北省</option>
            <option>湖北省</option>
            <option>福建省</option>
          </select>
          <select>
            <option>成都市</option>
            <option>绵阳市</option>
            <option>广元市</option>
            <option>达州市</option>
            <option>西昌市</option>
            <option>攀枝花市</option>
          </select>
          <select>
              <option>高新区</option>
              <option>武侯区</option>
              <option>锦江区</option>
              <option>青羊区</option>
              <option>双流区</option>
              <option>天府新区</option>
          </select>

        </div>
        <div>
          <label>详细地址</label>
          <input type="text" placeholder="请输入详细的街道、楼栋、门牌号" >
        </div>
          <button type="button" class="modify" @click="$emit('modifybtn')">确认地址</button>
      </form>
    <section class="popup" v-if="shows">
      <div>
        <p>地址添加(修改)成功!</p>
        <p @click="$emit('hides')">确定</p>
      </div>
    </section>
    </article>
  </transition>


</template>

<script>
	import HeaderComp from './HeaderComp'
export default {
  name: 'personal',
  props:['isShowaddress','shows','addressLeftSet'],
	components:{HeaderComp},
  data () {
    return {
      msg: '首页',
		//header
		returnicon: true,
		titles: '修改地址',
		optionicon: false,
		headerHidden:true,
    }
  },
  methods:{
    modifybtn:function () {
      this.shows = !this.shows;
    },
	closePage(){
		this.$emit('closeAddressPage');
	}
  },
	mounted() {
		this.closePage()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../styles/ReceivingAddress.less";
</style>
