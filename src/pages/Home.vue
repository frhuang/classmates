<template id="home">
  <div class="home">
    <cell title="测试" value="我是中间" to="/filter" is-link></cell>
    <cell title="测试"></cell>
    <cell title="测试"></cell>
    <cell title="测试"></cell>
  </div>
</template>
<script>
import Cell from '../uicomponents/Cell';
export default {
  components: {
    Cell
  }
}
</script>
<style lang="scss">
  .header{
    font-size: 75px
  }
</style>
