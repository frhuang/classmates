<template>
<div class="upload">
    <slot></slot>
    <input type="file" class="upload" @change="fileChange" :accept="accepts">
</div>
</template>
<script type="text/babel">
  export default {
    props: {
      apiUrl: String,
      params: {
        isSend: Boolean,
        app: String,
        ac: String,
      },
      success:Function
    },
    data(){
      return {
        percent: 0,
        files:[],
        accepts:"image/*"
      }
    },
    methods:{
      fileChange(e){
        var self = this;
        if(e.target.files.length==0)return false
        // 读取本地图片转成base64显示到页面待使用
        let fr=new FileReader()
        fr.onload=e=>{
          if(!!self.params.isSend) {
            self.uploadToSever(fr.result);
          }else {
            this.success(fr.result);
          }
        }
        fr.readAsDataURL(e.target.files[0])
      },
      uploadToSever(data) {
        var vm = this;
        vm.$http.post(vm.apiUrl, {
          app: vm.params.app,
          ac: vm.params.ac,
          uploadFile: data
        }).then((response) => {
          vm.success();
        }, (response) => {
          console.log(response.data)
        })
        .catch(function(response) {
        })
      }
    }
  }
</script>
<style scoped>
.upload{
    position: relative;
    width: 100%;
    height:100%;
    cursor: pointer;
    border-radius: inherit;
}
.upload>input{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    opacity: 0;
    cursor: pointer;
}
.upload .progress{
    position: absolute;
    left:0;
    bottom:0;
    right:0;
    top:0;
    width:100%;
    box-sizing:border-box;
    background-color:rgba(0, 0, 0,.8);
}
/*.upload .progress span{
    box-sizing: border-box;
    display: block;
    height:100%;
    width:0%;
    border-bottom:5px solid rgba(164, 208, 99,.8);
}
.upload .progress em{
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    font-size:.8rem;
    line-height: 100%;
    color:#fff;
}
.loading{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}*/
</style>
