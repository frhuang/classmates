<template>
  <header class="pre-header">
    <div class="pre-header-back is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="pre-header-title" v-text="title"></h1>
    <div class="pre-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script type="text/babel">
  export default {
    name: 'pre-header',

    props: {
      fixed: Boolean,
      title: String
    }
  }
</script>

<style lang="scss">
  @import "../assets/sass/uicomponents/header.scss";
</style>
