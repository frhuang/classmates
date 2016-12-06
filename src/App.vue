<template>
  <div>
    <!-- <transition :name="transitionName"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <loading v-show="isLoading"></loading>
  </div>
</template>

<style lang="scss">
@import './assets/sass/components/nav.scss';
@import './assets/sass/common.scss';
  // .child-view {
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  //   // transition: all .5s cubic-bezier(.55, 0, .1 ,1);
  // }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
</style>

<script type="text/babel">
  export default {
    data () {
      return {
        transitionName: 'slide-left',
        selected: "我的",
        isLoading: false
      }
    },
    watch: {
      '$route' (to, from) {
        if(to.path === '/') {
          this.transitionName = 'slide-right';
          this.selected = "找同学";
        }else {
          const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
        if(to.path === '/my') {
          this.selected = "我的";
        }
      }
    },
    // computed: {
    //   visible() {
    //     return ['/'].indexOf(this.$route.path) < 0;
    //   }
    // },
    methods: {
      homeRouter() {
        this.$router.push('/');
      },
      meRouter() {
        this.$router.push('/my')
      }
    }
  };
</script>
