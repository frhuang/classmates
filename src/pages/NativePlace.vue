<template>
  <div class="nativeplace">
    <mt-header title="籍贯">
      <router-link to="/filter" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <mt-cell v-for="(pro, key) in address" :title="key" is-link></mt-cell>
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
