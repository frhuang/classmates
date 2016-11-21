<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
  html, body {
    background-color: #fff;
    -webkit-overflow-scrolling: touch;
    user-select: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
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
