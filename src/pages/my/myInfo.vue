<template>
  <div class="myinfo">
    <mt-header title="个人信息">
      <my-back slot="left"/>
      <mt-button class="join-btn" slot="right">我要加入</mt-button>
    </mt-header>
    <my-cell title="头像" is-link required @click.native="sheetVisible = true">
      <img :src="avatar" class="my-avatar">
    </my-cell>
    <my-cell title="真实姓名" to="/my/myinfo/myname/1" :value="name=='' ? defalut.name : name" is-link required></my-cell>
    <my-cell title="性别" required>
      <div class="pre-cell-sex">
        <my-radio
          class="page-part"
          v-model="sex"
          :options="options" />
      </div>
    </my-cell>
    <my-cell title="籍贯" to="/my/myinfo/myname/area" :value="pro == '' ? defalut.pro : pro + city" is-link required></my-cell>
    <my-cell title="学校" to="/filter/school/2" :value="school == '' ? defalut.school : school" is-link required></my-cell>
    <my-cell title="专业" to="/filter/profession/2" :value="defalut.profession" is-link required></my-cell>
    <my-cell title="入学年份" :value="year == '' ? defalut.year : year" is-link required></my-cell>
    <my-cell title="兴趣爱好" :value="interest == '' ? defalut.interest : interest" is-link required></my-cell>
    <my-cell title="微信二维码"  to="/my/myinfo/qrcode" :value="qrcode" is-link required></my-cell>
    <my-cell title="实名认证学生证" to="/my/myinfo/stdcard" :value="stdcard" is-link required></my-cell>
    <my-cell title="学生职位" to="/my/myinfo/myname/2" :value="jobs" is-link></my-cell>
    <p class="photo-title">上传自己的魅力相册，多方位展示才有故事发生</p>
    <div class="upload">
      <img src="/static/img/upload.png" alt="">
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" cancel-text=""></mt-actionsheet>
  </div>
</template>

<script type="text/babel">
  import { mapState } from 'vuex';
  import { infoDefault } from '../../config';
  export default {
    data () {
      return {
        sheetVisible: false,
        name: "",
        avatar: "http://wx.qlogo.cn/mmopen/Q3auHgzwzM5La0zRdYAUQfQpY3ZyW3UQNI5XvsxtWfJBLkicBrLzbnzxOkric6GuOp6WciaoU2YWjhKIB5M5WSmicU4G8oaIJujaJJsY99LrA5I/0",
        options: [
          {label: '男', value: '0'},
          {label: '女', value: '1'}
        ],
        sex: '0',
        pro: '',
        city: '',
        school: '',
        profession: '',
        year: '',
        interest: '',
        qrcode: '',
        stdcard: '',
        jobs: '',
        defalut: infoDefault
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
    computed: mapState({
      name: state => state.info.name,
      pro: state => state.info.pro,
      city: state => state.info.city,
      school: state => state.info.school,
      profession: state => state.info.profession,
      year: state => state.info.year,
      interest: state => state.info.interest,
    }),
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
