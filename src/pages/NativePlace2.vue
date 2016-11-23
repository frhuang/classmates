<template>
  <div class="nativeplace">
    <mt-header :title="title">
      <router-link to="/filter/nativeplace" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <pre-cell v-for="pro in selectId" :title="pro" @click="selectPlace"></pre-cell>
  </div>
</template>

<script type="text/babel">
  import { address } from '../config.js';
  import PreCell from '../uicomponents/Cell';
  export default {
    data () {
      return {
        title: this.$route.params.id,
        selectId: address[this.$route.params.id]
      }
    },
    methods: {
      selectPlace() {
        console.log(key);
        alert('fsfs');
        // this.$store.dispatch('selectProvince', key);
      }
    },
    components: {
      PreCell
    }
  }
</script>
