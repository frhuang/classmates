<template>
  <div class="school">
    <my-header title="学校" fixed>
      <my-back slot="left"></my-back>
    </my-header>
    <div class="search-box">
      <mt-search
        autofocus
        placeholder="请输入学校全称"
        v-model="value">
    </div>
    </my-search>
    <div class="pre-search-list" v-show="value != ''">
      <div class="pre-search-list-warp">
        <my-cell v-for="item in result" :title="item.name" @click.native="selectSchool(item.name, item.id)"></my-cell>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import { rootUrl } from '../config'
  export default {
    data () {
      return {
        value: '',
        result: [],
        apiUrl: rootUrl + '/find/school-list',
        editUrl: rootUrl + '/user/edit'
      }
    },
    watch: {
      value() {
        if(this.value != '') {
          this.getSchool()
        }
      }
    },
    methods: {
      selectSchool(title, id) {
        var rid = this.$route.params.id;
        if(rid == 1) {
          this.$store.dispatch('selectFilterSchool', {id: id, name: title});
          this.$router.go(-1);
        }else if(rid == 2) {
          var vm = this;
          var params = {};
          params.schools = id;
          vm.$http.post(vm.editUrl, params).then((response) => {
            this.$router.go(-1);
          }, (response) => {
            // console.log(response);
          })
          .catch(function(response) {
          })
        }
      },
      getSchool() {
        var vm = this;
        vm.$http.get(vm.apiUrl, {
          params: {name:vm.value},
          headers: {
          },
          emulateJSON: true
        }).then((response) => {
          var data = JSON.parse(response.data);
          vm.result = data.data;
        })
        .catch(function(response) {
        })
      }
    }
  }
</script>
<style lang="scss">
.search-box {
  position: absolute;
  top: 1.3333333333333333rem;
  left: 0;
  right: 0;
}
</style>
