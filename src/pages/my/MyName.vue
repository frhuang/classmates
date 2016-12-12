<template>
  <div class="my-name">
    <my-header :title="title">
      <my-back slot="left"></my-back>
      <button class="filter-btn" slot="right" title="保存" @click="confirm">保存</button>
    </my-header>
    <div class="textwrapper">
      <textarea class="textarea" :placeholder="placeholder" v-model="value" :maxlength="maxLength" @keyup="check"></textarea>
      <span class="check-length">{{length}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { rootUrl } from '../../config'
export default {
  data() {
    return {
      title: '真实姓名',
      disabled: false,
      placeholder: '',
      id: 0,
      value: '',
      length: 0,
      maxLength: 0,
      currentValue: '',
      apiUrl: rootUrl + '/user/edit'
      // apiUrl: 'http://schoolmate.liyuzhou.net/api/user/edit'
    }
  },

  created() {
    this.id = this.$route.params.id;
    if(this.id == 1) {
      this.title = '真实姓名';
      this.placeholder = '请填写您的真实姓名';
      this.maxLength = 10;
      this.value = this.$store.state.info.username;
      this.length = this.maxLength - this.value.length;
    }else if(this.id == 2) {
      this.title = '学生职位';
      this.placeholder = '填写目前担任的学生干部职务，如学生会、团委、社团协会、班干部等等';
      this.maxLength = 20;
      this.value = this.$store.state.info.job_name;
      this.length = this.maxLength - this.value.length;
    }
  },
  methods: {
    confirm() {
      var params = {};
      if(this.id == 1) {
        params.username = this.value;
      }else if(this.id == 2) {
        params.job_name = this.value;
      }
      var vm = this;
      vm.$http.post(vm.apiUrl, params).then((response) => {
        this.$router.go(-1);
      }, (response) => {
        // console.log(response);
      })
      .catch(function(response) {
      })
      // this.$store.dispatch('changeInfoName', this.value);
      // this.$router.go(-1);
    },
    check() {
      var regC = /[^ -~]+/g;
      var regE = /\D+/g;
      var str = this.value;
      if (regC.test(str)){
          this.value = this.value.substr(0, this.maxLength);
      }
      if(regE.test(str)){
          this.value = this.value.substr(0, this.maxLength);
      }
      this.length = this.maxLength - this.value.length;
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/pages/my/myname.scss";
</style>
