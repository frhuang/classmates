<template>
  <div class="nativeplace">
    <mt-header :title="title" fixed>
      <router-link to="/filter/nativeplace" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <div class="cell-list">
      <my-cell v-for="city in selectId" :callback="selectCity" :title="city" required></my-cell>
    </div>
  </div>
</template>

<script type="text/babel">
  import { address } from '../config.js';
  export default {
    data () {
      return {
        title: this.$route.params.id,
        selectId: address[this.$route.params.id]
      }
    },
    methods: {
      selectCity(key) {
        console.log('fsdf')
        this.$store.dispatch('selectProvince', this.title);
        this.$store.dispatch('selectCity', key);
        this.$router.push('/filter');
      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/sass/uicomponents/cell.scss";
</style>
