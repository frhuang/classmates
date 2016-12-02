<template>
  <div class="mypages">
    <div class="page-header flag">
      <div class="avatar flag-item">
        <img  class="avatar-img" :src="avatar" alt="">
        <i class="female"></i>
      </div>
      <div class="flag-item">
        <div class="flag-title">{{username}}</div>
        <p class="flag-tips">心意自动兑换<span class="red-title"> 90% </span>归你,每天零点自动转入你的<span class="green-title"> 微信红包</span></p>
        <button @click="joinTo" class="mypage-btn" title="加入找同学">加入找同学</button>
      </div>
    </div>
    <div class="page-content">
      <router-link to="/my/money">
        <div class="content-item">
          <div class="item-icon">
            <i class="icon icon1"></i>
          </div>
          <div class="content">
            <p class="num">¥{{toal_money}}</p>
            <p class="title">人脉心意</p>
          </div>
        </div>
      </router-link>
      <router-link to="/my/contacts">
        <div class="content-item">
          <div class="item-icon">
            <i class="icon icon2"></i>
          </div>
          <div class="content">
            <p class="num">{{friend_num}}</p>
            <p class="title">我的人脉</p>
          </div>
        </div>
      </router-link>
      <router-link to="/my/records">
        <div class="content-item">
          <div class="item-icon">
            <i class="icon icon3"></i>
          </div>
          <div class="content">
            <p class="num">{{viewed_num}}</p>
            <p class="title">访问记录</p>
          </div>
        </div>
      </router-link>
      <router-link to="/my/about">
        <div class="content-item">
          <div class="item-icon">
            <i class="icon icon4"></i>
          </div>
          <div class="content">
            <p class="num about">.</p>
            <p class="title">关于我们</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/babel">
  import { rootUrl } from '../config'
  export default {
    data () {
      return {
        toal_money: '0.00',
        friend_num: 0,
        viewed_num : 0,
        username: '',
        avatar: '',
        apiUrl: 'http://schoolmate.liyuzhou.net/api' + '/user/me'
      }
    },
    created() {
      var vm = this;
      vm.$http.get(vm.apiUrl, {
        params: {},
        headers: {
        },
        emulateJSON: true
      }).then((response) => {
        var data = JSON.parse(response.data);
        var userInfo = data.data.userInfo;
        var userData = data.data.userData;
        vm.avatar = userInfo.avatar;
        vm.username = userInfo.username;
        vm.toal_money = userData.total_money;
        vm.friend_num = userData.friend_num;
        vm.viewed_num = userData.viewed_num;
      })
      .catch(function(response) {
      })
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
