<template>
  <div id="app">
    <mt-tabbar v-model="selected" fixed v-if="$route.path == '/my' || $route.path == '/'">
      <pre-tab-item id="找同学" to="/">找同学</pre-tab-item>
      <pre-tab-item id="我的" to="/my">我的</pre-tab-item>
    </mt-tabbar>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <loading v-show="isLoading"></loading>
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
  .mint-tabbar > .mint-tab-item.is-selected {
    background: #09bb07;
    color: #fff;
  }
</style>

<script type="text/babel">
import PreTabItem from './uicomponents/TabItem';
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
    components: {
      PreTabItem
    }
  };
</script>
