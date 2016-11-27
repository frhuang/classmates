<template>
  <div class="myinfo">
    <mt-header title="个人信息">
      <a slot="left" @click="routerBack">
        <mt-button class="common-back"></mt-button>
      </a>
      <button class="filter-btn" slot="right" title="我要加入">我要加入</button>
    </mt-header>
    <mt-cell title="头像" is-link></mt-cell>
    <mt-cell title="真实姓名" is-link></mt-cell>
    <mt-cell title="性别" is-link></mt-cell>
    <mt-cell title="籍贯" is-link></mt-cell>
    <mt-cell title="学校" is-link></mt-cell>
    <mt-cell title="专业" is-link></mt-cell>
    <mt-cell title="入学年份" is-link></mt-cell>
    <mt-cell title="兴趣爱好" is-link></mt-cell>
    <mt-cell title="微信二维码" is-link></mt-cell>
    <mt-cell title="实名认证学生证" is-link></mt-cell>
    <mt-cell title="学生职位" is-link></mt-cell>
  </div>
</template>

<script type="text/babel">
  export default {
    methods: {
      routerBack() {
        this.$router.go(-1);
      }
    }
  }
</script>
