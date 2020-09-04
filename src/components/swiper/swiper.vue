<template>
  <div id="swiper">
    <div class="swiper" @mouseover="stopTimer" @mouseout="startTimer">
      <!-- 加载图片区域 -->
      <swiper-item v-for="( item , index ) in banners" :key="item.acm" v-show="isActive(index)">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" />
        </a>
      </swiper-item>
      <!-- 左右按钮 -->
      <div class="left prev" @click="prevBtn"> &lt; </div>
      <div class="left next" @click="nextBtn"> &gt;</div>
      <!-- 下方原点 -->
      <ul class="indicator" v-if="banners.length > 1" :style="{'margin-left' : -banners.length*14/2+'px'}">
        <li v-for="( item , index ) in banners" :key="index" :class="{active : isActive(index)}" @click="getChange(index)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import SwiperItem from "components/swiper/swiperItem";
export default {
  name: 'swiper',
  data() {
    return {
      currentIndex : 0,//当前轮播索引
      interval : 3000,//轮播定时器时间间隔
    }
  },
  props :{
    banners : {
      type : Array,
    }
  },
  components: {
    SwiperItem
  },
  mounted: function(){
    setTimeout(() => {
      this.startTimer()
    },100)
  },
  methods: {
    // 判断索引显示
    isActive(index) {
      return index == this.currentIndex;
    },
    // 上一页
    prevBtn(){
      this.currentIndex--;
      if(this.currentIndex == -1) {
        this.currentIndex = this.banners.length - 1;
      }
    },
    // 下一页
    nextBtn() {
      this.currentIndex++;
      if(this.currentIndex == this.banners.length){
        this.currentIndex = 0;
      }
    },
    //定时器
    startTimer(){
      this.palyTimer = window.setInterval(() => {
        this.nextBtn()
      },this.interval)
    },
    stopTimer(){
      window.clearInterval(this.palyTimer)
    },
    getChange(index){
      this.currentIndex = index;
    }

  }
};
</script>
<style scoped>
#swiper-temp{
  width: 100%;
  position: relative;
  overflow: hidden;
}
.swiper{
  position: relative;
  display: flex;
}
.indicator{
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 999;
}
.indicator li{
  float: left;
  width: 10px;
  height: 10px;
  margin:0 2px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.6);
}
.indicator li.active{
  background-color: rgba(248, 23, 128, 0.6);
}
.prev,
.next{
  position: absolute;
  z-index: 99;
  width: 30px;
  height: 30px;
  line-height: 30px;
  top: 50%;
  margin-top:-15px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.6);
  color: #fff;
  font-weight: bold;
}
.prev{
  left: 10px;
}
.next{
  right:10px
}
</style>