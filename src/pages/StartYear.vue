<template>
  <div class="profession">
    <mt-header title="入学年份">
      <router-link to="/filter" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <callback-cell v-for="year in years" :title="year" :callback="selectYear"></callback-cell>
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
      selectYear(title, key) {
        this.$store.dispatch('selectFilterYear', title);
        this.$router.go('-1');
      }
    }
  }
</script>
