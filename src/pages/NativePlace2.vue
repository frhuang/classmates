<template>
  <div class="nativeplace">
    <my-header :title="title" fixed>
      <my-back slot="left"></my-back>
    </my-header>
    <div class="cell-list">
      <my-cell v-for="city in selectId" @click.native="selectCity(city.name, city.aid)" :title="city.name"></my-cell>
    </div>
  </div>
</template>

<script type="text/babel">
  import { rootUrl } from '../config';
  export default {
    data () {
      return {
        title: this.$route.params.name,
        proId: this.$route.params.proId,
        typeId: this.$route.params.id,
        selectId: [],
        apiUrl: rootUrl + '/find/area-list'
      }
    },
    created() {
      var vm = this;
      vm.$http.get(vm.apiUrl, {
        params: {type:1, id: vm.proId},
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
        if(this.typeId == 1) {
          this.$store.dispatch('selectFilterArea', {proId:this.$route.params.id, proName:this.title, cityId: id, cityName: title});
        } else if(this.typeId == 2) {
          this.$store.dispatch('changeInfoArea', {proId:this.$route.params.id, proName:this.title, cityId: id, cityName: title});
        }

        this.$router.go(-2);
      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/sass/uicomponents/cell.scss";
</style>
