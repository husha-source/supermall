<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
};
</script>
<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
}
.nav-bar .left{
  width: 80px;
}
.nav-bar .center{
  flex: 1;
}
.nav-bar .right{
  width: 80px;
}
</style>