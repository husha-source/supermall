<template>
  <div class="tabbar-item">
    <div class="tabbar-img-active" v-if="isActive">
      <slot name="img-active"></slot>
    </div>
    <div class="tabbar-img" v-else>
      <slot name="img"></slot>
    </div>
    <div @click="tabbarClick" :class="{active:isActive}"> 
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar-item",
  data() {
    return {};
  },
  props: {
    path: String,
  },
  components: {},
  methods: {
    tabbarClick() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
  }
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin: 3px 0 0 0;
}
.tabbar-item .active {
  color: var(--color-high-text);
}
</style>