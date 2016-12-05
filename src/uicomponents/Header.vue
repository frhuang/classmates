<template>
  <header class="my-header"
    :class="{ 'is-fixed': fixed }">
    <div class="my-header-back is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="my-header-title" v-text="title"></h1>
    <div class="my-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script type="text/babel">
  export default {
    name: 'my-header',

    props: {
      fixed: Boolean,
      title: String
    }
  }
</script>

<style lang="scss">
  @import "../assets/sass/uicomponents/header.scss";
</style>
