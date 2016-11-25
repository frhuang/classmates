<template>
  <div class="personalInfo" v-if="post">
    <mt-header :title="post.name">
      <a @click="goback" slot="left">
        <mt-button class="common-back"></mt-button>
      </a>
      <button class="complaints-btn" slot="right" title="确定" @click="confirm">投诉</button>
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
    <photo></photo>
    <div class="info-list">
      <p class="info-title">籍贯</p>
      <p class="info-content">广东深圳</p>
      <p class="info-title">在校学生职位</p>
      <p class="info-content">学生会主席   班长</p>
      <p class="info-title">兴趣爱好</p>
      <p class="info-content">舞蹈 体育 编程</p>
    </div>
    <mt-tabbar fixed>
      <mt-tab-item id="通过微信认识TA" class="nav-join">
        通过微信认识TA
        <router-link :to="'/personalinfo/'+id+'/lookta'"></router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/babel">
  import { getPost } from '../config';
  import Photo from '../components/Photo';
  export default {
    data () {
      return {
        post: null,
        error: null,
        id: this.$route.params.id
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
      },
      goback() {
        this.$router.go(-1);
      },
      confirm() {
        alert('tousu');
      }
    },
    components: {
      Photo
    }
  }
</script>
<style lang="scss">
@import "../assets/sass/personalinfo.scss";
</style>
