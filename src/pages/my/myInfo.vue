<template>
  <div class="myinfo">
    <my-header title="个人信息" fixed>
      <my-back slot="left"/>
      <button class="filter-btn" :class="{'disabled':disabled}" @click="joinTo" slot="right">我要加入</button>
    </my-header>
    <div class="cell-list">
      <my-cell title="头像" is-link required @click.native="sheetAvatarVisible = true">
        <img :src="user_info.avatar" class="my-avatar">
      </my-cell>
      <my-cell title="真实姓名" @click.native="nextTo('/my/myinfo/myname/1')"
        :value="user_info.username=='' ? defaultLabel.name : user_info.username" :is-link="isLink" required></my-cell>
      <my-cell title="性别" required>
        <div class="pre-cell-sex">
          <my-radio
            class="page-part"
            v-model="user_info.gender"
            :options="options" />
        </div>
      </my-cell>
      <my-cell title="籍贯"
        @click.native="nextTo('/filter/nativeplace/2')"
        :value="user_info.origin_province_text == '' ? defaultLabel.pro : user_info.origin_province_text +' '+ user_info.origin_city_text"
        :is-link="isLink" required></my-cell>
      <my-cell title="学校"
        @click.native="nextTo('/filter/school/2')"
        :value="user_info.schools_text == '' ? defaultLabel.school : user_info.schools_text"
        :is-link="isLink" required></my-cell>
      <my-cell title="专业"
        @click.native="nextTo('/filter/profession/2')"
        :value="user_info.speciality_text == '' ? defaultLabel.profession : user_info.speciality_text"
        :is-link="isLink" required></my-cell>
      <my-cell title="入学年份"
        @click.native="nextTo('/filter/startyear/2')"
        :value="user_info.syear == '' ? defaultLabel.year : user_info.syear"
        :is-link="isLink" required></my-cell>
      <my-cell title="兴趣爱好"
        to="/my/myinfo/myinterests"
        :value="interestValue == '' ? defaultLabel.interest : interestValue" is-link required></my-cell>
      <my-cell title="微信二维码"
        to="/my/myinfo/qrcode" is-link required>
         <span :class="{'red-title': wechatStatus < 4 && wechatStatus> 0, 'green-title':  wechatStatus == 4 }"><i class="icon"></i>{{qrcodeLabel}}</span>
       </my-cell>
      <my-cell title="实名认证学生证" to='/my/myinfo/stdcard' is-link required>
         <span :class="{'red-title': stuStatus < 4 && stuStatus > 0, 'green-title':  stuStatus == 4 }"><i class="icon"></i>{{studentLabel}}</span>
      </my-cell>
      <my-cell title="学生职位"
        to="/my/myinfo/myname/2"
        :value="user_info.job_name == '' ? defaultLabel.jobs : user_info.job_name"
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
  import { infoDefault, rootUrl, StatusLabel } from '../../config';
  import { MessageBox } from 'mint-ui';
  import upload from "../../components/Upload.vue"
  export default {
    data () {
      return {
        sheetAvatarVisible: false,
        sheetPhotoVisible: false,
        disabled: true,
        options: [
          {label: '男', value: '1'},
          {label: '女', value: '0'}
        ],
        isLink: true,
        user_photo: [],
        interests: [],
        photoInfo: {},
        qrcodeLabel: '',
        studentLabel: '',
        interestValue: '',
        defaultLabel: infoDefault,
        wechatStatus: 0,
        stuStatus: 0,
        photoLength: 0,
        apiUrl: rootUrl + '/user/detail',
        removeUrl: rootUrl + '/user/photo-del',
        editUrl: rootUrl + '/user/edit',
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
        },
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
      joinTo() {
        if(!this.disabled) {
          var vm = this;
          vm.$http.post(vm.editUrl,{
            gender: vm.user_info.gender
          }).then((response) => {
            MessageBox.alert('你已成功加入找同学的大家庭，可以去找同学了，学生证认证结果会在24小时内通知你', '', {
              confirmButtonText: '知道了',
              confirmButtonClass: 'noconfirm'
            }).then(()=> {

            }, ()=> {

            })
          }, (response) => {
            // console.log(response.data)
          })
          .catch(function(response) {
          })
        }
      },
      nextTo(str) {
        if(this.stuStatus !== 4) {
          this.$router.push(str);
        }
      },
      fileChange(e) {
        if(e.target.files.length==0)return false
        // 读取本地图片转成base64显示到页面待使用
        let fr=new FileReader()
        fr.onload=e=>{
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
          // vm.user_info['student_id_status'] = '4';
          var ws = vm.wechatStatus = parseInt(vm.user_info['wechat_status']);
          var ss = vm.stuStatus = parseInt(vm.user_info['student_id_status']);
          if(ws >= 1 && ws <= 4) {
            vm.qrcodeLabel = StatusLabel[ws];
          }else {
            vm.qrcodeLabel = vm.defaultLabel.wechat;
          }
          if(ss >= 1 && ss <= 4) {
            vm.studentLabel = StatusLabel[ss];
          } else{
            vm.studentLabel = vm.defaultLabel.student
          }
          if(ss === 4) {
            vm.isLink = false;
          }
          vm.user_photo = data.data.user_photo;
          vm.setInterestsData(data.data.user_interests);
          vm.updatePersonalInfo();
          vm.checkIsDisabled();
        }, (response) => {
          // console.log(response.data)
        })
        .catch(function(response) {
        })
      },
      setInterestsData(data) {
        this.interestValue = '';
        for(let i=0; i < data.length; i++) {
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
          student_id_status: this.user_info.student_id_status,
          interests: this.user_info.interests
        })
      },
      checkIsDisabled() {
        var ui = this.user_info;
        if(ui.username != ''
          && ui.avatar != ''
          && ui.gender != ''
          && ui.origin_city != ''
          && ui.origin_province != ''
          && ui.schools != ''
          && ui.speciality != ''
          && ui.student_id != ''
          && ui.syear != '0'
          && ui.wechat != '0') {
          this.disabled = false;
        }
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
