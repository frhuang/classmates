<script>
export default {
    props: {
        // Server host,like "http://jinzhe.net"
        server: {
            type: String,
            require:true
        },
        // Server api path,like "/api/v1/getdata/"
        api: {
            type: String,
            require:true
        },
        // POST Params
        params:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        success:{
            type:Function
        }
    },
    data(){
      return {
        percent: 0,
        files:[],
        accepts:"image/*"
      }
    },
    watch:{
        percent(){
          console.log(this.percent)
            if(this.percent == 100){
                setTimeout(()=>{
                    this.percent=0
                },500)
            }
        },
    },
    methods:{
        fileChange(e){
            this.input=e.target
                if(e.target.files.length==0)return false
                // 读取本地图片转成base64显示到页面待使用
                let fr=new FileReader()
                fr.onload=e=>{
                  // this.file = fr.result;
                  this.success(fr.result);
                }
                fr.readAsDataURL(e.target.files[0])
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
.upload .image{
    transition: all .3s ease-in-out;
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
.upload .progress span{
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
}
</style>

<template>
<div class="upload">
    <slot></slot>
    <div class="progress" v-if="percent>0">
        <span :style="{width:percent+'%'}"></span>
        <em class="pa">{{percent}}%</em>
    </div>
    <input type="file" class="upload" @change="fileChange" :accept="accepts">
</div>
</template>
