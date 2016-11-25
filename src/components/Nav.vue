<template id="nav">
  <div class="nav">
    <mt-tabbar v-model="selected" fixed>
      <pre-tab-item id="找同学" to="/">找同学</pre-tab-item>
      <!-- <pre-tab-item id="加入" class="nav-join">加入</pre-tab-item> -->
      <pre-tab-item id="我的" to="/my">我的</pre-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/babel">
  import PreTabItem from '../uicomponents/TabItem';
  export default {
    data () {
      return {
        selected: "找同学"
      }
    },
    components: {
      PreTabItem
    }
  }
</script>

<style lang="scss" scope>
  @import '../assets/sass/components/nav.scss';
</style>
