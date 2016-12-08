<template>
  <div class="my-qrcode">
    <my-header title="微信二维码" fixed>
      <my-back slot="left"></my-back>
      <button class="filter-btn" :class="{disabled:allowSave==false}" slot="right" title="保存" @click="confirm">保存</button>
    </my-header>
    <div class="qrcode-content">
      <p class="qrcode-title"><span class="red-title">*</span> 如果他人主动要查看你微信二维码，需先赠送你1份礼物（3元/5元/10元不等）作为心意，礼物可以自动兑现。同时，你还可以免费查看对方的微信二维码</p>
      <p class="upload-title">请上传相应的<span class="green-title">微信二维码</span></p>
      <div class="upload-box" :style="{'background-image': 'url('+file+')'}" :class="{'isPic': file != ''}">
        <upload
          :apiUrl="upload.apiUrl"
          :params="upload.params"
          :success="upload.success">
          <div class="box-add-arrow" v-show="arrowVisible"></div>
        </upload>
      </div>
      <p class="green-title">获取微信二维码：</p>
      <p>打开微信->我->个人信息->我的二维码</p>
      <p>->点击右上角->保存图片</p>
    </div>
  </div>
</template>

<script>
import upload from "../../components/Upload.vue"
import { rootUrl } from '../../config'
import { MessageBox } from 'mint-ui';
export default {
  data() {
    return {
      upload:{
        apiUrl: rootUrl + "/upload/file",
        params: {
          isSend: false,
          app: "3",
          ac: "ev",
        },
        success:(data)=>{
          this.successCallback(data);
        }
      },
      file: '',
      arrowVisible: true,
      allowSave: false,
    }
  },
  created() {
    this.file = this.$store.state.info.wechat;
    if(this.file != '') {
      this.arrowVisible = false;
    }
  },
  components: {
    upload
  },
  methods: {
    successCallback(data) {
      this.arrowVisible = false;
      this.allowSave = true;
      this.file = data;
    },
    confirm() {
      if(!!this.allowSave) {
        var vm = this;
        MessageBox.confirm('请确保所上传的微信二维码真实有效，否则影响收益入账！微信二维码每个月只能修改一次', '', {
          confirmButtonText: '继续保存'
        }).then(()=> {
          vm.$http.post(vm.upload.apiUrl, {
            app: vm.upload.params.app,
            ac: vm.upload.params.ac,
            uploadFile: vm.file
          }).then((response) => {
            vm.$router.go(-1);
          }, (response) => {
            console.log(response.data)
          })
          .catch(function(response) {
          })
        }, ()=> {

        })
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/pages/my/myqrcode.scss";
</style>
