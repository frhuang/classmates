<template>
  <div class="myinfo">
    <my-header title="个人信息" fixed>
      <my-back slot="left"/>
      <my-button class="join-btn" slot="right" :disabled="disabled">我要加入</my-button>
    </my-header>
    <div class="cell-list">
      <my-cell title="头像" is-link required @click.native="sheetAvatarVisible = true">
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
        :value="user_info.origin_province_text == '' ? defalut.pro : user_info.origin_province_text +' '+ user_info.origin_city_text"
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
        to="/filter/startyear/2"
        :value="user_info.syear == '' ? defalut.year : user_info.syear"
        is-link required></my-cell>
      <my-cell title="兴趣爱好"
        to="/my/myinfo/myinterests"
        :value="interestValue == '' ? defalut.interest : interestValue" is-link required></my-cell>
      <my-cell title="微信二维码"  to="/my/myinfo/qrcode" :value="qrcode" is-link required></my-cell>
      <my-cell title="实名认证学生证" to="/my/myinfo/stdcard" :value="stdcard" is-link required></my-cell>
      <my-cell title="学生职位"
        to="/my/myinfo/myname/2"
        :value="user_info.job_name == '' ? defalut.jobs : user_info.job_name"
         is-link></my-cell>
      <p class="photo-title">上传自己的魅力相册，多方位展示才有故事发生</p>
      <div class="img-box">
        <div class="img-item" v-for="item in user_photo" @click="viewAlbum(item)"><img :src="item.fname"></div>
        <div class="upload-box" v-show="user_photo.length < 4">
          <upload
            :apiUrl="upload.apiUrl"
            :params="upload.params"
            :success="upload.success">
            <div class="box-add-arrow"></div>
          </upload>
        </div>
      </div>
      <my-actionsheet :actions="actionAvatar" v-model="sheetAvatarVisible" cancel-text=""></my-actionsheet>
      <my-actionsheet :actions="actionPhoto" v-model="sheetPhotoVisible" cancel-text=""></my-actionsheet>
      <input type="file" id="avatar-upload" class="avatar-upload" @change="fileChange" accept="image/*">
    </div>
  </div>
</template>

<script type="text/babel">
  import { mapState } from 'vuex';
  import { infoDefault, rootUrl } from '../../config';
  import upload from "../../components/Upload.vue"
  export default {
    data () {
      return {
        sheetAvatarVisible: false,
        sheetPhotoVisible: false,
        options: [
          {label: '男', value: '1'},
          {label: '女', value: '0'}
        ],
        user_photo: [],
        interests: [],
        photoInfo: {},
        qrcode: '',
        stdcard: '',
        interestValue: '',
        defalut: infoDefault,
        photoLength: 0,
        apiUrl: rootUrl + '/user/detail',
        removeUrl: rootUrl + '/user/photo-del',
        user_info: {
          avatar: '',
          avatar_status: '',
          gender:'',
          job_name:'',
          origin_city_text:'',
          origin_province_text:'',
          schools: '',
          schools_text: '',
          speciality_text:'',
          student_id:'',
          student_id_status:'',
          syear:'',
          username:'',
          wechat:'',
          wechat_status:''
        },
        upload:{
          apiUrl: rootUrl + "/upload/file",
          params: {
            isSend: true,
            app: "2",
            ac: "ev",
          },
          success:(data)=>{
            this.successCallback(data);
          }
        }
      }
    },
    components: {
      upload
    },
    mounted() {
      this.actionAvatar = [{
        name: '更改头像',
        method: this.updateAvatar
      }, {
        name: '查看大图',
        method: this.openAvatarAlbum
      }];
      this.actionPhoto = [{
        name: '查看大图',
        method: this.openPhotoAlbum
      }, {
        name: '删除',
        method: this.removePhoto
      }]
    },
    created() {
      this.getData();
    },
    methods: {
      fileChange(e) {
        if(e.target.files.length==0)return false
        // 读取本地图片转成base64显示到页面待使用
        let fr=new FileReader()
        fr.onload=e=>{
            console.log(fr.result);
        }
        fr.readAsDataURL(e.target.files[0])
      },
      updateAvatar() {
        var fileEle = document.getElementById('avatar-upload');
        fileEle.click();
      },
      openAvatarAlbum() {
        this.$store.dispatch('albumImgSrc', {title: '个人头像', src: this.user_info.avatar})
        this.$router.push('/my/myinfo/album');
      },
      openPhotoAlbum() {
        this.$store.dispatch('albumImgSrc', {title: '个人相册', src: this.photoInfo.fname})
        this.$router.push('/my/myinfo/album');
      },
      removePhoto() {
        var vm = this;
        vm.$http.post(vm.removeUrl,{
          pid: vm.photoInfo.pid
        }).then((response) => {
          vm.getData();
        }, (response) => {
          console.log(response.data)
        })
        .catch(function(response) {
        })
      },
      viewAlbum(data) {
        this.photoInfo = data;
        this.sheetPhotoVisible = true;
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
          vm.user_photo = data.data.user_photo;
          vm.setInterestsData(data.data.user_interests);
          vm.updatePersonalInfo();
        }, (response) => {
          console.log(response.data)
        })
        .catch(function(response) {
        })
      },
      setInterestsData(data) {
        this.interestValue = '';
        for(let i=0; i<data.length; i++) {
          this.interestValue += data[i]['name'];
          this.interestValue += ' ';
        }
      },
      updatePersonalInfo() {
        this.$store.dispatch('updatePersonalInfo', {
          username: this.user_info.username,
          year: this.user_info.year,
          job_name: this.user_info.job_name,
          schools: this.user_info.schools,
          wechat: this.user_info.wechat,
          student_id: this.user_info.student_id,
          interests: this.user_info.interests
        })
      },
      successCallback(data) {
        this.getData();
      }
    }
  }
</script>
<style lang="scss">
@import "../../assets/sass/pages/my/myinfo.scss";
</style>
