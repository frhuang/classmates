<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
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
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    computed: {
      visible() {
        return ['/'].indexOf(this.$route.path) < 0;
      }
    }
  };
</script>
