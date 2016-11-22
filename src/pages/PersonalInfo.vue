<template>
  <div class="personalInfo" v-if="post">
    <mt-header :title="post.name">
      <router-link to="/" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <div class="flag">
      <div class="avatar flag-item">
        <img :src="post.img" class="avatar-img">
        <i :class="{'female': post.sex =='2', 'male': post.sex == '1'}"></i>
      </div>
      <div class="flag-item">
        <div class="flag-title">{{post.stu}}</div>
        <div class="flag-pro">
          <span>{{post.pro}}</span>
          <span>{{post.lv}}级</span>
        </div>
        <div class="flag-interest">
          <span>校内人脉排名：115</span> <span>访问量：100</span>
        </div>
      </div>
    </div>
    <mt-tabbar  v-model="selected" fixed>
      <mt-tab-item id="通过微信认识TA" class="nav-join">通过微信认识TA</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/babel">
  import { getPost } from '../config';
  export default {
    data () {
      return {
        post: null,
        error: null
      }
    },
    created () {
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.error = this.post = null
        getPost(this.$route.params.id, (err, post) => {
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
      }
    }
  }
</script>
<style>
  .personalInfo {
    height: 100%;
    background: #f5f5f5;
  }
</style>
