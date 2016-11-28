<template>
  <div class="nativeplace">
    <mt-header title="籍贯" fixed>
      <router-link to="/filter" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <div class="cell-list">
      <my-cell v-for="(pro, key) in address" :to="'/filter/nativeplace2/'+key" :title="key" is-link></my-cell>
    </div>
  </div>
</template>

<script type="text/babel">
  import { address } from '../config.js';
  export default {
    data() {
      return {
        address: address
      }
    }
  }
</script>
