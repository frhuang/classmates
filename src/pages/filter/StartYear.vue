<template>
  <div class="profession">
    <my-header title="入学年份">
      <my-back slot="left"></my-back>
    </my-header>
    <my-cell v-for="year in years" :title="year" @click.native="selectYear(year)"></my-cell>
  </div>
</template>

<script type="text/babel">
  import { years, rootUrl } from '../../config.js';
  export default {
    data() {
      return {
        years: years,
        editUrl: rootUrl + '/user/edit'
      }
    },
    methods: {
      selectYear(title) {
        var rid = this.$route.params.id;
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
      }
    }
  }
</script>
