<template>
  <div class="my-navbar" :class="{
      'is-fixed': fixed
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-navbar',
  props: {
    fixed: Boolean,
    value: {}
  }
};
</script>
<style lang="scss">
@import "../assets/sass/uicomponents/navbar.scss";
</style>
