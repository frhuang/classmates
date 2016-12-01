<template>
  <div class="nativeplace">
    <mt-header :title="title" fixed>
      <my-back slot="left"></my-back>
    </mt-header>
    <div class="cell-list">
      <callback-cell v-for="city in selectId" :callback="selectCity" :title="city.name" :id="city.aid"></callback-cell>
    </div>
  </div>
</template>

<script type="text/babel">
  import { rootUrl } from '../config';
  export default {
    data () {
      return {
        title: this.$route.params.name,
        selectId: [],
        apiUrl: rootUrl + '/find/area-list'
      }
    },
    created() {
      var vm = this;
      vm.$http.get(vm.apiUrl, {
        params: {type:1, id: this.$route.params.id},
        headers: {
        },
        emulateJSON: true
      }).then((response) => {
        var data = JSON.parse(response.data);
        vm.selectId = data.data;
      })
      .catch(function(response) {
      })
    },
    methods: {
      selectCity(title, id) {
        this.$store.dispatch('selectFilterProvince', {id:this.$route.params.id, name:this.title});
        this.$store.dispatch('selectFilterCity', {id: id, name: title});
        this.$router.go(-2);
      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/sass/uicomponents/cell.scss";
</style>
