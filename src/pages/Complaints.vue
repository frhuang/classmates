<template>
  <div class="complaints">
    <my-header title="投诉">
      <my-back slot="left"></my-back>
      <button class="filter-btn" slot="right" title="确定" @click="confirm">确定</button>
    </my-header>
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
      confirm() {

      }
    }
  }
</script>
