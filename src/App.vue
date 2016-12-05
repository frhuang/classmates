<template>
  <div>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <loading v-show="isLoading"></loading>
    <my-navbar v-model="selected" fixed v-if="$route.path == '/my' || $route.path == '/'">
      <my-nav-item id="找同学" @click.native="homeRouter">找同学</my-nav-item>
      <my-nav-item id="我的" @click.native="meRouter">我的</my-nav-item>
    </my-navbar>
  </div>
</template>

<style lang="scss">
@import './assets/sass/components/nav.scss';
@import './assets/sass/common.scss';
  .child-view {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
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
        selected: "找同学",
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
    computed: {
      visible() {
        return ['/'].indexOf(this.$route.path) < 0;
      }
    },
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
