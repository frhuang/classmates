<template>
  <div class="myinfo">
    <mt-header title="个人信息">
      <my-back slot="left"/>
      <mt-button class="join-btn" slot="right">我要加入</mt-button>
    </mt-header>
    <my-cell title="头像" is-link required @click.native="sheetVisible = true">
      <img :src="avatar" class="my-avatar">
    </my-cell>
    <my-cell title="真实姓名" to="/my/myinfo/myname/name" :value="name" is-link required></my-cell>
    <my-cell title="性别" :value="name"  required>

    </my-cell>
    <my-cell title="籍贯" to="/my/myinfo/myname/area" :value="place" is-link required></my-cell>
    <my-cell title="学校" to="/filter/school/2" :value="school" is-link required></my-cell>
    <my-cell title="专业" :value="speciality" is-link required></my-cell>
    <my-cell title="入学年份" :value="year" is-link required></my-cell>
    <my-cell title="兴趣爱好" :value="interest" is-link required></my-cell>
    <my-cell title="微信二维码" :value="qcode" is-link required></my-cell>
    <my-cell title="实名认证学生证" :value="stucard" is-link required></my-cell>
    <my-cell title="学生职位" to="/my/myinfo/myname/jobs" :value="office" is-link></my-cell>
    <p class="photo-title">上传自己的魅力相册，多方位展示才有故事发生</p>
    <div class="upload">
      <img src="/static/img/upload.png" alt="">
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" cancel-text=""></mt-actionsheet>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        sheetVisible: false,
        name: "必须与学生证姓名一致",
        avatar: "http://wx.qlogo.cn/mmopen/Q3auHgzwzM5La0zRdYAUQfQpY3ZyW3UQNI5XvsxtWfJBLkicBrLzbnzxOkric6GuOp6WciaoU2YWjhKIB5M5WSmicU4G8oaIJujaJJsY99LrA5I/0",
        sex: 1,
        place: '填写可以让同乡找到你',
        school: '填写可以让校友找到你',
        speciality: '填写可以让同专业的找到你',
        year: '填写可以让同年级的找到你',
        interest: '填写可以让志同道合的找到你',
        qcode: '填写为你收获人脉和心意',
        stucard: '让人觉得你靠谱',
        office: '展示你的才能 (选填)',
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
    methods: {
      openAlbum() {
        this.$store.dispatch('albumImgSrc', {title: '个人头像', src: this.avatar})
        this.$router.push('/my/myinfo/album');
      }
    }
  }
</script>
<style lang="scss">
@import "../../assets/sass/pages/my/myinfo.scss";
</style>
