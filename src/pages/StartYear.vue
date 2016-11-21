<template>
  <div class="profession">
    <mt-header title="入学年份">
      <router-link to="/filter" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-cell v-for="year in years" :title="year" is-link></mt-cell>
  </div>
</template>

<script type="text/babel">
  import { years } from '../config.js';
  export default {
    data() {
      return {
        years: years
      }
    }
  }
</script>
