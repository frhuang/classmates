<template>
  <div class="personalInfo">
    <my-header :title="user_info.username">
      <my-back slot="left"></my-back>
      <router-link class="complaints-btn" :to="'/personalinfo/'+id+'/complaints'" slot="right">投诉</router-link>
    </my-header>
    <div class="flag">
      <div class="avatar flag-item">
        <img :src="user_info.avatar" class="avatar-img">
        <i :class="{'female': user_info.gender == '0', 'male': user_info.gender == '1'}"></i>
      </div>
      <div class="flag-item">
        <div class="flag-title">{{user_info.schools_text}}</div>
        <div class="flag-pro">
          <span>{{user_info.speciality_text}}</span>
          <span>{{user_info.syear}}级</span>
        </div>
        <div class="flag-interest">
          <span>校内人脉排名：{{other_info.know_num}}</span> <span>访问量：{{other_info.viewed_num}}</span>
        </div>
      </div>
    </div>
    <photo :photos="user_photo"></photo>
    <div class="info-list">
      <p class="info-title">籍贯</p>
      <div class="info-content"><span>{{user_info.origin_province_text}}</span><span>{{user_info.origin_city_text}}</span></div>
      <p class="info-title">在校学生职位</p>
      <div class="info-content">{{user_info.job_name}}</div>
      <p class="info-title">兴趣爱好</p>
      <p class="info-content">
        <span class="content-item" v-for="interest in user_interests">{{interest.name}}</span>
      </p>
    </div>
    <my-navbar fixed>
      <my-nav-item class="nav-join" @click.native="tabForward">
        {{tabLabel}}
      </my-nav-item>
    </my-tabbar>
  </div>
</template>

<script type="text/babel">
  import Photo from '../components/Photo';
  import { rootUrl } from '../config';
  export default {
    data () {
      return {
        user_interests: [],
        user_photo: [],
        id: this.$route.params.id,
        tabLabel: '通过微信认识TA',
        user_info: {
          avatar: '',
          gender: '',
          job_name: '',
          origin_city_text: '',
          origin_province_text: '',
          schools_text: '',
          speciality_text: '',
          syear: '',
          username: ''
        },
        other_info: {
          is_allow_view: 0,
          is_auth: 0,
          is_know: 1,
          is_self: 1,
          is_weixin: 0,
          know_num: 0,
          viewed_num: 0
        },
        apiUrl: rootUrl + '/user/info'
      }
    },
    created () {
      this.fetchData();
    },
    methods: {
      fetchData () {
        var vm = this;
        vm.$http.get(vm.apiUrl, {
          params: {uid:vm.id},
          emulateJSON: true
        }).then((response) => {
          var data = JSON.parse(response.data);
          var userInfo = data.data.user_info;
          for(let key in vm.user_info) {
            vm.user_info[key] = userInfo[key];
          }
          for(let key in vm.other_info) {
            vm.other_info[key] = data.data.other_info[key];
          }
          vm.user_interests = data.data.user_interests;
          vm.user_photo = data.data.user_photo;
          if(vm.other_info["is_self"] === 1) {
            vm.tabLabel = '编辑个人信息';
          } else if(vm.other_info['is_know'] === 1) {
            vm.tabLabel = '查看微信二维码';
          }
        })
        .catch(function(response) {
        })
      },
      confirm() {
        alert('tousu');
      },
      tabForward() {
        if(this.other_info['is_self'] === 1) {
          this.$router.push('/my/myinfo');
        } else if(this.other_info['is_know'] === 0) {
          this.$router.push('/personalinfo/'+this.id+'/lookta');
        } else if(this.other_info['is_know'] === 1 && this.other_info['is_auth'] === 1) {
          alert('查看二维码');
        }
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
