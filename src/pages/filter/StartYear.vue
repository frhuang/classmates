<template>
  <div class="profession">
    <my-header title="入学年份">
      <my-back slot="left"></my-back>
      <a href="javascript:;" @click="reset" slot="right" class="reset-btn" v-show="typeId === 1">重置</a>
    </my-header>
    <my-cell v-for="year in years" :title="year" @click.native="selectYear(year)"></my-cell>
    <mt-popup v-model="popupVisible" position="top" class="popup-top" :modal="false">
      <p>重置成功</p>
    </mt-popup>
  </div>
</template>

<script type="text/babel">
  import { years, rootUrl } from '../../config.js';
  export default {
    data() {
      return {
        years: years,
        typeId: 1,
        popupVisible: false,
        editUrl: rootUrl + '/user/edit'
      }
    },
    created() {
      this.typeId = parseInt(this.$route.params.id);
    },
    watch: {
      popupVisible(val) {
        if (val) {
          setTimeout(() => {
            this.popupVisible = false;
          }, 2000);
        }
      }
    },
    methods: {
      selectYear(title) {
        var rid = this.typeId;
        if(rid == 1) {
          this.$store.dispatch('selectFilterYear', title);
          this.$router.go('-1');
        } else if(rid == 2) {
          var vm = this;
          var params = {};
          params.syear = title;
          vm.$http.post(vm.editUrl, params).then((response) => {
            this.$router.go(-1);
          }, (response) => {
            // console.log(response);
          })
          .catch(function(response) {
          })
        }
      },
      reset() {
        this.$store.dispatch('selectFilterYear', '');
        this.popupVisible = true;
      }
    }
  }
</script>
