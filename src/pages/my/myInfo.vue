<template>
  <div class="myinfo">
    <mt-header title="个人信息">
      <a slot="left" @click="routerBack">
        <mt-button class="common-back"></mt-button>
      </a>
      <mt-button class="join-btn" slot="right">我要加入</mt-button>
    </mt-header>
    <my-cell title="头像" is-link required></my-cell>
    <my-cell title="真实姓名" :value="name" is-link required></my-cell>
    <my-cell title="性别" :value="name" is-link required></my-cell>
    <my-cell title="籍贯" :value="place" is-link required></my-cell>
    <my-cell title="学校" :value="school" is-link required></my-cell>
    <my-cell title="专业" :value="speciality" is-link required></my-cell>
    <my-cell title="入学年份" :value="year" is-link required></my-cell>
    <my-cell title="兴趣爱好" :value="interest" is-link required></my-cell>
    <my-cell title="微信二维码" :value="qcode" is-link required></my-cell>
    <my-cell title="实名认证学生证" :value="stucard" is-link required></my-cell>
    <my-cell title="学生职位" :value="office" is-link></my-cell>
    <p class="photo-title">上传自己的魅力相册，多方位展示才有故事发生</p>
    <div class="upload">
      <img src="/static/img/upload.png" alt="">
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        name: "必须与学生证姓名一致",
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
    methods: {
      routerBack() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style lang="scss">
@import "../../assets/sass/pages/my/myinfo.scss";
</style>
