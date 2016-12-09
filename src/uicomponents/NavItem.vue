<template>
  <a class="my-nav-item"
    @click="handClick"
    :class="{ 'is-selected': $parent.value === id && !disabled }">
    <div class="my-nav-item-label"><slot></slot></div>
  </a>
</template>

<script>
export default {
  name: 'my-nav-item',
  props: ['id', 'disabled'],
  methods: {
    handClick() {
      if(!this.disabled) {
        this.$parent.$emit('input', this.id)
      }
    }
  }
}
</script>
