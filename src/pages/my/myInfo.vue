<template>
  <div class="myinfo">
    <mt-header title="个人信息">
      <my-back slot="left"/>
      <mt-button class="join-btn" slot="right">我要加入</mt-button>
    </mt-header>
    <my-cell title="头像" is-link required @click.native="sheetVisible = true">
      <img :src="user_info.avatar" class="my-avatar">
    </my-cell>
    <my-cell title="真实姓名" to="/my/myinfo/myname/1" :value="user_info.username=='' ? defalut.name : user_info.username" is-link required></my-cell>
    <my-cell title="性别" required>
      <div class="pre-cell-sex">
        <my-radio
          class="page-part"
          v-model="user_info.gender"
          :options="options" />
      </div>
    </my-cell>
    <my-cell title="籍贯"
      to="/filter/nativeplace/2"
      :value="user_info.origin_province_text == '' ? defalut.pro : user_info.origin_province_text + user_info.origin_city_text"
      is-link required></my-cell>
    <my-cell title="学校"
      to="/filter/school/2"
      :value="user_info.schools_text == '' ? defalut.school : user_info.schools_text"
      is-link required></my-cell>
    <my-cell title="专业"
      to="/filter/profession/2"
      :value="user_info.speciality_text == '' ? defalut.profession : user_info.speciality_text"
      is-link required></my-cell>
    <my-cell title="入学年份"
      to="/filter/year"
      :value="user_info.syear == '' ? defalut.year : user_info.syear"
      is-link required></my-cell>
    <my-cell title="兴趣爱好"
      :value="interestValue == '' ? defalut.interest : interestValue" is-link required></my-cell>
    <my-cell title="微信二维码"  to="/my/myinfo/qrcode" :value="qrcode" is-link required></my-cell>
    <my-cell title="实名认证学生证" to="/my/myinfo/stdcard" :value="stdcard" is-link required></my-cell>
    <my-cell title="学生职位" to="/my/myinfo/myname/2" :value="jobs" is-link></my-cell>
    <p class="photo-title">上传自己的魅力相册，多方位展示才有故事发生</p>
    <div class="upload">
      <img src="/static/img/upload.png" alt="">
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" cancel-text=""></mt-actionsheet>
  </div>
</template>

<script type="text/babel">
  import { mapState } from 'vuex';
  import { infoDefault, rootUrl } from '../../config';
  export default {
    data () {
      return {
        sheetVisible: false,
        options: [
          {label: '男', value: '1'},
          {label: '女', value: '0'}
        ],
        interests: [],
        qrcode: '',
        stdcard: '',
        interestValue: '',
        defalut: infoDefault,
        apiUrl: rootUrl + '/user/detail',
        user_info: {
          avatar: '',
          avatar_status: '',
          gender:'',
          job_name:'',
          origin_city_text:'',
          origin_province_text:'',
          schools_text: '',
          speciality_text:'',
          student_id:'',
          student_id_status:'',
          syear:'',
          username:'',
          wechat:'',
          wechat_status:''
        }
      }
    },
    mounted() {
      this.actions = [{
        name: '更改头像',
        method: this.takePhoto
      }, {
        name: '查看大图',
        method: this.openAlbum
      }];
    },
    created() {
      this.getData();
    },
    methods: {
      openAlbum() {
        this.$store.dispatch('albumImgSrc', {title: '个人头像', src: this.avatar})
        this.$router.push('/my/myinfo/album');
      },
      getData() {
        var vm = this;
        vm.$http.get(vm.apiUrl,{
          params: {},
          emulateJSON: true
        }).then((response) => {
          var data = JSON.parse(response.data);
          var userInfo = data.data.user_info;
          for(var key in vm.user_info) {
            vm.user_info[key] = userInfo[key];
          }
          vm.interests = data.data.user_interests;
          vm.updatePersonalInfo();
        }, (response) => {
          console.log(response.data)
        })
        .catch(function(response) {
        })
      },
      updatePersonalInfo() {
        var vm = this;
        this.$store.dispatch('updatePersonalInfo', {
          username: vm.username,
          year: vm.year,
          job_name: vm.job_name,
          wechat: vm.wechat,
          student_id: vm.student_id,
          interests: vm.interests
        })
      }
    }
  }
</script>
<style lang="scss">
@import "../../assets/sass/pages/my/myinfo.scss";
</style>
