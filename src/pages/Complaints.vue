<template>
  <div class="complaints">
    <mt-header title="投诉">
      <my-back slot="left"></my-back>
    </mt-header>
    <my-checklist align="right" v-model="value" :options="options"></mt-checklist>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        value: [],
        options: ['骚扰辱骂', '污秽色情', '垃圾广告', '血腥暴力', '欺诈 (酒托、话费托等)', '违法行为 (诈骗、违禁品、反动等)']
      }
    },
    methods: {
    }
  }
</script>
