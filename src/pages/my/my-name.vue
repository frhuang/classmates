<template>
  <div class="my-name">
    <mt-header :title="title">
      <my-back slot="left"></my-back>
      <button class="filter-btn" slot="right" title="保存" @click="confirm">保存</button>
    </mt-header>
    <div class="textwrapper"><textarea class="textarea" :placeholder="placeholder"></textarea></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '真实姓名',
      placeholder: '',
      id: 0
    }
  },
  created() {
    if(this.$route.params.title === 'name') {
      this.title = '真实姓名';
      this.placeholder = '请填写您的真实姓名';
      this.id = 1;
    }else if(this.$route.params.title === 'jobs') {
      this.title = '学生职位';
      this.placeholder = '填写目前担任的学生干部职务，如学生会、团委、社团协会、班干部等等';
      this.id = 2;
    }
  },
  methods: {
    confirm() {

    }
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/pages/my/myname.scss";
</style>
