<template>
  <button class="pre-button">
    <span class="pre-button-icon" v-if="icon">
      <slot name="icon">
        <i v-if="icon" class="preui" :class="'preui-' + icon"></i>
      </slot>
    </span>
    <label class="pre-button-text"><slot></slot></label>
  </button>
</template>

<script>
  export default {
    name: 'pre-button',
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    },
    props: {
      icon: String
    }
  }
</script>

<style lang="scss">
@import "../assets/sass/uicomponents/button.scss";
</style>
