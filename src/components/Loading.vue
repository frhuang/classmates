<template>
  <div class="loading-overlay">
    <div class="loading-wrapper">
      <div class="loading-spinner"></div>
      <span class="loading-text">加载中...</span>
    </div>
    <div class="loading-mask" @touchmove.stop.prevent></div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'loading',
    data() {
      return {
        visible: false
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/sass/components/loading.scss";
</style>
