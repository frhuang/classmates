
<template>
  <div class="my-std-card">
    <mt-header title="实名认证学生证" fixed>
      <my-back slot="left"></my-back>
      <button class="filter-btn" :class="{disabled:arrowVisible==true}" slot="right" title="保存" @click="confirm">保存</button>
    </mt-header>
    <div class="std-card-content">
      <p class="std-title"><span class="red-title">*</span>真实公平交友 请上传本人学生证 保证清晰可见</p>
      <p class="std-detail-title">学生证详情页</p>
      <div class="upload-box" :style="{'background-image': 'url('+file+')'}">
        <upload
          :api="upload.api"
          :success="upload.success">
          <div class="box-add-arrow" v-show="arrowVisible"></div>
        </upload>
      </div>
      <p class="red-title">未认证</p>
      <p>学生证详情页 [示例]</p>
      <img src="/static/img/student-card.png" class="ex-card-img">

    </div>
  </div>
</template>

<script>
import upload from "../../components/Upload.vue"
export default {
  components:{
    upload
  },
  data() {
    return {
      upload:{
        api:"",
        success:(data)=>{
          this.successCallback(data);
        }
      },
      file: '',
      arrowVisible: true
    }
  },
  methods: {
    successCallback(data) {
      // document.getElementById('uploadImg').src=data;
      this.file = data;
      this.arrowVisible = false;
    },
    confirm() {

    }
  }
}
</script>
<style lang="scss">
@import "../../assets/sass/pages/my/mystdcard.scss";
</style>
