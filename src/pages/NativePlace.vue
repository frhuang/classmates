<template>
  <div class="nativeplace">
    <my-header title="籍贯" fixed>
      <my-back slot="left"></my-back>
    </my-header>
    <div class="cell-list">
      <my-cell v-for="pro in address" :to="'/filter/nativeplace2/'+typeId+'/'+pro.aid+'/'+pro.name" :title="pro.name" is-link></my-cell>
    </div>
  </div>
</template>

<script type="text/babel">
  import { rootUrl } from '../config';
  export default {
    data() {
      return {
        address: [],
        typeId: this.$route.params.id,
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
      }, (response) => {
        console.log(response.data)
      })
      .catch(function(response) {
      })
    },
    methods: {

    }
  }
</script>
