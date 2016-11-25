<template>
  <div class="mypages">
    <div class="page-header flag">
      <div class="avatar flag-item">
        <img  class="avatar-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTFGNUFCMURBRkJDMTFFNkIwNjNFMDM5RTRDQjQ3MzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTFGNUFCMUVBRkJDMTFFNkIwNjNFMDM5RTRDQjQ3MzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMUY1QUIxQkFGQkMxMUU2QjA2M0UwMzlFNENCNDczNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMUY1QUIxQ0FGQkMxMUU2QjA2M0UwMzlFNENCNDczNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvloC+8AAAifSURBVHja7J1bbBRV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" alt="">
        <i class="female"></i>
      </div>
      <div class="flag-item">
        <div class="flag-title">伊莎贝拉</div>
        <p class="flag-tips">心意自动兑换<span class="red-title"> 90% </span>归你,每天零点自动转入你的<span class="green-title"> 微信红包</span></p>
        <button @click="joinTo" class="mypage-btn" title="加入找同学">加入找同学</button>
      </div>
    </div>
    <div class="page-content">
      <router-link to="/my/money">人脉心意</router-link>
      <router-link to="/my/contacts">我的人脉</router-link>
      <router-link to="/my/records">访问记录</router-link>
      <router-link to="/my/about">关于我们</router-link>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        msg: "this is my pages"
      }
    },
    methods: {
      joinTo() {
        this.$router.push('/my/myinfo');
      }
    }
  }
</script>
<style lang="scss">
@import "../assets/sass/mypage.scss";
</style>
