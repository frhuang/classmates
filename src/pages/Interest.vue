<template>
  <div class="profession">
    <mt-header title="兴趣爱好">
      <router-link to="/filter" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-cell v-for="interest in interests" :title="interest"></mt-cell>
  </div>
</template>

<script type="text/babel">
  import { interests } from '../config.js';
  export default {
    data() {
      return {
        interests: interests
      }
    }
  }
</script>
