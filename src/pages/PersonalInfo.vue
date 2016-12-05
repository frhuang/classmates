<template>
  <div class="personalInfo">
    <my-header :title="username">
      <my-back slot="left"></my-back>
      <router-link class="complaints-btn" :to="'/personalinfo/'+id+'/complaints'" slot="right">投诉</router-link>
    </my-header>
    <div class="flag">
      <div class="avatar flag-item">
        <img :src="avatar" class="avatar-img">
        <i :class="{'female': gender == '0', 'male': gender == '1'}"></i>
      </div>
      <div class="flag-item">
        <div class="flag-title">{{school}}</div>
        <div class="flag-pro">
          <span>{{profession}}</span>
          <span>{{year}}级</span>
        </div>
        <div class="flag-interest">
          <span>校内人脉排名：115</span> <span>访问量：100</span>
        </div>
      </div>
    </div>
    <photo :photos="user_photo"></photo>
    <div class="info-list">
      <p class="info-title">籍贯</p>
      <div class="info-content">{{origin_city_text}}</div>
      <p class="info-title">在校学生职位</p>
      <div class="info-content">{{job_name}}</div>
      <p class="info-title">兴趣爱好</p>
      <p class="info-content">
        <span class="content-item" v-for="interest in user_interests">{{interest.name}}</span>
      </p>
    </div>
    <my-navbar fixed>
      <my-nav-item id="通过微信认识TA" class="nav-join" @click.native="lookTa">
        通过微信认识TA
        <!-- <router-link :to="'/personalinfo/'+id+'/lookta'"></router-link> -->
      </my-nav-item>
    </my-tabbar>
  </div>
</template>

<script type="text/babel">
  import Photo from '../components/Photo';
  export default {
    data () {
      return {
        username: '',
        gender: '0',
        school: '',
        profession: '',
        year: '',
        avatar: '',
        user_interests: [],
        user_photo: [],
        job_name:'',
        origin_city_text: '',
        id: this.$route.params.id,
        apiUrl: 'http://schoolmate.liyuzhou.net:80/api' + '/user/info'
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
          var userPhoto = data.data.user_photo;
          vm.username = userInfo.username;
          vm.gender = userInfo.gender;
          vm.avatar = userInfo.avatar;
          vm.school = userInfo.schools_text;
          vm.profession = userInfo.speciality_text;
          vm.year = userInfo.syear;
          vm.user_interests = data.data.user_interests;
          vm.user_photo.push(userPhoto.fname);
        })
        .catch(function(response) {
        })
      },
      confirm() {
        alert('tousu');
      },
      lookTa() {
        this.$router.push('/personalinfo/'+this.id+'/lookta');
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
