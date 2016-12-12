<template>
  <div class="nativeplace">
    <my-header title="籍贯" fixed>
      <my-back slot="left"></my-back>
      <a href="javascript:;" @click="reset" slot="right" class="reset-btn" v-show="typeId == 1">重置</a>
    </my-header>
    <div class="cell-list">
      <my-cell v-for="pro in address" :to="'/filter/nativeplace2/'+typeId+'/'+pro.aid+'/'+pro.name" :title="pro.name" is-link></my-cell>
    </div>
    <mt-popup v-model="popupVisible" position="top" class="popup-top" :modal="false">
      <p>重置成功</p>
    </mt-popup>
  </div>
</template>

<script type="text/babel">
  import { rootUrl } from '../../config';
  export default {
    data() {
      return {
        address: [],
        popupVisible: false,
        typeId: this.$route.params.id,
        apiUrl: rootUrl + '/find/area-list'
      }
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
      reset() {
        this.$store.dispatch('selectFilterArea',
          {proId:'', proName:'', cityId: '', cityName: ''}
        );
        this.popupVisible = true;
      }
    }
  }
</script>
