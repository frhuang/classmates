<template>
  <div class="nativeplace">
    <mt-header title="籍贯" fixed>
      <my-back slot="left"></my-back>
    </mt-header>
    <div class="cell-list">
      <my-cell v-for="pro in address" :to="'/filter/nativeplace2/'+pro.aid+'/'+pro.name" :title="pro.name" is-link></my-cell>
    </div>
  </div>
</template>

<script type="text/babel">
  import { rootUrl } from '../config';
  export default {
    data() {
      return {
        address: [],
        apiUrl: rootUrl + '/find/area-list'
      }
    },
    created() {
      var vm = this;
      vm.$http.get(vm.apiUrl,{
        params: {type:1},
        emulateJSON: true
      }).then((response) => {
        var data = JSON.parse(response.data);
        vm.address = data.data;
      })
      .catch(function(response) {
      })
    },
    methods: {

    }
  }
</script>
