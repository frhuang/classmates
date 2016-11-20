<template id="home">
  <div class="home">
    <pre-header title="找同学">
      <router-link to="/filter" slot="right">
        <pre-button icon="more"></pre-button>
      </router-link>
    </pre-header>
    <cell title="测试1"  to="/filter" is-link></cell>
    <cell title="测试2" value="广东广州故事的拿到手点就开始叫" is-link></cell>
    <cell title="测试3" value="fds" is-link></cell>
    <cell title="测试4" value="广东广州" is-link></cell>
  </div>
</template>
<script>
import Cell from '../uicomponents/Cell';
import PreHeader from '../uicomponents/Header';
import PreButton from '../uicomponents/Button';
export default {
  components: {
    Cell,
    PreHeader,
    PreButton
  }
}
</script>
<style lang="scss">
  .header{
    font-size: 75px
  }
</style>
