<template>
    <div id="app">
        <router-view/>
      	<FooterComp/>
  </div>
</template>

<script>
	import FooterComp from './components/FooterComp'
export default {
  name: 'app',
	components:{
		FooterComp
	}
}
</script>

<style lang="less">
  @import './styles/common.less';
</style>
