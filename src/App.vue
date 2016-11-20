<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  html, body {
    background-color: #fff;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }

  .page-back {
    display: inline-block;
    position: absolute 12px * * 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 40px;
      line-height: 40px;
    }
  }
</style>

<script type="text/babel">
  export default {
    computed: {
      visible() {
        return ['/'].indexOf(this.$route.path) < 0;
      }
    }
  };
</script>
