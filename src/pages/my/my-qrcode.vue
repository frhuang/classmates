<template>
  <div class="my-qrcode">
    <my-header title="微信二维码" fixed>
      <my-back slot="left"></my-back>
      <button class="filter-btn" :class="{disabled:uploadVisible==true}" slot="right" title="保存" @click="confirm">保存</button>
    </my-header>
    <div class="qrcode-content">
      <p class="qrcode-title"><span class="red-title">*</span> 如果他人主动要查看你微信二维码，需先赠送你1份礼物（3元/5元/10元不等）作为心意，礼物可以自动兑现。同时，你还可以免费查看对方的微信二维码</p>
      <p class="upload-title">请上传相应的<span class="green-title">微信二维码</span></p>
      <div class="upload-box" v-show="uploadVisible == true">
        <upload
          :api="upload.api"
          :success="upload.success">
          <div class="box-add-arrow" v-show="arrowVisible"></div>
        </upload>
      </div>
      <div class="readyImg" v-show="uploadVisible == false" :style="{'background-image': 'url('+file+')'}"></div>
      <p class="green-title">获取微信二维码：</p>
      <p>打开微信->我->个人信息->我的二维码</p>
      <p>->点击右上角->保存图片</p>
    </div>
  </div>
</template>

<script>
import upload from "../../components/Upload.vue"
export default {
  data() {
    return {
      upload:{
        api:"",
        success:(data)=>{
          this.successCallback(data);
        }
      },
      file: '',
      arrowVisible: true,
      uploadVisible: true,
    }
  },
  created() {
    this.file = this.$store.state.info.wechat;
    console.log(this.file);
    if(this.file != '') {
      this.uploadVisible = false;
    }
  },
  components: {
    upload
  },
  methods: {
    successCallback(data) {
      this.uploadVisible = false;
      this.file = data;
    },
    confirm() {
      if(!this.uploadVisible) {
        alert('confirm');
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/pages/my/myqrcode.scss";
</style>
