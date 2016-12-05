<template>
  <div class="profession">
    <my-header title="入学年份">
      <my-back slot="left"></my-back>
    </my-header>
    <my-cell v-for="year in years" :title="year" @click.native="selectYear(year)"></my-cell>
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
      selectYear(title) {
        this.$store.dispatch('selectFilterYear', title);
        this.$router.go('-1');
      }
    }
  }
</script>
