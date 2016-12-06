<template>
  <div class="complaints">
    <my-header title="兴趣爱好">
      <my-back slot="left"></my-back>
      <button class="filter-btn" slot="right" title="保存" @click="confirm">保存</button>
    </my-header>
    <my-checklist align="right" v-model="value" :options="options"></mt-checklist>
  </div>
</template>


<script type="text/babel">
  import { rootUrl } from '../../config';
  export default {
    data () {
      return {
        value: [],
        options: [],
        interests: {},
        apiUrl: rootUrl + '/find/interests-list',
        editUrl: rootUrl + '/user/edit'
      }
    },
    created() {
      var vm = this;
      vm.$http.get(vm.apiUrl,{
        params: {type:2},
        headers: {
        },
        emulateJSON: true
      }).then((response) => {
        var data = JSON.parse(response.data);
        vm.interests = data.data;
        for(let key in vm.interests) {
          vm.options.push(vm.interests[key]['name']);
        }
      })
      .catch(function(response) {
      })
    },
    methods: {
      confirm() {
        console.log(this.value);
        var vm = this;
        if(vm.value.length > 0) {
          var str = '';
          for(let i=0; i < vm.value.length; i++) {
            str += this.getId(vm.value[i]);
            if(i != vm.value.length -1) {
              str += ','
            }
          }
          var params = {};
          params.interests = str;
          vm.$http.post(vm.editUrl, params).then((response) => {
            this.$router.go(-1);
          }, (response) => {
            // console.log(response);
          })
          .catch(function(response) {
          })
        }
      },
      getId(value) {
        for(let key in this.interests) {
          if(this.interests[key]['name'] == value) {
            return key;
          }
        }
      }
    }
  }
</script>
