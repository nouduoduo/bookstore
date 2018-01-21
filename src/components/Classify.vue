<template>
  <article>
    <h1>
      <span class="fa fa-angle-left"></span>
      结算中心
    </h1>
   <section>
     <h2>商品信息确认</h2>
     <div></div>
   </section>
    <section>
      <h2>选择支付方式</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'personal',
  data () {
    return {
      msg: '分类'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../styles/settlementCenter.less";
</style>
