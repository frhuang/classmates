<template>
  <div class="complaints">
    <my-header title="兴趣爱好">
      <my-back slot="left"></my-back>
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
        apiUrl: rootUrl + '/find/interests-list'
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

    }
  }
</script>
