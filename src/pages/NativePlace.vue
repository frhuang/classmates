<template>
  <div class="nativeplace">
    <pre-header title="籍贯">
      <router-link to="/filter" slot="left">
        <pre-button icon="back"></pre-button>
      </router-link>
    </pre-header>
    <pre-cell v-for="pro, key in address" :title="key" is-link></pre-cell>
  </div>
</template>

<script type="text/babel">
  import PreHeader from '../uicomponents/Header';
  import PreCell from '../uicomponents/Cell';
  import PreButton from '../uicomponents/Button';
  import address from '../places.js';
  export default {
    data() {
      return {
        address: address
      }
    },
    components: {
      PreHeader,
      PreCell,
      PreButton
    }
  }
</script>
