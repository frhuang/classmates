<template id="nav">
  <div class="nav">
    <mt-tabbar  v-model="selected" fixed>
      <mt-tab-item id="找同学">找同学</mt-tab-item>
      <mt-tab-item id="加入" class="nav-join">加入</mt-tab-item>
      <mt-tab-item id="我的">我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        selected: "找同学"
      }
    }
  }
</script>

<style lang="scss" scope>
  @import '../assets/sass/components/nav.scss';
</style>
