<template>
  <div class="recommend">
    <div class="recom-item" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image"/>
      </a>
      <a :href="item.link">{{item.title}}</a>
    </div>
  </div>
</template>

<script>
import { getMultiData } from "network/home";
export default {
  name: 'recommend',
  data() {
    return{
      recommends : []
    }
  },
  components: {},
  created() {
    getMultiData().then((res)=> {
      this.recommends = res.data.recommend.list;
    })
  }
};
</script>
<style scoped>
.recommend{
  width: 100%;
  display: flex;
  font-size: 12px;
  margin-top: 5px;
}
.recom-item{
  flex: 1;
}
.recom-item a{
  display: block;
}
.recom-item img{
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
</style>