<template>
  <div class="mypages">
    <div class="page-header flag">
      <div class="avatar flag-item">
        <img  class="avatar-img" :src="avatar" alt="">
        <i :class="{'female': gender =='0', 'male': gender == '1'}"></i>
      </div>
      <div class="flag-item">
        <div class="flag-title">{{username}}
          <span class="flag-auth" v-show="is_auth == 1">已认证</span>
          <span class="flag-n-auth" v-show="is_auth == 0">未认证</span>
        </div>
        <p class="flag-content" v-show="is_auth==1">{{userInterests}}</p>
        <p :class="{'flag-no-auth': is_auth == 0, 'flag-is-auth': is_auth == 1}">心意自动兑换<span class="red-title"> 90% </span>归你,每天零点自动转入你的<span class="green-title"> 微信红包</span></p>
        <a @click="joinTo" class="mypage-join" v-show="is_join == null">加入找同学</a>
        <a @click="joinTo" class="mypage-edit" v-show="is_join == 1"></a>
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
    <my-navbar v-model="selected">
      <my-nav-item id="找同学" @click.native="homeRouter">找同学</my-nav-item>
      <my-nav-item id="加入" @click.native="joinTo" v-show="is_join != '1'">加入</my-nav-item>
      <my-nav-item id="我的" :disabled="disabled">我的</my-nav-item>
    </my-navbar>
  </div>
</template>

<script type="text/babel">
  import { rootUrl } from '../config';
  import { getCookie } from '../utils';
  export default {
    data () {
      return {
        is_join: '',
        disabled: true,
        selected: "加入",
        toal_money: '0.00',
        friend_num: 0,
        viewed_num : 0,
        username: '',
        avatar: '',
        is_auth: 0,
        gender: 0,
        userInterests: '',
        apiUrl: rootUrl + '/user/me'
      }
    },
    created() {
      this.is_join = getCookie('is_join');
      if(this.is_join != null) {
        this.is_join = parseInt(this.is_join);
        this.selected = '我的';
        this.disabled = false;
      }
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
        var userInterests = data.data.userInterests;
        vm.avatar = userInfo.avatar;
        vm.username = userInfo.username;
        vm.toal_money = userData.total_money;
        vm.friend_num = userData.friend_num;
        vm.viewed_num = userData.viewed_num;
        vm.gender = userInfo.gender;
        vm.is_auth = userInfo.is_auth;
        for(let i=0; i<userInterests.length; i++) {
          vm.userInterests += userInterests[i].name;
          vm.userInterests += '  ';
        }
      })
      .catch(function(response) {
      })
    },
    methods: {
      homeRouter() {
        this.$router.push('/');
      },
      joinTo() {
        this.$router.push('/my/myinfo');
      }
    }
  }
</script>
<style lang="scss">
@import "../assets/sass/mypage.scss";
</style>
