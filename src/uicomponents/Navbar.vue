<template>
  <div class="pre-navbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pre-navbar',
  props: {
    value: {}
  }
};
</script>
<style>
.pre-navbar {
  display: flex;
  text-align: center;
}
</style>
