<template>
  <div id="tab-bar">
    <tabbar-item path="/home">
      <div slot="img-active"><img src="~assets/tabbar/home_active.svg"/></div>
      <div slot="img"><img src="~assets/tabbar/home.svg"/></div>
      <div slot="text">首页</div>
    </tabbar-item>
    <tabbar-item path="/classify">
      <div slot="img-active"><img src="~assets/tabbar/classify_active.svg"/></div>
      <div slot="img"><img src="~assets/tabbar/classify.svg"/></div>
      <div slot="text">分类</div>
    </tabbar-item>
    <tabbar-item path="/shopcart">
      <div slot="img-active"><img src="~assets/tabbar/shopcart_active.svg"/></div>
      <div slot="img"><img src="~assets/tabbar/shopcart.svg"/></div>
      <div slot="text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile">
      <div slot="img-active"><img src="~assets/tabbar/profile_active.svg"/></div>
      <div slot="img"><img src="~assets/tabbar/profile.svg"/></div>
      <div slot="text">我的</div>
    </tabbar-item>
  </div>
</template>

<script>
import tabbarItem from './tabbarItem'
export default {
  name: 'tabbar',
  data(){
    return{
      path: ''
    }
  },
  components: {
    tabbarItem
  },
  methods: {
  },
};
</script>
<style scoped>
#tab-bar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0 -2px 5px #ddd;
  font-size: 12px;
}
</style>