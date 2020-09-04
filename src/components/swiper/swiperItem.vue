<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'slide',
  components: {},
};
</script>
<style scoped>
.slide{
  width: 100%;
  flex-shrink: 0;
  z-index: 2;
}

.slide{
  animation: hideIndex 2s ease;
}
.slide img{
  width: 100%;
}
@keyframes hideIndex{
	0%{ opacity: 0;  }
	100%{opacity: 1; }
}
</style>