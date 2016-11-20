<template>
  <div class="filter">
    <pre-header title="筛选">
      <router-link to="/" slot="left">
        <pre-button icon="back"></pre-button>
      </router-link>
    </pre-header>
    <pre-cell title="籍贯" to="/nativeplace" value="广东广州" is-link></pre-cell>
    <pre-cell title="学校" to="/filter" value="不限" is-link></pre-cell>
    <pre-cell title="专业" to="/filter" value="不限" is-link></pre-cell>
    <pre-cell title="入学年份" to="/filter" value="不限" is-link></pre-cell>
    <pre-cell title="兴趣爱好" to="/filter" value="不限" is-link></pre-cell>
    <pre-cell title="性别">
      <div class="pre-cell-sex">
        <pre-button class="sex-male">男</pre-button>
        <pre-button class="sex-female">女</pre-button>
      </div>
    </pre-cell>
  </div>
</template>

<script type="text/babel">
  import PreCell from '../uicomponents/Cell';
  import PreHeader from '../uicomponents/Header';
  import PreButton from '../uicomponents/Button';
  export default {
    components: {
      PreCell,
      PreHeader,
      PreButton
    }
  }
</script>

<style lang="scss">
  .pre-cell-sex {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30%;
    margin-left: -15%;
    margin-top: -18px;
    display: flex;
    .sex-male, .sex-female {
      flex: 1;
      margin-left: 20px;
      border: 1px solid #c8c8cd;
    }
  }
</style>
