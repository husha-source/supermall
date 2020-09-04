<template>
  <div class="home-swiper">
    <swiper :banners="banners">
    </swiper>
  </div>
</template>

<script>
import swiper from "components/swiper/swiper";
import { getMultiData } from "network/home";

export default {
  name: "homeswiper",
  data() {
    return {
      banners: []
    }
  },
  components: {
    swiper
  },
  created() {
    getMultiData().then((res) => {
      this.banners = res.data.banner.list;
    });
  },
  methods: {
   
  },
};
</script>
<style scoped>
.home-swiper{
  width: 100%;
  overflow: hidden;
}
</style>