<template>
  <div class="nav">
    <my-navbar v-model="selected" fixed>
      <my-nav-item id="找同学" @click.native="homeRouter">找同学</my-nav-item>
      <my-nav-item id="加入" @click.native="joinTo">加入</my-nav-item>
      <my-nav-item id="我的" @click.native="meRouter">我的</my-nav-item>
    </my-navbar>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        selected: "找同学"
      }
    },
    methods: {
      joinTo() {
        this.$router.push('/my/myinfo');
      },
      homeRouter() {
        this.$router.push('/');
      },
      meRouter() {
        this.$router.push('/my')
      }
    }
  }
</script>
