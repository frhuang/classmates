
<template>
  <div class="album">
    <mt-header :title="title">
      <a slot="left" @click="routerBack">
        <mt-button class="common-back"></mt-button>
      </a>
    </mt-header>
    <div class="mask" ref="albumWrapper" :style="{ height: wrapperHeight + 'px' }">
      <img :src="src" id="pswp__img" />
      <img :src="src" class="show__img" :style="{width: imgWidth + 'px', height: imgHeight + 'px'}"/>
    </div>
  </div>
</template>
<script>
/*
**相册组件
*/
import { mapState } from 'vuex';
export default {
  data() {
    return {
      imgWidth: 0,
      imgHeight: 0,
      wrapperHeight: 0,
      title: '个人相册',
      src: "http://p7.qhimg.com/dr/200__/t01de92ee9e0075448c.jpg"
    }
  },
  methods: {
    routerBack() {
      this.$router.go(-1);
    }
  },
  computed: mapState({
    title: state => state.img.title,
    src: state => state.img.src
  }),
  mounted() {
    var img = document.getElementById('pswp__img');
    var w = img.width;
    var h = img.height;
    var r1 = w / h;
    var maxX = document.documentElement.clientWidth;
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.albumWrapper.getBoundingClientRect().bottom;
    var r2 = maxX / this.wrapperHeight;
    if(r1 > r2) {
      this.imgWidth = maxX;
      this.imgHeight = maxX * h / w;
    }else {
      this.imgHeight = this.wrapperHeight;
      this.imgWidth = this.imgHeight * w / h;
    }
  }
}
</script>

<style lang="scss">
.album{
  .mask{
    background: #000;
    width: 100%;
    position: relative;
    #pswp__img {
      display: none;
    }
    .show__img {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
