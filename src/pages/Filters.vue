<template>
  <div class="filter">
    <mt-header title="筛选">
      <router-link to="/" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <mt-cell title="籍贯" to="/filter/nativeplace" value="广东广州" is-link></mt-cell>
    <mt-cell title="学校" to="/filter/school" value="不限" is-link></mt-cell>
    <mt-cell title="专业" to="/filter/profession" value="不限" is-link></mt-cell>
    <mt-cell title="入学年份" to="/filter/startyear" value="不限" is-link></mt-cell>
    <mt-cell title="兴趣爱好" to="/filter/interest" value="不限" is-link></mt-cell>
    <mt-cell title="性别">
      <div class="pre-cell-sex">
        <mt-button class="sex-male">男</mt-button>
        <mt-button class="sex-female">女</mt-button>
      </div>
    </mt-cell>
  </div>
</template>

<script type="text/babel">
  export default {

  }
</script>

<style lang="scss">
  @import '../assets/sass/filter.scss';
</style>
