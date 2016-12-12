
<template>
  <div class="my-std-card">
    <my-header title="实名认证学生证" fixed>
      <my-back slot="left"></my-back>
      <button class="filter-btn" :class="{disabled:allowSave==false}" slot="right" title="保存" @click="confirm">保存</button>
    </my-header>
    <div class="std-card-content">
      <p class="std-title"><span class="red-title">*</span>真实公平交友 请上传本人学生证 保证清晰可见</p>
      <p class="std-detail-title">学生证详情页</p>
      <div class="upload-box" :style="{'background-image': 'url('+file+')'}">
        <upload
          :apiUrl="upload.apiUrl"
          :params="upload.params"
          :success="upload.success">
          <div class="box-add-arrow" v-show="arrowVisible"></div>
        </upload>
      </div>
      <p class="red-title">{{label}}</p>
      <p>学生证详情页 [示例]</p>
      <img src="/static/img/student-card.png" class="ex-card-img">
    </div>
  </div>
</template>

<script>
import upload from "../../components/Upload.vue"
import { rootUrl, StatusLabel } from '../../config';
import { MessageBox } from 'mint-ui';
export default {
  components:{
    upload
  },
  data() {
    return {
      upload:{
        apiUrl: rootUrl + "/upload/file",
        params: {
          isSend: false,
          app: "4",
          ac: "ev",
        },
        success:(data)=>{
          this.successCallback(data);
        }
      },
      file: '',
      arrowVisible: true,
      allowSave: false,
      label: '未认证'
    }
  },
  created() {
    this.file = this.$store.state.info.student_id;
    var st = parseInt(this.$store.state.info.student_id_status);
    if(st >= 1 && st <= 4 ) {
      this.label = StatusLabel[st];
    }
    if(this.file != '') {
      this.arrowVisible = false;
      this.allowSave = false;
    }
  },
  methods: {
    successCallback(data) {
      this.file = data;
      this.arrowVisible = false;
      this.allowSave = true;
    },
    receiveSuccess() {
      var vm = this;
      MessageBox.alert('您的学生证已提交认证，你可以先去认识同学，我们24小时内通知您审核结果！', '', {
        confirmButtonText: '知道了',
        confirmButtonClass: 'noconfirm'
      }).then(()=> {
        vm.$router.go(-1);
      }, ()=> {
        vm.$router.go(-1);
      });
    },
    confirm() {
      if(!!this.allowSave) {
        var vm = this;
        vm.$http.post(vm.upload.apiUrl, {
          app: vm.upload.params.app,
          ac: vm.upload.params.ac,
          uploadFile: vm.file
        }).then((response) => {
          vm.receiveSuccess();
        }, (response) => {
          console.log(response.data)
        })
        .catch(function(response) {
        })
      }
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/sass/pages/my/mystdcard.scss";
</style>
