<template>
  <div class="profession">
    <mt-header title="入学年份">
      <router-link to="/filter" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <pre-cell v-for="year in years" :title="year" :callback="selectYear"></pre-cell>
  </div>
</template>

<script type="text/babel">
  import { years } from '../config.js';
  export default {
    data() {
      return {
        years: years
      }
    },
    methods: {
      selectYear(key) {
        this.$store.dispatch('selectYear', key);
        this.$router.push('/filter');
      }
    }
  }
</script>
