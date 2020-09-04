<template>
  <div>
    <nav-bar>
      <div slot="center">购物商场</div>
    </nav-bar>
    <home-swiper></home-swiper>
    <recommend></recommend>
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
import HomeSwiper from './childComps/homeSwiper'
import Recommend from './childComps/recommend'

export default {
  name: "home",
  data(){
    return{
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend
  }
};
</script>
<style scoped>
.nav-bar{
  background: var(--color-tint);
  color: #fff;
}

</style>