<template>
  <div class="profession">
    <mt-header title="兴趣爱好">
      <router-link to="/filter" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <pre-cell v-for="interest in interests" :title="interest" :callback="selectInterest"></pre-cell>
  </div>
</template>

<script type="text/babel">
  import { interests } from '../config.js';
  export default {
    data() {
      return {
        interests: interests
      }
    },
    methods: {
      selectInterest(key) {
        this.$store.dispatch('selectInterest', key);
        this.$router.push('/filter');
      }
    }
  }
</script>
