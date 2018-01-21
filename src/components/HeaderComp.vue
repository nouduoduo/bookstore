<template>
  <div class="header">
    <ul>
      <li>
        <span @click="$emit('hidePage')" v-if="returnicon" class="a">&lt;</span>
        <span>{{titles}}</span>
        <div v-if="optionicon">
          <i></i>
          <i></i>
          <i></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:["returnicon","titles","optionicon"],
  data () {
    return {
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" >
  @height:50px;
  div{
	  width: 100%;
    text-align: center;
    height: @height;
    background: rgb(40,40,40);
    color: #fff;
    line-height: @height;
    z-index: 1000;
	position: fixed;
	  top: 0;
	  left: 0;
    ul{
      li{
        position: relative;
        div{
          position: absolute;
          display: inline-block;
          right: 6%;
          top:50%;
          transform: translateY(-50%);
          i{
            display:block;
            width: 5px;
            height: 5px;
            border: 1px solid #fff;
          }
          i:nth-child(2){
            margin: 5px 0;
          }
        }
        span.a{
          position: absolute;
          left:6%;
          font: normal normal 25px Consolas,Monaco;
          top:50%;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>
