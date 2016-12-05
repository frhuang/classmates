<template>
  <button class="my-button"
    @click="handleClick"
    :disabled="disabled">
    <label class="my-button-text"><slot></slot></label>
  </button>
</template>

<script>
  export default {
    name: 'my-button',
    props: {
      disables: Boolean,
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>

<style lang="scss">
@import "../assets/sass/uicomponents/button.scss";
</style>
